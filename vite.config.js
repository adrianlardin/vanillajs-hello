import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',

  base: '/vanillajs-hello/',  // 👈 AGREGA ESTA LÍNEA

  build: {
    outDir: '../dist',
    emptyOutDir: true, // 👈 recomendable
  },

  server: {
    port: 3000,
  },
});