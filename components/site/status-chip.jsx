import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// The spec's five typed statuses, each with its own colour across the site.
const tones = {
  SUCCESS: 'text-st-success border-st-success/35 bg-st-success/10',
  PENDING: 'text-st-pending border-st-pending/35 bg-st-pending/10',
  AMBIGUOUS: 'text-st-ambiguous border-st-ambiguous/35 bg-st-ambiguous/10',
  FAILED: 'text-st-failed border-st-failed/35 bg-st-failed/10',
  NOT_FOUND: 'text-st-not-found border-st-not-found/35 bg-st-not-found/10'
}

export function StatusChip({ status, className }) {
  return (
    <Badge
      variant="outline"
      className={cn('h-6 rounded-md px-2 font-mono text-[0.72rem] font-bold tracking-normal', tones[status], className)}
    >
      {status}
    </Badge>
  )
}
