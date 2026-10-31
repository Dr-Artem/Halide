import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		DATABASE_URL: z.url(),
		TMDB_READ_TOKEN: z.string().min(20),
	},
	client: {},
	experimental__runtimeEnv: {},
});
