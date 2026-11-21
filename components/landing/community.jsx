import Link from 'next/link'
import { BookOpen, GitBranch, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: GitBranch,
    title: 'Contribute',
    text: 'Fix a bug, improve a page, or bring the spec to another language. Every repository takes pull requests.',
    href: '/community/contributing',
    cta: 'How to contribute'
  },
  {
    icon: ShieldCheck,
    title: 'Report a security problem',
    text: 'Report privately through GitHub on the affected repository. Never in a public issue.',
    href: '/community/security',
    cta: 'Security reporting'
  },
  {
    icon: BookOpen,
    title: 'Credentials and support',
    text: 'API access, contracts and support come from Selcom, not from this community. Start at their developer portal.',
    href: '/community/links',
    cta: 'Official Selcom links'
  }
]

export function Community() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        const external = item.href.startsWith('http')
        const linkClass =
          'sd-link mt-auto pt-4 text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand'
        return (
          <li key={item.title} className="flex flex-col rounded-xl border border-rule bg-card p-5 sm:p-6">
            <Icon className="size-6 text-brand" aria-hidden="true" strokeWidth={1.8} />
            <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{item.text}</p>
            {external ? (
              <a href={item.href} className={linkClass} rel="noreferrer" target="_blank">
                {item.cta}
              </a>
            ) : (
              <Link href={item.href} className={linkClass}>
                {item.cta}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
