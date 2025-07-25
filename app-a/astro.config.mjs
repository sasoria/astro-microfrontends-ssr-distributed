import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: "http://localhost:4000",
    inlineStylesheets: "always",
  },
  server: {
    port: 7100,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    {
      name: "importmap-externals",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.build.rollupOptions["external"] = [
              "react",
              "react-dom",
              "scheduler",
              "react-dom/client",
              "react/jsx-runtime",
            ];
          }
        },
      },
    },
    react(),
  ],
});
