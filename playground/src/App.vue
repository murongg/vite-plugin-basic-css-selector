<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Playground for Basic CSS Selector',
  meta: [
    { name: 'description', content: 'vite-plugin-basic-css-selector Playground' },
  ],
})
</script>

<template>
  <router-view />
</template>
