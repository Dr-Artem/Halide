import type { Section } from '@/lib/schemas/film';
import {
	pgTable,
	pgEnum,
	serial,
	integer,
	text,
	timestamp,
	primaryKey,
	uniqueIndex,
	jsonb,
} from 'drizzle-orm/pg-core';

export const editionStatus = pgEnum('edition_status', [
	'draft',
	'scheduled',
	'published',
]);

export const film = pgTable('film', {
	id: serial('id').primaryKey(),
	tmdbId: integer('tmdb_id').notNull().unique(),
	imdbId: text('imdb_id'),
	slug: text('slug').notNull().unique(),
	title: text('title').notNull(),
	originalTitle: text('original_title'),
	director: text('director'),
	year: integer('year'),
	runtime: integer('runtime'),
	countries: text('countries').array(),
	languages: text('languages').array(),
	posterPath: text('poster_path'),
	backdropPath: text('backdrop_path'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const filmEditorial = pgTable('film_editorial', {
	filmId: integer('film_id')
		.primaryKey()
		.references(() => film.id, { onDelete: 'cascade' }),
	tagline: text('tagline'),
	essay: text('essay'),
	quote: text('quote'),
	quoteSource: text('quote_source'),
	aspectRatio: text('aspect_ratio'),
	camera: text('camera'),
	awards: text('awards'),
	sections: jsonb('sections').$type<Section[]>(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const edition = pgTable('edition', {
	id: serial('id').primaryKey(),
	number: integer('number').notNull().unique(),
	slug: text('slug').notNull().unique(),
	title: text('title').notNull(),
	theme: text('theme'),
	curatorNote: text('curator_note'),
	status: editionStatus('status').notNull().default('draft'),
	publishAt: timestamp('publish_at'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const editionFilm = pgTable(
	'edition_film',
	{
		editionId: integer('edition_id')
			.notNull()
			.references(() => edition.id, { onDelete: 'cascade' }),
		filmId: integer('film_id')
			.notNull()
			.references(() => film.id, { onDelete: 'restrict' }),
		position: integer('position').notNull(),
		blurb: text('blurb'),
	},
	t => [
		primaryKey({ columns: [t.editionId, t.filmId] }),
		uniqueIndex('edition_position_idx').on(t.editionId, t.position),
	],
);
