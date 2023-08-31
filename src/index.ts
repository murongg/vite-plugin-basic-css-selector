// eslint-disable
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
  /**
   * support universal selector '*'
   * @default false
   */
  enableUniversal?: boolean
}

function VitePluginBasicCssSelector(basic: string, options?: Options): Plugin {
  return {
    name: 'vite-plugin-basic-css-selector',
    enforce: options?.enforce,
    apply: options?.apply,
    transform(code: string, id: string) {
      if (id.endsWith('.css'))
        return transform(code, basic, options, id)
    },
  }
}

export { transform }
export default VitePluginBasicCssSelector
