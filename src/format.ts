import { css_beautify } from 'js-beautify'

export function cssFormat(code: string, type: 'tab' | 'space' = 'space', indent = 2) {
  return css_beautify(code, {
    indent_size: indent,
    indent_with_tabs: type === 'tab',
  })
}
