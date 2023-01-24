import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
      // '@assets': path.resolve(__dirname, './src/assets'),
      // '@charts': path.resolve(__dirname, './src/charts'),
      // '@components': path.resolve(__dirname, './src/components'),
      // '@graphql': path.resolve(__dirname, './src/graphql'),
      // '@hooks': path.resolve(__dirname, './src/hooks'),
      // '@layout': path.resolve(__dirname, './src/layout'),
      // '@pages': path.resolve(__dirname, './src/pages'),
      // '@redux': path.resolve(__dirname, './src/redux'),
      // '@routes': path.resolve(__dirname, './src/routes'),
      // '@utils': path.resolve(__dirname, './src/utils'),
      // '@style': path.resolve(__dirname, './src/style'),
      // '@interfaces': path.resolve(__dirname, './src/interfaces'),
      // '@forms': path.resolve(__dirname, './src/forms'),
    },
  },
})
