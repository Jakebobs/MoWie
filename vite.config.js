import { defineConfig } from 'vite';
import reactJsxPlugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        reactJsxPlugin(),
    ],
    server: {
        host: "0.0.0.0",
        port: 8080,
        // Added because npm run dev doesn't refresh UI automatically
        watch: {
            usePolling: true
        }
    },
    build: {
        sourcemap: true,
        minify: false
    }
});