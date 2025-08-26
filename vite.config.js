import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gh-pages-test/" // well, whole site blank now on deployment } LOCAL: ../gh-pages-test/ is working for both headshots and cow } setting base as /gh-pages-test/ breaks headshot images but not cow, ../gh-pages-test/ breaks cow but not headshots
});
