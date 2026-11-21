'use client'

import { useEffect, useState } from 'react'

const BASE64 = Object.freeze(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
)

/**
 * The hero's Digest value. The final value is in the HTML; after load, the
 * Magic UI HyperText effect is fetched on its own and plays once, so the
 * digest appears to be computed. Skipped entirely with reduced motion.
 */
export function DigestValue({ value }) {
  const [HyperText, setHyperText] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let cancelled = false
    import('@/components/ui/hyper-text').then((mod) => {
      if (!cancelled) setHyperText(() => mod.HyperText)
    })
    return () => {
      cancelled = true
    }
  }, [])

  if (!HyperText) return <span>{value}</span>

  return (
    <>
      <span className="sr-only">{value}</span>
      <HyperText
        as="span"
        uppercase={false}
        animateOnHover={false}
        duration={1100}
        delay={150}
        characterSet={BASE64}
        className="inline overflow-visible py-0 text-[1em] font-normal"
        aria-hidden="true"
      >
        {value}
      </HyperText>
    </>
  )
}
