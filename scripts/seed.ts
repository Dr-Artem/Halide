import { eq } from 'drizzle-orm';
import { db } from '@/server/db';
import { edition, editionFilm } from '@/server/db/schema';
import { ingestFilm } from '@/server/tmdb/ingest';
import { editions } from './seed-data';

for (const e of editions) {
	const ids = e.films.map(f => f.tmdbId);
	if (e.films.length !== 7) {
		throw new Error(
			`Edition ${e.number}: expected 7 films, got ${e.films.length}`,
		);
	}
	if (new Set(ids).size !== ids.length) {
		throw new Error(`Edition ${e.number}: duplicate tmdbId`);
	}

	// 1. Сначала вся сеть. Если TMDB упадёт, в базе издание не изменится.
	const films = [];
	for (const f of e.films) {
		const row = await ingestFilm(f.tmdbId); // по очереди, из-за лимитов TMDB
		console.log(`  ${e.number} · ${row.title} (${row.year}) [${f.tmdbId}]`);
		films.push({ filmId: row.id, blurb: f.blurb });
	}

	// 2. Потом запись в базу.
	const { films: _films, ...fields } = e;
	const [ed] = await db
		.insert(edition)
		.values(fields)
		.onConflictDoUpdate({ target: edition.slug, set: fields })
		.returning({ id: edition.id });

	await db.batch([
		db.delete(editionFilm).where(eq(editionFilm.editionId, ed.id)),
		db
			.insert(editionFilm)
			.values(
				films.map((f, i) => ({ editionId: ed.id, position: i + 1, ...f })),
			),
	]);

	console.log(`✓ Edition ${e.number} «${e.title}» (${e.status})`);
}

process.exit(0);
