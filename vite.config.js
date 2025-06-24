// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/', // ⚠️ Your GitHub repo name here
  plugins: [react()],
})