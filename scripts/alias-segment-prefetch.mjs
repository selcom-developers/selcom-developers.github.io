// Next.js writes per-segment prefetch data as `__next.<segment>/<file>.txt`,
// but the client router asks for `__next.<segment>.<file>.txt`. On a static
// host that is a 404 for every prefetch. Copy each file to the name the router
// asks for, so client-side navigation can use the prefetched data.
import { copyFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = process.argv[2] ?? 'out'
let copied = 0

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('__next.')) {
      for (const file of readdirSync(path, { withFileTypes: true })) {
        if (file.isFile() && file.name.endsWith('.txt')) {
          copyFileSync(join(path, file.name), join(dir, `${entry.name}.${file.name}`))
          copied++
        }
      }
    } else if (entry.name !== '_next' && entry.name !== '_pagefind') {
      walk(path)
    }
  }
}

walk(root)
console.log(`segment prefetch aliases: ${copied}`)
