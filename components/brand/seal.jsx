import { cn } from '@/lib/utils'

/**
 * The community mark: a hand-pressed seal (muhuri) around a pair of code
 * brackets. A signed request is a sealed request.
 */
export function SealMark({ className, title }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('size-7 shrink-0', className)}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
      stroke="currentColor"
    >
      <g transform="rotate(-12 16 16)">
        <circle cx="16" cy="16" r="13.6" strokeWidth="2.6" />
        <circle cx="16" cy="16" r="9.9" strokeWidth="1.2" strokeDasharray="1.55 1.45" />
        <path
          d="M13.1 12.6 9.9 16l3.2 3.4M18.9 12.6l3.2 3.4-3.2 3.4"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function SiteLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <SealMark className="size-7 text-brand" />
      <span className="text-[1.05rem] font-bold tracking-[-0.01em] text-ink">Selcom Developers</span>
      <span className="hidden rounded-full border border-rule px-2 py-px text-xs font-medium text-ink-soft sm:inline">
        community
      </span>
    </span>
  )
}
