import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// You can destructure your env variables
const { VITE_SITE_URL, VITE_PORT } = process.env;

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(VITE_PORT), // fallback if not set
    allowedHosts: [VITE_SITE_URL || "localhost", `www.${VITE_SITE_URL}`],
    host: true,
    strictPort: true,
  },
  resolve: {
    alias: {},
  },
  optimizeDeps: {
    include: ["@mui/icons-material", "@mui/material"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      esmExternals: true,
    },
    outDir: "dist/client", // <- output for Capacitor
    ssr: false,
  },
  ssr: {
    noExternal: [
      "@mui/icons-material",
      "@mui/material",
      "@mui/utils",
      "@mui/system",
      "@mui/x-date-pickers",
      "@mui/x-data-grid",
      "@mui/x-tree-view",
      "@mui/x-internals",
      "@mui/x-charts",
      "mui-tiptap",
      "@mui/styled-engine",
    ],
  },
});
