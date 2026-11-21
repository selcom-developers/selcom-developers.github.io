import { createHighlighter } from 'shiki'
import { darkTheme, lightTheme } from '@/lib/code-themes.mjs'
import { cn } from '@/lib/utils'

// Highlighting happens at build time. The page ships plain HTML, no highlighter.
let highlighter
function getHighlighter() {
  highlighter ??= createHighlighter({
    themes: [lightTheme, darkTheme],
    langs: ['js', 'ts', 'java', 'php', 'python', 'xml', 'bash', 'http']
  })
  return highlighter
}

export async function Code({ code, lang, className }) {
  const shiki = await getHighlighter()
  const html = shiki.codeToHtml(code.trim(), {
    lang,
    themes: { light: lightTheme.name, dark: darkTheme.name },
    defaultColor: false
  })
  return (
    <div
      className={cn('sd-code overflow-x-auto font-mono text-[0.84rem] leading-[1.7]', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
