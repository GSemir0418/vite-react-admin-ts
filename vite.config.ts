import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generateHtmlWithRoutes from './src/plugins/generateHtmlWithRoutes'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generateHtmlWithRoutes()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
  server: {
    open: true,
    proxy: {
      '/dev': {
        target: 'http://10.30.20.95:9725',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/dev/, ''),
      },
    },
  },
  build: {
    assetsDir: '',
  },
  base: '/scmbps',
})
