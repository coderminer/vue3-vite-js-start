import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@module': path.resolve(__dirname, 'src/modules'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@util': path.resolve(__dirname, 'src/utils'),
      '@plugin': path.resolve(__dirname, 'src/plugins'),
      '@dirs': path.resolve(__dirname, 'src/directives'),
      '@layout': path.resolve(__dirname, 'src/layouts')
    }
  }
})
