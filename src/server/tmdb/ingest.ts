import { z } from 'zod';
import { db } from '@/server/db';
import { film } from '@/server/db/schema';
import { makeFilmSlug } from '@/lib/slug';
import { tmdbGet } from './client';

const tmdbMovieSchema = z.object({
	id: z.number(),
	imdb_id: z.string().nullish(),
	title: z.string().min(1),
	original_title: z.string().nullish(),
	release_date: z.string().nullish(),
	runtime: z.number().nullish(),
	poster_path: z.string().nullish(),
	backdrop_path: z.string().nullish(),
	production_countries: z.array(z.object({ name: z.string() })),
	spoken_languages: z.array(z.object({ english_name: z.string() })),
	credits: z.object({
		crew: z.array(z.object({ job: z.string(), name: z.string() })),
	}),
});

export async function ingestFilm(tmdbId: number) {
	const raw = await tmdbGet(`/movie/${tmdbId}`, {
		append_to_response: 'credits',
		language: 'en-US',
	});
	const m = tmdbMovieSchema.parse(raw);

	const year = m.release_date
		? Number.parseInt(m.release_date.slice(0, 4), 10) || null
		: null;

	const director =
		m.credits.crew
			.filter(c => c.job === 'Director')
			.map(c => c.name)
			.join(', ') || null;

	// Только факты из TMDB. Ни slug, ни редакторские поля сюда не входят.
	const facts = {
		imdbId: m.imdb_id || null,
		title: m.title,
		originalTitle:
			m.original_title && m.original_title !== m.title
				? m.original_title
				: null,
		director,
		year,
		runtime: m.runtime || null, // TMDB отдаёт 0, когда не знает
		countries: m.production_countries.map(c => c.name),
		languages: m.spoken_languages.map(l => l.english_name),
		posterPath: m.poster_path ?? null,
		backdropPath: m.backdrop_path ?? null,
	};

	const [row] = await db
		.insert(film)
		.values({ tmdbId: m.id, slug: makeFilmSlug(m.title, year, m.id), ...facts })
		.onConflictDoUpdate({ target: film.tmdbId, set: facts }) // slug не обновляем
		.returning();

	return row;
}
