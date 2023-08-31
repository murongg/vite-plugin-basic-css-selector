import { ref, computed } from 'vue'
import { useLocalStorage, useRefHistory } from '@vueuse/core'
import { Options, transform } from 'vite-plugin-basic-css-selector'
import DEFAULT_CONTENT from '../../default.css'

export const replaceRaw = useLocalStorage('replace', '')
export const content = useLocalStorage('content', DEFAULT_CONTENT)
export const linewrap = useLocalStorage('linewrap', true)
export const history = useRefHistory(content, { clone: false })
export const basic = useLocalStorage('basic', '.basic')
export const options = useLocalStorage<Options>('options', {
  enableElementTag: false,
  enableUniversal: false,
})

export const error = ref<Error | null>(null)

export function cleanup() {
  replaceRaw.value = ''
}

export const matches = computed(() => [])

export const fullResult = computed(() => {
  return transform(content.value, basic.value, options.value)?.code || ''
})
