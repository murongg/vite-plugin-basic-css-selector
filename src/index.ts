import type { Plugin } from 'vite'
import { transform } from './transform'

export interface Options {
  enforce?: Plugin['enforce']
  apply?: Plugin['apply']
  /**
   * support html element tags
   * @default false
   */
  enableElementTag?: boolean
}

function VitePluginBasicCssSelector(basic: string, options?: Options): Plugin {
  return {
    name: 'vite-plugin-basic-css-selector',
    enforce: options?.enforce,
    apply: options?.apply,
    transform(code, id) {
      if (id.endsWith('.css'))
        return transform(code, basic)
    },
  }
}

export default VitePluginBasicCssSelector
