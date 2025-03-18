import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['cloudinary'], // Ignore Cloudinary in dependencies
  },
  build: {
    rollupOptions: {
      external: ['cloudinary'], // Exclude Cloudinary from bundling
    },
  },
  server: {
    fs: {
      allow: ['.'], // Prevent Vite from reading backend files
    },
  },
});
