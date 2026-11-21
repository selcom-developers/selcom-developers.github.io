'use client'

import { AppWindow, Package, SearchCheck, Server, Stamp, Webhook } from 'lucide-react'
import { createRef, useEffect, useRef, useState } from 'react'

const steps = [
  { icon: AppWindow, title: 'Your app', text: 'Calls one typed method, for example createOrder.' },
  { icon: Package, title: 'Client', text: 'Checks the fields and keeps them in the order you gave.' },
  { icon: Stamp, title: 'Signed request', text: 'HS256 digest over every field it sends, with a fresh timestamp.' },
  { icon: Server, title: 'Selcom gateway', text: 'Answers with a result code that becomes one of the typed statuses.' },
  { icon: Webhook, title: 'Webhook', text: 'Tells your app that a payment changed. A hint, not proof.' },
  { icon: SearchCheck, title: 'Order status', text: 'Confirms the payment and the amount before you fulfil.' }
]

/**
 * The request's path as six steps. The nodes are plain HTML; the Magic UI
 * animated beams between them load only when the diagram scrolls into view.
 */
export function FlowDiagram() {
  const containerRef = useRef(null)
  const nodeRefs = useRef(steps.map(() => createRef()))
  const [Beams, setBeams] = useState(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        import('./flow-beams').then((mod) => setBeams(() => mod.FlowBeams))
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <ol className="relative z-10 grid gap-7 lg:grid-cols-6 lg:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          const last = index === steps.length - 1
          return (
            <li key={step.title} className="flex gap-4 lg:flex-col lg:items-center lg:text-center">
              <div
                ref={nodeRefs.current[index]}
                className={
                  'relative flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-card ' +
                  (last ? 'border-st-success text-st-success' : 'border-rule text-brand')
                }
              >
                <Icon className="size-6" aria-hidden="true" strokeWidth={1.8} />
                <span className="absolute -top-2 -left-2 flex size-6 items-center justify-center rounded-full border border-rule bg-paper font-mono text-[0.7rem] font-bold text-ink-soft">
                  {index + 1}
                </span>
              </div>
              <div className="pt-1 lg:pt-0">
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft lg:mx-auto lg:max-w-[17ch]">{step.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
      {Beams ? <Beams containerRef={containerRef} nodeRefs={nodeRefs.current} /> : null}
    </div>
  )
}
