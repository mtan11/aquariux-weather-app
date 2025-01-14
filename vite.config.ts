import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    react(),
    eslint({
      exclude: ['/virtual:/**'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@aquariux',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  server: {
    port: 8000,
  },
});
