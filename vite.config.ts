import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/testeTodo',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/@types'),
      _STR: path.resolve(__dirname, './src/services/store'),
      _SRV: path.resolve(__dirname, './src/services'),
      '~': path.resolve(__dirname, './src'),
    },
  },
})
