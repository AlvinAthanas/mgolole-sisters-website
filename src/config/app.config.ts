export const AppConfig = {
  site: {
    name: import.meta.env.VITE_SITE_NAME,
    url: import.meta.env.VITE_SITE_URL,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL,
  },
  analytics: {
    gaId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  },
  port: import.meta.env.VITE_PORT,
};
