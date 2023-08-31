export function cssFormat(code: string, type: 'tab' | 'space' = 'space', indent = 2) {
  const indentation = (type === 'tab' ? '\t' : '\ ').repeat(indent)
  code = code.replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
  code = code.replace(/;\s*;/g, ';')
  code = code.replace(/\,[\s\.\#\d]*{/g, '{')
  code = code.replace(/([^\s])\{([^\s])/g, `$1 {\n${indentation}$2`)
  code = code.replace(/([^\s])\}([^\n]*)/g, '$1\n}\n$2')
  code = code.replace(/([^\s]);([^\s\}])/g, `$1;\n${indentation}$2`)
  return code
}
