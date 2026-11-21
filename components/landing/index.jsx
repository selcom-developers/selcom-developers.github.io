import Link from 'next/link'
import { Code } from '@/components/site/code'
import { CopyButton } from '@/components/site/copy-button'
import { Community } from './community'
import { Features } from './features'
import { FlowDiagram } from './flow-diagram'
import { Hero } from './hero'
import { InstallTabs } from './install-tabs'
import { SameSpec } from './same-spec'

const installs = [
  {
    value: 'java',
    label: 'Java',
    registry: 'Maven Central',
    runtime: 'Java 17 or later',
    href: '/clients/java',
    lang: 'xml',
    code: `<dependency>
  <groupId>io.github.selcom-developers</groupId>
  <artifactId>selcom-client</artifactId>
  <version>0.1.0</version>
</dependency>`
  },
  { value: 'node', label: 'Node.js', registry: 'npm', runtime: 'Node 20 or later', href: '/clients/node', lang: 'bash', code: 'npm i @selcom-developers/selcom' },
  { value: 'php', label: 'PHP', registry: 'Packagist', runtime: 'PHP 8.2 or later', href: '/clients/php', lang: 'bash', code: 'composer require selcom-developers/selcom-php' },
  {
    value: 'laravel',
    label: 'Laravel',
    registry: 'Packagist',
    runtime: 'Laravel 12 or 13',
    href: '/clients/laravel',
    lang: 'bash',
    code: 'composer require selcom-developers/laravel-selcom'
  }
]

// From the Node.js client's README: the signer on its own, with any HTTP client.
const signSample = `import { formatTimestamp, hs256Signer, signRequest } from "@selcom-developers/selcom";

const signed = signRequest({
  method: "POST",
  params: new Map([
    ["vendor", "TILL123"],
    ["order_id", "ORD-1001"],
    ["amount", 8000],
    ["billing", { firstname: "John" }],
  ]),
  timestamp: formatTimestamp(new Date()), // 2026-11-21T10:30:46+03:00
  apiKey: process.env.SELCOM_API_KEY,
  signer: hs256Signer(process.env.SELCOM_API_SECRET),
});

signed.headers; // the five signing headers, plus Accept and Content-Type
signed.body;    // flat JSON: {"vendor":"TILL123",...,"billing.firstname":"John"}`

function Section({ id, title, lead, children }) {
  return (
    <section aria-labelledby={`${id}-title`} className="border-t border-rule py-16 sm:py-20">
      <div className="max-w-[62ch]">
        <h2 id={`${id}-title`} className="text-[clamp(1.6rem,3.2vw,2.25rem)] leading-tight font-extrabold tracking-[-0.025em] text-ink">
          {title}
        </h2>
        {lead ? <p className="mt-3 text-lg leading-relaxed text-ink-soft">{lead}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  )
}

function Panel({ title, aside, children }) {
  return (
    <div className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-rule bg-card">
      {title ? (
        <div className="flex items-center justify-between gap-3 border-b border-rule px-4 py-2.5 sm:px-5">
          <p className="text-sm font-semibold text-ink">{title}</p>
          {aside}
        </div>
      ) : null}
      {children}
    </div>
  )
}

export async function Landing() {
  const items = await Promise.all(
    installs.map(async (item) => ({
      value: item.value,
      label: item.label,
      panel: (
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-ink-soft">
              {item.registry}
            </p>
            <CopyButton text={item.code} label={`Copy ${item.label} install`} />
          </div>
          <div className="mt-3 rounded-lg border border-rule bg-code px-4 py-3">
            <Code code={item.code} lang={item.lang} />
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            {item.runtime}.{' '}
            <Link
              href={item.href}
              className="sd-link font-semibold text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand"
            >
              {item.label} quickstart
            </Link>
          </p>
        </div>
      )
    }))
  )

  return (
    <div className="mx-auto w-full max-w-[76rem] px-1 sm:px-2">
      <Hero />

      <Section
        id="install"
        title="Install a client"
        lead="Each client is one package with a small surface: configuration, a signer, a transport you can replace, typed operations and a webhook verifier."
      >
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Panel>
            <InstallTabs items={items} />
          </Panel>
          <Panel title="Sign a request with any HTTP client" aside={<span className="text-xs text-ink-soft">Node.js</span>}>
            <div className="px-4 py-4 sm:px-5">
              <Code code={signSample} lang="ts" />
            </div>
          </Panel>
        </div>
      </Section>

      <Section
        id="flow"
        title="From your app to a confirmed payment"
        lead="The client signs every call and reports what the gateway said. A webhook tells you something changed; order status confirms it before you fulfil."
      >
        <FlowDiagram />
      </Section>

      <Section
        id="features"
        title="What the clients do for you"
        lead="The parts that cost money when they go wrong are built in, and each one is usable on its own."
      >
        <Features />
      </Section>

      <Section
        id="same-spec"
        title="Same spec, four languages"
        lead="The clients differ in idiom, not in behaviour. They take the same settings, return the same five statuses and pass the same test vectors."
      >
        <SameSpec />
      </Section>

      <Section
        id="community"
        title="Community and security"
        lead="An independent project, built in the open under the Apache License 2.0."
      >
        <Community />
      </Section>
    </div>
  )
}
