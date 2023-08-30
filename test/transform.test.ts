import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { transform } from '../src/transform'

describe('transform', () => {
  it('should basic selector', () => {
    const filePath = path.join(__dirname, './fixtures/simple.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic') || {}
    expect(code).toMatchInlineSnapshot(`
      ".basic .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .basic .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .basic .logo.vanilla:hover {
        filter: drop-shadow(0 0 2em #3178c6aa);
      }

      .basic .card {
        padding: 2em;
      }

      .basic .read-the-docs {
        color: #888;
      }
      "
    `)
  })

  it('should with html element tags', () => {
    const filePath = path.join(__dirname, './fixtures/with-html-element-tags.css')
    const css = fs.readFileSync(filePath)
    const { code } = transform(css.toString(), '.basic', {
      enableElementTag: true,
    }) || {}
    expect(code).toMatchInlineSnapshot(`
      ".basic .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }

      .basic .logo:hover{
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .basic .logo.vanilla:hover {
        filter: drop-shadow(0 0 2em #3178c6aa);
      }

      .basic .card {
        padding: 2em;
      }

      .basic .read-the-docs {
        color: #888;
      }
      .basic button {
        color: #888;
      }

      .basic .button {
        color: #909090;
      }
      .basic a {
        color: #888;
      }
      .basic ul {
        color: #888;
      }

      d {
        color: #888;
      }
      "
    `)
  })
})
