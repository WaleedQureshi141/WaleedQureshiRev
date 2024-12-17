import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  /*
  if i want to change the server
  server
  {
    port: 3000
  }
  */
})
