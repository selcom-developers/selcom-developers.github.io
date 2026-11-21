import Link from 'next/link'
import { Code } from '@/components/site/code'

const clients = [
  {
    name: 'Java',
    href: '/clients/java',
    runtime: 'Java 17 or later',
    pkg: 'io.github.selcom-developers:selcom-client',
    lang: 'java',
    code: `Result<Responses.OrderStatusData> status =
    client.orderStatus(new Requests.OrderStatus("ORD-1001"));
if (status.status() == Status.SUCCESS) { /* fulfil */ }`
  },
  {
    name: 'Node.js',
    href: '/clients/node',
    runtime: 'Node 20 or later',
    pkg: '@selcom-developers/selcom',
    lang: 'ts',
    code: `const status = await selcom.orderStatus({ orderId: "ORD-1001" });
if (status.status === "SUCCESS") { /* fulfil */ }`
  },
  {
    name: 'PHP',
    href: '/clients/php',
    runtime: 'PHP 8.2 or later',
    pkg: 'selcom-developers/selcom-php',
    lang: 'php',
    code: `<?php
$status = $client->orderStatus(new OrderStatusRequest('ORD-1001'));
if ($status->status === Status::Success) { /* fulfil */ }`
  },
  {
    name: 'Laravel',
    href: '/clients/laravel',
    runtime: 'Laravel 12 or 13',
    pkg: 'selcom-developers/laravel-selcom',
    lang: 'php',
    code: `<?php
$status = Selcom::orderStatus(new OrderStatusRequest('ORD-1001'));
if ($status->status === Status::Success) { /* fulfil */ }`
  }
]

export function SameSpec() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {clients.map((client) => (
        <article key={client.name} className="flex min-w-0 flex-col rounded-xl border border-rule bg-card">
          <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 pt-5">
            <h3 className="text-lg font-bold text-ink">
              <Link href={client.href} className="sd-link hover:text-brand">
                {client.name}
              </Link>
            </h3>
            <p className="text-sm text-ink-soft">{client.runtime}</p>
          </header>
          <p className="mt-1 px-5 font-mono text-[0.78rem] break-all text-ink-soft">{client.pkg}</p>
          <div className="mx-3 mt-4 mb-3 flex-1 rounded-lg border border-rule bg-code px-4 py-3">
            <Code code={client.code} lang={client.lang} className="text-[0.78rem]" />
          </div>
        </article>
      ))}
    </div>
  )
}
