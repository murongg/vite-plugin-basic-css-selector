<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { content, fullResult, matches, linewrap } from '~/logics'

const { copy } = useClipboard()
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="flex flex-col h-full w-1/2">
      <div class="flex p-2">
        <div class="icon relax static py-1">
          <carbon:text-annotation-toggle />
          <div class="label">
            ORIGIN
          </div>
        </div>

        <div class="flex-auto" />

        <button v-if="content" class="icon" @click="() => content = ''">
          <carbon-delete />
        </button>
        <button title="Toogle line wrap" class="icon" :class="{ active: linewrap }" @click="linewrap = !linewrap">
          <carbon:text-wrap />
        </button>
        <button class="icon" title="Copy" @click="() => copy(content)">
          <carbon-copy />
        </button>
      </div>
      <Editor v-model="content" :matches="matches" :wrapping="linewrap"
        placeholder="Paste your content here to transform..." class="flex-auto py-2 px-4" mode="text/css" />
    </div>
    <div class="bg-trueGray-400 bg-opacity-25 h-full w-1px" />
    <div class="flex flex-col h-full -m-1px w-1/2">
      <div class="flex p-2">
        <button class="icon relax">
          <carbon-face-satisfied-filled />
          <div class="label">
            TRANSFORM
          </div>
        </button>

        <div class="flex-auto" />


        <button class="icon" title="Copy" @click="copy(fullResult)">
          <carbon-copy />
        </button>
      </div>
      <Editor :model-value="fullResult" :readonly="true" :wrapping="linewrap" placeholder="Empty result"
        class="flex-auto py-2 px-4" mode="text/css"/>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.label {
  @apply pl-2 opacity-50 text-sm inline-block;
}
</style>
