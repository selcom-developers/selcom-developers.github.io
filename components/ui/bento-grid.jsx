// Magic UI bento grid (magicui.design), adapted: each card shows a real
// artefact from the spec instead of a decorative background, and the whole
// card is one link with a visible keyboard focus.
import Link from "next/link"

import { cn } from "@/lib/utils"

const BentoGrid = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-auto grid-cols-1 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  description,
  href,
  cta,
  children,
  ...props
}) => (
  <div
    className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl border border-rule bg-card",
      "transition-colors duration-200 hover:border-brand/50",
      "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring",
      className
    )}
    {...props}
  >
    <div className="flex flex-col gap-2 p-5 sm:p-6">
      <h3 className="text-lg leading-snug font-bold text-ink">{name}</h3>
      <p className="max-w-[60ch] text-[0.95rem] leading-relaxed text-ink-soft">
        {description}
      </p>
    </div>
    {children ? (
      <div className="mt-auto px-5 pb-4 sm:px-6">{children}</div>
    ) : null}
    {href ? (
      <div className="px-5 pb-5 sm:px-6">
        <Link
          href={href}
          className="sd-link text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 outline-none after:absolute after:inset-0 group-hover:decoration-brand"
        >
          {cta}
        </Link>
      </div>
    ) : null}
  </div>
)

export { BentoCard, BentoGrid }
