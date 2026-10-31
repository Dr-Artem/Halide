// src/server/queries/editions.ts
import 'server-only';
import { cacheLife, cacheTag } from 'next/cache';
import { db } from '@/server/db';

export async function getCurrentEdition() {
	'use cache';
	cacheTag('editions');
	cacheLife('hours');

	return db.query.edition.findFirst({
		where: { status: 'published', publishAt: { lte: new Date() } },
		orderBy: { publishAt: 'desc' },
		with: {
			editionFilms: {
				orderBy: { position: 'asc' },
				with: { film: true },
			},
		},
	});
}

export async function getPublishedEditions() {
	'use cache';
	cacheTag('editions');
	cacheLife('hours');

	return db.query.edition.findMany({
		where: { status: 'published', publishAt: { lte: new Date() } },
		orderBy: { publishAt: 'desc' },
	});
}
