import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import DotenvWebpackPlugin from 'dotenv-webpack'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
})
