const BASE = 'https://image.tmdb.org/t/p';

export function tmdbImage(
	path: string | null,
	size: 'w500' | 'w780' | 'w1280' | 'original' = 'original',
) {
	return path ? `${BASE}/${size}${path}` : null;
}
