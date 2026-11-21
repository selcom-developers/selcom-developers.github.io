import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DigestValue } from './digest-value'
import { Stamp } from './stamp'

const clients = [
  { href: '/clients/java', label: 'Java' },
  { href: '/clients/node', label: 'Node.js' },
  { href: '/clients/php', label: 'PHP' },
  { href: '/clients/laravel', label: 'Laravel' }
]

// The spec's first worked example (vector known-get-single-field), signed with
// the sample credentials printed in Selcom's public documentation.
const headers = [
  ['Authorization', 'SELCOM MjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzA='],
  ['Digest-Method', 'HS256'],
  ['Timestamp', '2019-02-26T09:30:46+03:00'],
  ['Signed-Fields', 'order_id']
]

function SignedRequest() {
  return (
    <figure className="relative mx-auto w-full max-w-xl lg:mx-0">
      <div className="relative">
      <div className="relative rounded-2xl border border-rule bg-card p-1.5 shadow-[0_1px_0_rgb(29_26_51/0.04),0_28px_56px_-32px_rgb(184_37_42/0.22)] dark:shadow-none">
        <div className="rounded-xl bg-code px-4 py-4 font-mono text-[0.8rem] leading-relaxed sm:px-5 sm:py-5 sm:text-[0.85rem]">
          <p className="break-all text-ink">
            <span className="font-bold text-brand">GET</span> /v1/checkout/order-status?order_id=ORD-1001
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-x-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-y-1.5">
            {headers.map(([name, value]) => (
              <div key={name} className="contents">
                <dt className="text-ink-soft max-sm:mt-2">{name}</dt>
                <dd className="break-all text-ink">{value}</dd>
              </div>
            ))}
            <div className="contents">
              <dt className="font-bold text-brand max-sm:mt-2">Digest</dt>
              <dd className="break-all font-bold text-brand">
                <DigestValue value="pR8qs83hQ34a6EoxXGOKL4yg+JDeJAtzOY6E8fTlvwk=" />
              </dd>
            </div>
          </dl>
          <p className="mt-4 border-t border-dashed border-rule pt-3 pr-16 break-all text-ink-soft sm:pr-24">
            timestamp=2019-02-26T09:30:46+03:00&amp;order_id=ORD-1001
          </p>
        </div>
      </div>
      <Stamp className="absolute right-2 -bottom-10 size-24 sm:-right-7 sm:-bottom-12 sm:size-32" />
      </div>
      <figcaption className="mt-5 max-w-md pr-24 text-sm leading-relaxed text-ink-soft sm:pr-28">
        The signing string and its digest, from the spec&apos;s first worked example with the sample
        key in Selcom&apos;s public documentation.
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <section className="grid items-center gap-14 pt-8 pb-14 sm:pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:pt-20 lg:pb-24">
      <div>
        <h1 className="max-w-[16ch] text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-balance text-ink">
          Call the Selcom API without paying anyone twice.
        </h1>
        <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-soft">
          Open-source clients for Java, Node.js, PHP and Laravel, built from one shared spec. Every
          request is signed, every outcome has a typed status, and no payment is ever retried
          behind your back.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-11 rounded-lg px-5 text-base font-semibold">
            <Link href="/getting-started">Get started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-11 rounded-lg px-5 text-base font-semibold">
            <Link href="/spec">Read the spec</Link>
          </Button>
        </div>
        <nav aria-label="Clients" className="mt-10">
          <p className="text-sm font-semibold text-ink">Pick your client</p>
          <ul className="mt-3 grid max-w-md grid-cols-2 gap-2 sm:grid-cols-4">
            {clients.map((client) => (
              <li key={client.href}>
                <Link
                  href={client.href}
                  className="sd-link flex h-10 items-center justify-center rounded-lg border border-rule bg-card px-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {client.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SignedRequest />
    </section>
  )
}
