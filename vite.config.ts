import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' supaya hasil build bisa ditaruh di subfolder mana pun (GitHub Pages, hosting kampus, dll.)
export default defineConfig({
  plugins: [react()],
  base: './',
})
