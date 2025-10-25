import { getValidatedEnv } from './env/';

getValidatedEnv();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },
  compatibilityDate: '2025-07-15',
  telemetry: false,
  eslint: {
    config: {
      stylistic: {
        semi: true,
        commaDangle: 'always-multiline',
      },
    },
  },
});
