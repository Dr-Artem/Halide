export function slugify(input: string) {
	return input
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function makeFilmSlug(
	title: string,
	year: number | null,
	tmdbId: number,
) {
	const base = slugify(title) || `film-${tmdbId}`;
	return year ? `${base}-${year}` : base;
}
