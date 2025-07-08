import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, 
  },
  plugins: [react(), tailwindcss(), compression()],
})
