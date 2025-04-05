import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        build: {
          format: "file",
        },
      },
    },
  },
  server: {
    port: 7200,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
