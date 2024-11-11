import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    reporters: ['verbose'],
    setupFiles: ['./__tests__/setup.ts'],
    include: ['./__tests__/unit/**/*'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/@types'),
      _STR: path.resolve(__dirname, './src/services/store'),
      _SRV: path.resolve(__dirname, './src/services'),
      '~': path.resolve(__dirname, './src'),
    },
  },
})
