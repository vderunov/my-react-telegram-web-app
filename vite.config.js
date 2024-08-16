import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      '@web3modal/core': path.resolve(
        __dirname,
        'node_modules/@web3modal/core'
      ),
    },
  },
  build: {
    outDir: './docs',
    rollupOptions: {
      external: ['@web3modal/common', '@web3modal/core', '@web3modal/wallet'],
    },
  },
  base: './',
});
