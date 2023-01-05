import { defineConfig } from 'astro/config'

// https://gist.github.com/jaames/76130b03465e7e7a9dd0405fdca05888
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: { alias: { '@/': `${path.resolve(__dirname, 'src')}/` } },
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use '@/styles/bp.scss' as bp;` }
      }
    }
  }
})
