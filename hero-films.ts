type Phase = {
	num: string;
	title: string;
	desc: string;
};

export interface Film {
	id: number;
	title: string;
	director: string;
	year: number;
	country: string;
	runtime: string;
	ratio: string;
	emulsion: string;
	language: string;
	classNo: string;
	awards: string;
	longShort: string;
	curatorNote: string;
	quote: string;
	quoteSrc: string;
	phases: Phase[];
	tickerLabel: string;
	still: string;
}

export const FILMS: Film[] = [
	{
		id: 0,
		title: 'Portrait of \na Lady on Fire',
		director: 'Céline Sciamma',
		year: 2019,
		country: 'France',
		runtime: '122 min',
		ratio: '1.85:1',
		emulsion: 'Digital — Red Monstro 8K',
		language: 'French',
		classNo: 'SCI-2019',
		awards: 'Cannes Best Screenplay; Queer Palm, 2019',
		longShort:
			'Every glance becomes a portrait. The film asks whether we ever truly see someone — or only the memory we create of them.',
		curatorNote:
			"1770. A painter is commissioned to portrait a young woman who refuses to be seen. The film is about looking — how to look at someone who knows you're looking, how an image is both a record and a theft, how love is the decision to remember. No musical score for the first hour. The silence is the argument.",

		quote: "Do all lovers feel they're inventing something?",
		quoteSrc: '— Héloïse, Second Act',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: "Sciamma and cinematographer Claire Mathon built the film around natural daylight and candlelight, chasing the softness and restraint of eighteenth-century painting. Interiors glow as if illuminated from within, while every shadow feels deliberate. The result is a film that doesn't simply show paintings — it learns how to see like one.",
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: 'Shot in 1.85:1, the film uses widescreen space with the discipline of portrait painting. Characters are framed as subjects rather than performers, suspended in carefully balanced compositions. Looking becomes the drama itself: who watches, who is seen, and how an image changes the moment it is made.',
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: 'Portrait of a Lady on Fire is obsessed with memory: how a face survives in the mind after it disappears from view. Sciamma treats love not as possession, but as an act of attention — fragile, temporary, and impossible to forget. The film preserves moments the way a painting preserves light: knowing they are already gone.',
			},
		],
		tickerLabel:
			'Portrait of a Lady on Fire, 2019 — because to paint someone is to decide how to lose them →',
		still:
			'https://image.tmdb.org/t/p/original/foFq1RZWQIgFuCQ0nyYccywjFyX.jpg',
	},
	{
		id: 1,
		title: "L'Avventura",
		director: 'Michelangelo Antonioni',
		year: 1961,
		country: 'Italy',
		runtime: '143 min',
		ratio: '1.85:1',
		emulsion: 'Arriflex 35',
		language: 'Italian',
		classNo: 'ANT-1961',
		awards: 'Cannes Jury Prize, 1960',
		longShort:
			"A woman disappears, and the film forgets to look for her. What remains is one of cinema's strangest discoveries: absence can be more powerful than presence.",
		curatorNote:
			"A woman disappears on a volcanic island. The search for her slowly becomes something else entirely — a new attachment forming in the space loss leaves behind. Antonioni's most unsettling idea is that people don't heal from absence; they learn to live inside it.",
		quote: 'Perhaps boredom is nothing but the inability to love.',
		quoteSrc: '— Scene Sub-Frame Capture, Act II',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: "Antonioni filmed on the Aeolian Islands, turning volcanic rock and open sea into emotional architecture. The landscape doesn't reflect the characters' feelings — it overwhelms them. People become small, fragile figures swallowed by space.",
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: 'Shot in 1.85:1, Antonioni constantly separates people from the centre of the frame. Architecture, sea, and empty space compete with human emotion. The camera observes from a distance, as if certainty itself has vanished.',
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: "Booed at Cannes in 1960, then defended by filmmakers who recognised something entirely new. L'Avventura changed cinema by refusing resolution. Its silences, hesitations, and empty spaces still echo through modern film.",
			},
		],
		tickerLabel: "L'Avventura, 1961 — because absence is the subject →",
		still:
			'https://image.tmdb.org/t/p/original/8hoFB4o6kHirqaitjNGglTkcmJ4.jpg',
	},
	{
		id: 2,
		title: 'In the Mood for Love',
		director: 'Wong Kar-wai',
		year: 2000,
		country: 'Hong Kong',
		runtime: '98 min',
		ratio: '1.66:1',
		emulsion: 'ARRIFLEX 35 BL4',
		language: 'Cantonese',
		classNo: 'WKW-2000',
		awards: 'Cannes Best Actor, 2000',
		longShort:
			'Two people fall in love by refusing to. Desire lives in the spaces between them, stretched across hallways, rainstorms, and years that can never return.',
		curatorNote:
			'Two neighbors discover their spouses are having an affair. What follows is not revenge, nor confession, but the most exquisitely restrained almost-love in cinema. Wong Kar-wai shot for over a year, shaping scenes through improvisation until the film itself began to feel like memory — saturated, elusive, impossible to hold.',
		quote:
			'He remembers those vanished years. As though looking through a dusty window pane, the past is something he could see, but not touch.',
		quoteSrc: '— Intertitle, Final Sequence',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: "Maggie Cheung wears more than twenty cheongsams, each transforming mood through colour, texture, and repetition. The costumes don't explain emotion — they prolong it, turning memory into something visible. Clothing becomes a second cinematography.",
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: 'Shot in 1.66:1, the film frames its characters through doorways, mirrors, and narrow corridors. Space becomes emotion: every wall separates, every hallway delays, every frame traps desire just out of reach.',
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: "Nat King Cole's songs drift through the film like memories from another life. Their language belongs to neither character, yet somehow speaks for both. Long after the story ends, the music is what remains.",
			},
		],
		tickerLabel:
			'In the Mood for Love, 2000 — because some distances are measured in inches →',
		still:
			'https://image.tmdb.org/t/p/original/xmyEE9X057s4eNYktFjaEFNaILM.jpg',
	},
	{
		id: 3,
		title: 'Paris, Texas',
		director: 'Wim Wenders',
		year: 1984,
		country: 'Iran',
		runtime: '145 min',
		ratio: '1.66:1',
		emulsion: 'Arriflex 35 BL3',
		language: 'English',
		classNo: 'WEN-1984',
		awards: "Palme d'Or, Cannes 1984",
		longShort:
			'A man returns, but his life does not. The film asks whether love can survive as memory once it can no longer survive as life.',
		curatorNote:
			'A man walks out of the desert with no memory of who he was. The journey home becomes something stranger: an attempt to reconstruct a life already lost. Wenders turns memory into landscape — vast, beautiful, and impossible to cross.',
		quote:
			'I knew these people. These two people. They were in love with each other.',
		quoteSrc: '— Travis, Peep Show Monologue',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: "Robby Müller's cinematography transforms the American Southwest into a landscape of memory. The desert is not empty — it is where Travis has hidden himself. Every horizon feels infinite, and every road leads backward.",
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: 'Shot in 1.66:1, the film frames people through windows, mirrors, and panes of glass. The most important conversation happens with a one-way mirror between two former lovers. Seeing becomes possible only when touching is no longer allowed.',
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: "Winner of the Palme d'Or in 1984, Paris, Texas endures because it understands that some wounds cannot heal. Love survives not as reunion, but as the decision to let someone go. The final image fades, yet the feeling never does.",
			},
		],
		tickerLabel: 'Paris, Texas, 1984 — because memory is the longest road →',
		still:
			'https://image.tmdb.org/t/p/original/wEloTqmjPA2wrdwFnAnEyt3v6vv.jpg',
	},
	{
		id: 4,
		title: 'Yi Yi',
		director: 'Edward Yang',
		year: 2000,
		country: 'Taiwan',
		runtime: '173 min',
		ratio: '1.85:1',
		emulsion: 'Kodak Vision 500T',
		language: 'Mandarin',
		classNo: 'YNG-2000',
		awards: 'Cannes Best Director, 2000',
		longShort:
			'A child photographs what people cannot see themselves. The film suggests that love may simply be helping each other discover the missing half.',
		curatorNote:
			"A Taiwanese family across three generations, over one long summer. A young boy photographs the backs of people's heads — the parts they cannot see themselves. Edward Yang turns ordinary life into a quiet revelation: we only ever know half of the world, and half of ourselves.",
		quote:
			"You can only see half the world. I wanted to give people the other half they couldn't see.",
		quoteSrc: '— Yang-Yang, Final Scene',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: 'Taipei is filmed as a city of reflections: windows mirror streets, faces overlap skylines, and every image contains another hidden inside it. Edward Yang is fascinated by the gap between what we see and what remains unseen.',
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: "Shot in carefully balanced wide frames, Yi Yi observes its characters from a gentle distance. The camera never judges and never rushes. Like Yang-Yang's photographs, each scene reveals something people cannot see about themselves.",
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: "Edward Yang's final completed film is also his most generous. Yi Yi understands that most lives are made of things too small to notice while they happen. Only later do they become memories, and only then do we realize they were everything.",
			},
		],
		tickerLabel:
			'Yi Yi, 2000 — because the back of your head is a mystery to you →',
		still:
			'https://image.tmdb.org/t/p/original/u60v0YdMP0pVQ551oCsHXkAknXG.jpg',
	},
	{
		id: 5,
		title: 'Aftersun',
		director: 'Charlotte Wells',
		year: 2022,
		country: 'United Kingdom',
		runtime: '102 min',
		ratio: '1.85:1',
		emulsion: 'Digital — ARRICAM Lite (LT) Camera',
		language: 'English',
		classNo: 'WEL-2022',
		awards: 'BAFTA Outstanding Debut; Cannes Critics Week',
		longShort:
			'A daughter remembers her father. The film knows memory is incomplete, and loves anyway.',
		curatorNote:
			'A daughter remembers a holiday with her father twenty years later. But memory is incomplete: gestures linger, faces blur, and the most important things were never spoken aloud. Aftersun is less a story than an act of reconstruction — a search for someone who was already disappearing.',
		quote: 'When you were eleven, what did you think you would be doing now?',
		quoteSrc: '— Sophie to Calum',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: 'Charlotte Wells layers polished digital images with grainy camcorder footage, blurring the boundary between memory and record. The past appears in fragments — unstable, overexposed, impossible to hold still.',
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: "Shot in intimate 1.85:1 frames, Aftersun constantly observes Calum from slightly too far away. We see what Sophie remembers, but never everything she longs to know. The distance between them becomes the film's deepest wound.",
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: 'Aftersun understands that grief is not the opposite of love, but its continuation. The film ends, yet Sophie keeps remembering, searching, and rewriting the past. So do we.',
			},
		],
		tickerLabel: 'Aftersun, 2022 — because memory never stops editing →',
		still:
			'https://image.tmdb.org/t/p/original/hhICjHximfBciqxX09d91GgghV8.jpg',
	},
	{
		id: 6,
		title: 'Certified Copy',
		director: 'Abbas Kiarostami',
		year: 2010,
		country: 'France / Italy',
		runtime: '106 min',
		ratio: '1.85:1',
		emulsion: 'Digital — Canon EOS 5D',
		language: 'English / French / Italian',
		classNo: 'KIA-2010',
		awards: 'Cannes Best Actress (Binoche), 2010',
		longShort:
			'Two people may be falling in love, or remembering it. The film never tells us which version is true.',
		curatorNote:
			'A man and a woman spend an afternoon together in Tuscany. By the middle of the film they may be strangers, or they may have been married for years — Kiarostami never resolves the contradiction, and eventually you stop asking him to. The film suggests that authenticity may be less important than the feelings we choose to believe.',
		quote: 'A copy can be more beautiful than the original.',
		quoteSrc: '— James Miller',
		phases: [
			{
				num: '01',
				title: 'Emulsion Dispersion',
				desc: 'The film begins with a lecture on originals and copies, but quickly abandons certainty. Paintings, mirrors, and reflections repeat throughout, asking whether authenticity lives in objects — or in the emotions they awaken.',
			},
			{
				num: '02',
				title: 'The Zone Capture',
				desc: 'The transformation happens off-screen. A stranger mistakes them for a married couple, and Kiarostami refuses to show the moment they accept or reject the idea. When the camera returns, reality has quietly rearranged itself.',
			},
			{
				num: '03',
				title: 'Latent Image Fixed',
				desc: 'Certified Copy offers no solution because certainty is not its subject. Long after the film ends, the question remains: if a feeling changes your life, does it matter whether it was ever real?',
			},
		],
		tickerLabel: 'Certified Copy, 2010 — because the original may not matter →',
		still:
			'https://image.tmdb.org/t/p/original/nyQXhU38nauGDRvJkgm5YM3qXiK.jpg',
	},
];
