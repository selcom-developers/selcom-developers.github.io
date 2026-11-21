import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Cards for index pages: a title, one line on what the page covers, and an
 * optional detail in the code face (a package name, for example).
 */
export function LinkCards({ children, className }) {
  return <div className={cn('mt-6 grid gap-3 sm:grid-cols-2', className)}>{children}</div>
}

export function LinkCard({ href, title, detail, children }) {
  return (
    <Link
      href={href}
      className="sd-card group flex flex-col rounded-xl border border-rule bg-card px-5 py-4 transition-colors hover:border-brand/60"
    >
      <span className="font-bold text-ink group-hover:text-brand">{title}</span>
      {children ? <span className="mt-1 text-[0.93rem] leading-relaxed text-ink-soft">{children}</span> : null}
      {detail ? <span className="mt-3 font-mono text-[0.76rem] break-all text-ink-soft">{detail}</span> : null}
    </Link>
  )
}
