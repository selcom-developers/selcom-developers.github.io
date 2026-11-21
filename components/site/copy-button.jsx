'use client'

import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function CopyButton({ text, label = 'Copy', className }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
        } catch {
          setCopied(false)
        }
      }}
      className={cn(
        'inline-flex h-8 items-center gap-1.5 rounded-md border border-rule bg-card px-2.5 text-xs font-semibold text-ink-soft transition-colors hover:text-ink',
        className
      )}
    >
      {copied ? <Check className="size-3.5 text-st-success" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : label}</span>
    </button>
  )
}
