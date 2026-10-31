import Image from 'next/image';
import { getCurrentEdition } from '@/server/queries/editions';
import { tmdbImage } from '@/lib/tmdb-image';

export default async function Home() {
	const edition = await getCurrentEdition();
	if (!edition) return <main>No edition yet.</main>;

	return (
		<main>
			<h1>{edition.title}</h1>
			<p>{edition.theme}</p>
			<p>{edition.curatorNote}</p>

			<ol>
				{edition.editionFilms.map(({ position, blurb, film }) => {
					const src = tmdbImage(film.backdropPath);
					return (
						<li key={film.id}>
							<span>{String(position).padStart(2, '0')}</span>
							<h2>{film.title}</h2>
							<p>
								{film.director} · {film.year} · {film.runtime} min
							</p>
							<p>{blurb}</p>
							{src && <Image src={src} alt='' width={1280} height={720} />}
						</li>
					);
				})}
			</ol>
		</main>
	);
}
