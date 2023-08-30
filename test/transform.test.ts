import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { transform } from '../src/transform'

describe('transform', () => {
  it('should basic selector', () => {
    const filePath = path.join(__dirname, './fixtures/simple.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic') || {}
    expect(code).toMatchSnapshot()
  })

  it('should with html element tags', () => {
    const filePath = path.join(__dirname, './fixtures/with-html-element-tags.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic', {
      enableElementTag: true,
    }) || {}
    expect(code).toMatchSnapshot()
  })

  it('should with only html element tags', () => {
    const filePath = path.join(__dirname, './fixtures/with-only-html-element-tags.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic', {
      enableElementTag: true,
    }) || {}
    expect(code).toMatchSnapshot()
  })

  it('should universal selectors', () => {
    const filePath = path.join(__dirname, './fixtures/universal-selectors.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic', {
      enableElementTag: true,
      enableUniversal: true,
    }) || {}
    expect(code).toMatchSnapshot()
  })

  it('should full case', () => {
    const filePath = path.join(__dirname, './fixtures/full-case.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic', {
      enableElementTag: true,
      enableUniversal: true,
    }) || {}
    expect(code).toMatchSnapshot()
  })
})
