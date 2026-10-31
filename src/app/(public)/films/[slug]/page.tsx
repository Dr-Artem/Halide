import { Suspense } from 'react';

type Props = { params: Promise<{ slug: string }> };

export default function Page({ params }: Props) {
	return (
		<Suspense fallback={<main>Loading…</main>}>
			<Content params={params} />
		</Suspense>
	);
}

async function Content({ params }: Props) {
	const { slug } = await params;
	return <main>{slug}</main>;
}
