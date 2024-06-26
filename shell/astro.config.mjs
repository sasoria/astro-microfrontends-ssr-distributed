import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'hybrid',
    server: {
        port: 7000
    }
});
