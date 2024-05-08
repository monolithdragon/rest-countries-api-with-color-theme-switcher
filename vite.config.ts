/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/vitest-setup.tsx'],
    coverage: {
      provider: 'istanbul',
      reporter: ['html'],
    },
  },
  base: '/rest-countries-api-with-color-theme-switcher/',
});
