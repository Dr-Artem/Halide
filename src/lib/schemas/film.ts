import { z } from 'zod';

export const sectionSchema = z.object({
	title: z.string().min(1).max(80),
	body: z.string().min(1).max(1200),
});

export const sectionsSchema = z.array(sectionSchema).max(3);

export type Section = z.infer<typeof sectionSchema>;
