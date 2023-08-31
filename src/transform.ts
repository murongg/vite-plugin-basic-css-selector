import MagicString from 'magic-string'
import { HTML_ELEMENT_TAGS } from './constants'
import { cssFormat } from './format'
import type { Options } from '.'

export function transform(code: string, basic: string, options?: Options) {
  const { enableElementTag = false, enableUniversal = false } = options || {}
  const css = cssFormat(code)
  const s = new MagicString(css)

  // generate with html element tags reg
  let withHtmlElementTagsReg = ''
  if (enableElementTag)
    withHtmlElementTagsReg = `|\\b(${HTML_ELEMENT_TAGS.join('|')})\\b(.*)`

  const universalSelectorReg = enableUniversal ? '|(?<=(\\*))(.*)' : ''
  const classSelectorReg = '(?<=^(\\.|\\#))(.*)'
  const regStr = `(${classSelectorReg}${universalSelectorReg}${withHtmlElementTagsReg})(?=\\s*\\{)`
  const reg = new RegExp(regStr, 'gm')
  const matches = Array.from(css.matchAll(reg))

  if (!matches.length)
    return

  for (const match of matches) {
    const selector = match[0]
    const dot = match[2] || ''
    const universal = match[4] && enableUniversal ? match[4] || '' : ''
    const raw = `${universal}${dot}${selector}`
    if (raw.includes(basic))
      continue

    const offset = match.index! > 0 ? 1 : 0
    const start = match.index! - offset
    const end = start + selector.length + offset
    const replacement = `${basic} ${raw}`
    s.update(start, end, replacement)
  }

  return {
    code: s.toString(),
    map: s.generateMap(),
  }
}
