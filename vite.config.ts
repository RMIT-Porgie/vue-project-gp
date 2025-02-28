import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-project-gp/',  // Add this line - should match your repository name
  plugins: [vue()]
})
