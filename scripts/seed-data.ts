export type SeedEdition = {
	number: number;
	slug: string;
	title: string;
	theme: string;
	curatorNote: string;
	status: 'draft' | 'scheduled' | 'published';
	publishAt: Date | null;
	films: { tmdbId: number; blurb: string }[];
};

export const editions: SeedEdition[] = [
	{
		number: 26,
		slug: 'beneath-the-calm',
		title: 'Beneath the Calm',
		theme: 'Unease, suspicion, uncertainty',
		curatorNote:
			'A familiar room can become unsettling before anything visibly changes. These seven films follow the moment when reassurance gives way to suspicion, and every silence seems to conceal something.',
		status: 'published',
		publishAt: new Date('2026-10-12T08:00:00Z'),
		films: [
			{
				tmdbId: 491584,
				blurb: 'Nothing is certain. Every small detail feels like proof.',
			}, // Burning
			{
				tmdbId: 445,
				blurb: 'The house is familiar. The gaze upon it isn’t.',
			},
			// Caché
			{
				tmdbId: 32646,
				blurb: 'Everything looks safe. Nothing feels that way.',
			}, // Safe
			{
				tmdbId: 592,
				blurb: 'The more you listen, the less you trust what you hear.',
			}, // The Conversation
			{
				tmdbId: 11020,
				blurb: 'A beautiful afternoon, disturbed by something without a name.',
			}, // Picnic at Hanging Rock
			{
				tmdbId: 36095,
				blurb: 'A quiet conversation. An unease that spreads.',
			}, // Cure
			{
				tmdbId: 8740,
				blurb: 'A brief stop. A question that never lets go.',
			}, // The Vanishing / Spoorloos
		],
	},
	{
		number: 27,
		slug: 'a-quiet-kind-of-joy',
		title: 'A Quiet Kind of Joy',
		theme: 'Ritual, attention, tenderness',
		curatorNote:
			'Joy can arrive without an occasion: in a familiar route, a shared meal, or a conversation that asks nothing of us. These seven films find room for wonder within ordinary life, without pretending that its difficulties have disappeared.',
		status: 'published' as const,
		publishAt: new Date('2026-10-19T08:00:00Z'),
		films: [
			{
				tmdbId: 976893,
				blurb: 'The same day, with something new to notice.',
			}, // Perfect Days
			{
				tmdbId: 370755,
				blurb: 'An ordinary life, quietly becoming a poem.',
			}, // Paterson
			{
				tmdbId: 448491,
				blurb: 'A meal, a season, a way back to yourself.',
			}, // Little Forest
			{
				tmdbId: 315846,
				blurb: 'Belonging grows through the smallest acts of care.',
			}, // Our Little Sister
			{
				tmdbId: 414453,
				blurb: 'A little beauty. A conversation. Room to breathe.',
			}, // Columbus
			{
				tmdbId: 15318,
				blurb: 'Between family rituals, a little strangeness blooms.',
			}, // The Taste of Tea
			{
				tmdbId: 404,
				blurb: 'Moving slowly leaves more room for kindness.',
			}, // The Straight Story
		],
	},
	{
		number: 28,
		slug: 'anatomy-of-absence',
		title: 'Anatomy of Absence',
		theme: 'Longing, memory, distance',
		curatorNote:
			'Some people remain with us long after they leave. These seven films trace their presence in remembered gestures, unfinished conversations, and the lives we imagined sharing.',
		status: 'published' as const,
		publishAt: new Date('2026-10-26T08:00:00Z'),
		films: [
			{ tmdbId: 531428, blurb: 'Desire lingers, even in what’s lost.' }, // Portrait of a Lady on Fire
			{ tmdbId: 5165, blurb: 'What remains when someone is gone?' }, // L’Avventura
			{ tmdbId: 843, blurb: 'Some love stories survive by never beginning.' }, // In the Mood for Love
			{ tmdbId: 655, blurb: 'Some places hold you longer than people do.' }, // Paris, Texas
			{
				tmdbId: 25538,
				blurb: 'A shared life, filled with things we never tell each other.',
			}, // Yi Yi
			{
				tmdbId: 965150,
				blurb: 'Memory keeps the moments. Longing fills the gaps.',
			}, // Aftersun
			{ tmdbId: 48303, blurb: 'Even beside someone, we can remain strangers.' }, // Certified Copy
		],
	},
];
