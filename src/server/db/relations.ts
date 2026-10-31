import { defineRelations } from 'drizzle-orm';
import * as schema from './schema';

export const relations = defineRelations(schema, r => ({
	edition: {
		editionFilms: r.many.editionFilm(),
	},
	editionFilm: {
		edition: r.one.edition({
			from: r.editionFilm.editionId,
			to: r.edition.id,
			optional: false,
		}),
		film: r.one.film({
			from: r.editionFilm.filmId,
			to: r.film.id,
			optional: false,
		}),
	},
	film: {
		editorial: r.one.filmEditorial({
			from: r.film.id,
			to: r.filmEditorial.filmId,
		}),
	},
}));
