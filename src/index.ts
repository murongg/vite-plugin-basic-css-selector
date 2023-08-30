import type { Plugin } from 'vite'
import { transform } from './transform'

export interface Options {
  enforce?: Plugin['enforce']
  apply?: Plugin['apply']
}

function VitePluginBasicCssSelector(basic: string, options?: Options): Plugin {
  return {
    name: 'vite-plugin-basic-css-selector',
    enforce: options?.enforce,
    apply: options?.apply,
    transform(code, id) {
      return transform(code, id, basic)
    },
  }
}

export default VitePluginBasicCssSelector
