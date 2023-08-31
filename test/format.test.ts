import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { cssFormat } from '../src/format'

describe('format', () => {
  it('should basic format', () => {
    const code = cssFormat('.css{color: #fff;}')
    expect(code).toMatchSnapshot()
  })
  it('should tab format', () => {
    const code = cssFormat('.css{color: #fff;}', 'tab')
    expect(code).toMatchSnapshot()
  })
  it('should indent format', () => {
    expect(cssFormat('.css{color: #fff;}', 'tab', 4)).toMatchSnapshot()
    expect(cssFormat('.css{color: #fff;}', 'space', 4)).toMatchSnapshot()
  })
  it('should simple.css format', () => {
    const filePath = path.join(__dirname, './fixtures/simple.css')
    const css = fs.readFileSync(filePath)
    expect(css.toString()).toMatchSnapshot()
  })
})
