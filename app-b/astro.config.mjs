import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        build: {
          format: "file"
        }
      }
    }
  },
  build: {
    assetsPrefix: "http://localhost:7200"
  },
  server: {
    port: 7200
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});