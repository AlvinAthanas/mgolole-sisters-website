const isBrowser = typeof window !== "undefined";


export const BASE_URL = isBrowser
  ? `${window.location.protocol}//${import.meta.env.VITE_BASE_DOMAIN}`
  : `https://${import.meta.env.VITE_BASE_DOMAIN}`;

export const API_URL = isBrowser
  ? `${window.location.protocol}//${import.meta.env.VITE_API_URL}`
  : `https://${import.meta.env.VITE_API_URL}`;