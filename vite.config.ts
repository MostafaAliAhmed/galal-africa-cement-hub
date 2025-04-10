import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  // ✅ GitHub Pages base path must match your repo name
  base: "/galal-africa-cement-hub/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    componentTagger(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
