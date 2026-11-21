import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout } from '@/components/docs/callout'
import { LinkCard, LinkCards } from '@/components/docs/link-cards'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components) {
  return { ...docsComponents, Callout, LinkCard, LinkCards, ...components }
}
