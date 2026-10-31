import { env } from '@/env';

const BASE = 'https://api.themoviedb.org/3';

export class TmdbError extends Error {
	constructor(
		public status: number,
		message: string,
	) {
		super(message);
	}
}

export async function tmdbGet(
	path: string,
	params: Record<string, string> = {},
) {
	const url = new URL(BASE + path);
	for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${env.TMDB_READ_TOKEN}`,
			accept: 'application/json',
		},
		signal: AbortSignal.timeout(10_000),
	});
	if (!res.ok)
		throw new TmdbError(res.status, `TMDB ${res.status} for ${path}`);
	return (await res.json()) as unknown;
}
