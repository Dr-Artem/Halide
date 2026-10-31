import { ingestFilm } from '@/server/tmdb/ingest';

const ids = process.argv.slice(2).map(Number);
if (ids.length === 0 || ids.some(Number.isNaN)) {
	console.error('Usage: bun ./scripts/ingest.ts <tmdbId> [<tmdbId> ...]');
	process.exit(1);
}

for (const id of ids) {
	const f = await ingestFilm(id);
	console.log(`✓ ${f.title} (${f.year}) → ${f.slug}`);
}
process.exit(0);
