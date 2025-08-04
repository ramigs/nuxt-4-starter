import { z } from 'zod';

import tryParseEnv from './tryParseEnv';

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  NUXT_PUBLIC_BASE_URL: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

export default EnvSchema.parse(process.env);
