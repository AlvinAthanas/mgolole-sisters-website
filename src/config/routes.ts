// src/config/routes.ts
export const Routes = {
  // Public pages
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  blog: "/blog",

  // Auth pages
  login: "/signin",
  register: "/signup",
  forgotPassword: "/forgot-password",

  // Admin pages
  admin: {
    dashboard: "/admin/dashboard",
    website: "/admin/website",
    content: "/admin/content",
    media: "/admin/media",
    appearance: "/admin/appearance",
  },
};
