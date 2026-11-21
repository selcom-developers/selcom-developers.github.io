import fs from 'node:fs'
import path from 'node:path'

export const dynamic = 'force-static'

const SITE = 'https://selcom-developers.github.io'
const CONTENT = path.join(process.cwd(), 'content')

// One entry per page under content/: "index.mdx" maps to its folder's path.
function pages(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) return pages(path.join(dir, entry.name), `${prefix}/${entry.name}`)
    if (!/\.mdx?$/.test(entry.name)) return []
    const name = entry.name.replace(/\.mdx?$/, '')
    return [name === 'index' ? prefix || '/' : `${prefix}/${name}`]
  })
}

export default function sitemap() {
  return pages(CONTENT)
    .sort()
    .map((route) => ({
      url: route === '/' ? `${SITE}/` : `${SITE}${route}`,
      changeFrequency: 'monthly',
      priority: route === '/' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6
    }))
}
