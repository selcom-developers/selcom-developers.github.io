import { Info, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

const styles = {
  info: { icon: Info, box: 'border-rule bg-wash', icon_: 'text-ink-soft' },
  warning: { icon: TriangleAlert, box: 'border-st-ambiguous/40 bg-brass-soft', icon_: 'text-st-ambiguous' }
}

/** Notes in docs pages, in the site's palette. */
export function Callout({ type = 'info', title, children }) {
  const style = styles[type] ?? styles.info
  const Icon = style.icon
  return (
    <div className={cn('mt-6 flex gap-3 rounded-xl border px-4 py-3.5 text-[0.95rem] leading-relaxed text-ink', style.box)}>
      <Icon className={cn('mt-[0.2rem] size-[1.1rem] shrink-0', style.icon_)} aria-hidden="true" />
      <div className="min-w-0 [&>p:first-child]:mt-0 [&>p]:mt-2">
        {title ? <p className="font-bold">{title}</p> : null}
        {children}
      </div>
    </div>
  )
}
