import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
            rollupOptions: {
                build: {
                    format: "file",
                }
            }
        }
    }
});
