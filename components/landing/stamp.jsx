import { cn } from '@/lib/utils'

/**
 * The seal pressed onto the hero's signed request, drawn as an ink stamp.
 * One instance per page (the SVG ids are fixed). It presses once on load;
 * with reduced motion it is simply there.
 */
export function Stamp({ className }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none text-brand opacity-90 -rotate-12',
        'mix-blend-multiply dark:mix-blend-screen motion-safe:animate-stamp',
        className
      )}
    >
      <defs>
        <path id="sd-stamp-ring" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        <filter id="sd-stamp-ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="11" result="grain" />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="2.4" />
        </filter>
      </defs>
      <g filter="url(#sd-stamp-ink)">
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="3.6" />
        <circle cx="60" cy="60" r="34.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 2.6" />
        <text
          fill="currentColor"
          fontSize="10.5"
          fontWeight="800"
          letterSpacing="1.5"
          style={{ fontFamily: 'var(--font-body), sans-serif' }}
        >
          <textPath href="#sd-stamp-ring" textLength="278" lengthAdjust="spacing">
            SIGNED · HS256 · SIGNED · HS256 ·
          </textPath>
        </text>
        <path
          d="M53 49 42 60l11 11M67 49l11 11-11 11"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
