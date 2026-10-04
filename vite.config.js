import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/*.mp4',
        '**/*.webp',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
        '**/*.gif',
        '**/*.svg',
        '**/*.ico',
        '**/hero video.mp4',
        '**/Hero-video.mp4',
      ],
    },
  },
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
