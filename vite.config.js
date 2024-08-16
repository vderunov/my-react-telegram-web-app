import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: './docs',
    rollupOptions: {
      external: ['react-is', 'lit-html']
    },
    optimizeDeps: {
      include: ['react-is', 'lit-html']
    }
  },
  resolve: {
    alias: {
      // Polyfill Buffer globally for older packages
      buffer: 'buffer/',
    },
  },
  base: './'
});
