import nextra from 'nextra'
import { darkTheme, lightTheme } from './lib/code-themes.mjs'

const withNextra = nextra({
  search: { codeblocks: false },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: { light: lightTheme, dark: darkTheme }
    }
  }
})

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true
})
