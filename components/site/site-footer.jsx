import Link from 'next/link'
import { SealMark } from '@/components/brand/seal'

const groups = [
  {
    title: 'Docs',
    links: [
      { href: '/getting-started', label: 'Getting started' },
      { href: '/spec', label: 'Spec' },
      { href: '/clients', label: 'Clients' }
    ]
  },
  {
    title: 'Community',
    links: [
      { href: '/community/contributing', label: 'Contributing' },
      { href: '/community/security', label: 'Security reporting' },
      { href: '/community/links', label: 'Official Selcom links' }
    ]
  },
  {
    title: 'Source',
    links: [
      { href: 'https://github.com/selcom-developers/selcom-spec', label: 'Spec repository on GitHub' },
      { href: 'https://github.com/selcom-developers', label: 'All repositories' }
    ]
  }
]

export function SiteFooter() {
  return (
    <div className="grid w-full gap-10 text-sm text-ink-soft md:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
      <div className="max-w-xs">
        <div className="flex items-center gap-2.5 text-ink">
          <SealMark className="size-8 text-brand" />
          <span className="text-base font-bold">Selcom Developers</span>
        </div>
        <p className="mt-3 leading-relaxed">
          Independent, open-source clients for the Selcom payment API in Tanzania. Apache License 2.0.
        </p>
        <p className="mt-3 font-semibold text-ink">Not affiliated with Selcom Paytech Ltd.</p>
      </div>
      {groups.map((group) => (
        <nav key={group.title} aria-label={group.title}>
          <h2 className="font-semibold text-ink">{group.title}</h2>
          <ul className="mt-3 space-y-2">
            {group.links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('http') ? (
                  <a className="sd-link hover:text-brand" href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                  </a>
                ) : (
                  <Link className="sd-link hover:text-brand" href={link.href}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  )
}
