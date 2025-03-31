import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
      port: 7000
  },
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [{
    name: 'importmap-externals',
    hooks: {
      'astro:build:setup': ({ vite, target }) => {
        if(target === 'client') {
          vite.build.rollupOptions["external"] = ["react", "react-dom"];
        }
      }
    }
  }, react()]
});