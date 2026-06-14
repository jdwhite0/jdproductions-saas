import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const APP_BASE_URL = `${env.VITE_APP_BASE_URL}`;

  return {
    server: {
      port: 5173,
      host: true
    },
    preview: {
      host: true
    },
    define: {
      global: 'window'
    },
    base: APP_BASE_URL,
    plugins: [react(), jsconfigPaths()],
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            mui: ['@mui/material', '@mui/x-charts'],
            react: ['react', 'react-dom'],
            vendor: ['lodash-es', 'swr', 'react-router-dom'],
          }
        }
      }
    }
  };
});
