import type { Plugin } from 'vite'
import MagicString from 'magic-string'

function VitePluginBasicCssSelector(basic: string): Plugin {
  return {
    name: 'vite-plugin-basic-css-selector',
    transform(code, id) {
      if (id.endsWith('.css')) {
        const s = new MagicString(code)
        const reg = /(?<=(\.|\#))(.*)(?=\s*\{)/g
        const matches = Array.from(code.matchAll(reg))
        if (!matches.length)
          return

        for (const match of matches) {
          const selector = match[0]
          const dot = match[1]
          const raw = `${dot}${selector}`
          if (raw.includes(basic))
            continue

          const start = match.index! - 1
          const end = start + match[0].length + 1
          const replacement = `${basic} ${raw}`
          s.update(start, end, replacement)
        }
        return {
          code: s.toString(),
          map: s.generateMap(),
        }
      }

      return null
    },
  }
}

export default VitePluginBasicCssSelector
