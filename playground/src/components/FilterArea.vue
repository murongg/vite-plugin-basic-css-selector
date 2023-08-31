<script setup lang="ts">
import { basic, options } from '../logics/store'
import { isDark, toggleDark } from '~/logics'
</script>


<template>
  <div class="flex items-center h-full pb-2 border-b border-trueGray-400 border-opacity-25">
    <div class="flex mx-2 h-full">
      <input v-model="basic" class="w-100 input rounded p-2 m-2" placeholder="Basic selector...." />
      <div class="icon relax !h-full !flex">
        <div class="h-full flex items-center mr-5">
          <input v-model="options.enableElementTag" type="checkbox" class="mr-3 w-5 h-5 rounded-sm outline-none checkbox">
          <span>Enable Element Tag</span>
        </div>
        <div class="h-full flex items-center">
          <input v-model="options.enableUniversal" type="checkbox" class="mr-3 w-5 h-5 rounded-sm outline-none checkbox">
          <span>Enable Universal Selector</span>
        </div>
      </div>
    </div>
    <div class="flex-auto" />
    <div>
      <a class="icon" href="https://github.com/murongg/vite-plugin-basic-css-selector" target="_blank">
        <carbon-logo-github class="mt-2" />
      </a>
      <button class="icon" @click="toggleDark">
        <carbon-moon v-if="isDark" />
        <carbon-sun v-else />
      </button>
    </div>
  </div>
</template>

