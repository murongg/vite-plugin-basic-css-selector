# vite-plugin-basic-css-selector

[![NPM version](https://img.shields.io/npm/v/vite-plugin-basic-css-selector?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-basic-css-selector)

## Usage

Install 
```bash
npm install vite-plugin-basic-css-selector -D
```

Add it to `vite.config.js`

```js
import { defineConfig } from 'vite'
import BasicCssSelector from 'vite-plugin-basic-css-selector'

export default defineConfig({
  plugins: [
    BasicCssSelector('.basic'),
  ],
})
```
It will produce the following effect:

Origin CSS code:
```css
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vanilla:hover {
  filter: drop-shadow(0 0 2em #3178c6aa);
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```
Transform CSS code: 
```css
.basic .logo {
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
```

## Options
```ts
import type { Plugin } from 'vite'

interface Options {
  enforce?: Plugin['enforce']
  apply?: Plugin['apply']
}
```
