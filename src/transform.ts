import MagicString from 'magic-string'
import { HTML_ELEMENT_TAGS } from './constants'
import type { Options } from '.'

export function transform(code: string, basic: string, options?: Options) {
  const { enableElementSelector } = options || {}
  const s = new MagicString(code)

  // generate with html element tags reg
  let withHtmlElementTagsReg = ''
  if (enableElementSelector)
    withHtmlElementTagsReg = `|(${HTML_ELEMENT_TAGS.join('|')})`

  const regStr = `((?<=(\\.|\\#))${withHtmlElementTagsReg})(.*)(?=\\s*\\{)`
  const reg = new RegExp(regStr, 'g')
  const matches = Array.from(code.matchAll(reg))

  if (!matches.length)
    return

  for (const match of matches) {
    const selector = match[0]
    const dot = match[2] || ''
    const raw = `${dot}${selector}`
    if (raw.includes(basic))
      continue

    const start = match.index! - 1
    const end = start + selector.length + 1
    const replacement = `${basic} ${raw}`
    s.update(start, end, replacement)
  }
  return {
    code: s.toString(),
    map: s.generateMap(),
  }
}
