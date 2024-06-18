import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/types': path.resolve(__dirname, './src/types'),
      '@/icons': path.resolve(__dirname, './src/components/icons'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/UI': path.resolve(__dirname, './src/components/UI'),
      '@': path.resolve(__dirname, './src'),
    },
  },
})
