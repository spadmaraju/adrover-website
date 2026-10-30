import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        [
          "index",
          "advertising",
          "how-it-works",
          "pricing",
          "contact",
          "review",
          "references",
        ].map((page) => [page, resolve(import.meta.dirname, `${page}.html`)]),
      ),
    },
  },
});
