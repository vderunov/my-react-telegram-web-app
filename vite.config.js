import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: './docs',
    rollupOptions: {
      external: ['@web3modal/common', '@web3modal/core', '@web3modal/wallet'],
    },
  },
  base: './',
});
