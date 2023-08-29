import { defineConfig } from 'vite'
import BasicCssSelector from 'vite-plugin-basic-css-selector'

export default defineConfig({
  plugins: [
    BasicCssSelector('#app'),
  ],
})
