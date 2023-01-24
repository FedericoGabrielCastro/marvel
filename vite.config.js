import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * defineConfig.
 *
 * Purpose:
 * - Vite config.
 *
 * References:
 * - https://vitejs.dev/config/
 * - https://www.raulmelo.dev/til/how-to-fix-resolve-alias-problem-in-vite-js
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@layout': path.resolve(__dirname, './src/layout'),
      '@views': path.resolve(__dirname, './src/views'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@style': path.resolve(__dirname, './src/style'),
      '@api': path.resolve(__dirname, './src/api'),
      '@redux': path.resolve(__dirname, './src/redux'),
    }
  }
})
