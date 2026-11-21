'use client'

import { useEffect, useState } from 'react'
import { AnimatedBeam } from '@/components/ui/animated-beam'

function readColours() {
  const style = getComputedStyle(document.documentElement)
  return {
    path: style.getPropertyValue('--rule').trim() || '#e8e3e1',
    from: style.getPropertyValue('--brand').trim() || '#b8252a',
    to: style.getPropertyValue('--brass').trim() || '#8c5a0b'
  }
}

/** Magic UI animated beams between the flow diagram's nodes. */
export function FlowBeams({ containerRef, nodeRefs }) {
  const [colours, setColours] = useState(readColours)
  const [vertical, setVertical] = useState(() => !window.matchMedia('(min-width: 1024px)').matches)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)')
    const onWidth = () => setVertical(!wide.matches)
    wide.addEventListener('change', onWidth)
    // Re-read the palette when the theme switches between light and dark.
    const observer = new MutationObserver(() => setColours(readColours()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => {
      wide.removeEventListener('change', onWidth)
      observer.disconnect()
    }
  }, [])

  return nodeRefs.slice(0, -1).map((fromRef, index) => (
    <AnimatedBeam
      key={`${index}-${vertical ? 'v' : 'h'}`}
      containerRef={containerRef}
      fromRef={fromRef}
      toRef={nodeRefs[index + 1]}
      vertical={vertical}
      duration={2.4}
      delay={index * 0.4}
      repeatDelay={1.2}
      pathColor={colours.path}
      pathOpacity={1}
      pathWidth={2}
      gradientStartColor={colours.from}
      gradientStopColor={colours.to}
      className="z-0"
    />
  ))
}
