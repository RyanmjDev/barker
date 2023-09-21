import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Used so we can preview on mobile, delete later
  server: {
    host: '0.0.0.0',
    https: false 
  }
})
