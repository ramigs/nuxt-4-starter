import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  NUXT_PUBLIC_BASE_URL: z.string(),
  PORT: z.coerce.number().min(1000),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

/**
 * Parses and validates environment variables against the schema.
 * @returns The validated environment object.
 */
export function getValidatedEnv(): EnvSchema {
  return EnvSchema.parse(process.env);
}
