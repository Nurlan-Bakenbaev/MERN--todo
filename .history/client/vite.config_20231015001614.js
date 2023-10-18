import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'customhostname', // Set your custom host
    port: 8080, // Set your custom port
  },
  plugins: [react()],
})
