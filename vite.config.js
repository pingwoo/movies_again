import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const base = mode === 'production' ? '/movies_again/' : '/'

  return defineConfig({
    plugins: [react()],
    base,
    server: {
      host: true
    }
  })
}