/// <reference types="vite/client" />
// src/env.d.ts
interface ImportMetaEnv {
  readonly VITE_SITE_NAME: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_PORT: string;
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
