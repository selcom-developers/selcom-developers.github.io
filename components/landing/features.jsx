import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { StatusChip } from '@/components/site/status-chip'

function Artefact({ children, className = '' }) {
  return (
    <div className={`rounded-lg border border-rule bg-code px-3.5 py-3 font-mono text-[0.78rem] leading-relaxed text-ink ${className}`}>
      {children}
    </div>
  )
}

const statuses = [
  ['SUCCESS', '000'],
  ['PENDING', '111, 927'],
  ['AMBIGUOUS', '999'],
  ['FAILED', 'any other code'],
  ['NOT_FOUND', '404 on a query']
]

const verdicts = [
  ['VALID', '200', 'confirm, then act'],
  ['UNSIGNED', '200', 'confirm, then act'],
  ['REPLAY', '200', 'already handled'],
  ['INVALID', '401', 'log, redacted'],
  ['STALE', '401', 'log, redacted']
]

export function Features() {
  return (
    <BentoGrid className="md:grid-cols-2 lg:grid-cols-6">
      <BentoCard
        className="md:col-span-2 lg:col-span-4"
        name="Signing"
        description="Every request is signed, GET and DELETE included. The signer is a pure function with no I/O and no clock, so you can test it and use it with any HTTP client."
        href="/spec/signing"
        cta="Read the signing rules"
      >
        <Artefact>
          <p className="text-ink-soft">Signed-Fields</p>
          <p className="break-all">vendor,order_id,amount,billing.firstname</p>
          <p className="mt-2 text-ink-soft">signing string</p>
          <p className="break-all">
            timestamp=2019-02-26T09:30:46+03:00&amp;vendor=TILL123&amp;order_id=ORD-1001&amp;amount=8000&amp;billing.firstname=John
          </p>
        </Artefact>
      </BentoCard>

      <BentoCard
        className="md:col-span-2 lg:col-span-2"
        name="Typed results"
        description="The result code alone decides one of five statuses. You also get the gateway's code, text, HTTP status and raw body."
        href="/spec/results"
        cta="See how results are classified"
      >
        <ul className="space-y-2">
          {statuses.map(([status, code]) => (
            <li key={status} className="flex items-center justify-between gap-3 border-b border-dashed border-rule pb-2 last:border-0">
              <StatusChip status={status} />
              <span className="font-mono text-[0.78rem] text-ink-soft">{code}</span>
            </li>
          ))}
        </ul>
      </BentoCard>

      <BentoCard
        className="lg:col-span-2"
        name="Safe retries"
        description="Payments and writes are never retried. A transport error says whether the request left your server."
        href="/spec/results#idempotency-and-retries"
        cta="Idempotency and retries"
      >
        <Artefact>
          <p>
            <span className="font-bold text-st-success">NOT_SENT</span>
          </p>
          <p className="text-ink-soft">same ID may be sent again</p>
          <p className="mt-2">
            <span className="font-bold text-st-ambiguous">UNKNOWN_OUTCOME</span>
          </p>
          <p className="text-ink-soft">query after 3 minutes, never resend</p>
        </Artefact>
      </BentoCard>

      <BentoCard
        className="lg:col-span-2"
        name="Webhooks"
        description="verify(headers, rawBody) returns a verdict and the HTTP status to answer with. Order status confirms every payment."
        href="/spec/webhooks"
        cta="Handle webhooks"
      >
        <Artefact className="grid grid-cols-[auto_auto_minmax(0,1fr)] gap-x-3 gap-y-0.5">
          {verdicts.map(([verdict, code, action]) => (
            <div key={verdict} className="contents">
              <span className="font-bold">{verdict}</span>
              <span className="text-ink-soft">{code}</span>
              <span className="truncate text-ink-soft">{action}</span>
            </div>
          ))}
        </Artefact>
      </BentoCard>

      <BentoCard
        className="lg:col-span-2"
        name="Redaction"
        description="Helpers mask phone numbers, e-mail and names, and drop the secret, the PIN, Authorization and Digest before anything reaches a log."
        href="/spec/client-requirements#logging-secrets-and-personal-data"
        cta="Logging and personal data"
      >
        <Artefact>
          {[
            ['buyer_phone', '********0001'],
            ['buyer_email', 't***@example.com'],
            ['buyer_name', 'T***'],
            ['pin', '[REDACTED]']
          ].map(([key, value]) => (
            <p key={key} className="break-all">
              <span className="text-ink-soft">{key}=</span>
              <span className="font-bold">{value}</span>
            </p>
          ))}
        </Artefact>
      </BentoCard>

      <BentoCard
        className="md:col-span-2 lg:col-span-6"
        name="Test vectors"
        description="Every client runs the spec's vectors in its own test suite, with no network calls."
        href="/spec#test-vectors"
        cta="About the test vectors"
      >
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['20', 'signing cases'],
            ['11', 'rejects'],
            ['120', 'response scenarios'],
            ['15', 'webhook samples']
          ].map(([count, label]) => (
            <div key={label} className="rounded-lg border border-rule bg-code px-3 py-2.5">
              <dt className="text-xs leading-snug text-ink-soft">{label}</dt>
              <dd className="font-mono text-xl font-bold text-ink">{count}</dd>
            </div>
          ))}
        </dl>
      </BentoCard>
    </BentoGrid>
  )
}
