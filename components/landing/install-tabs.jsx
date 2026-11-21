'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

/**
 * shadcn/ui tabs around install lines highlighted at build time.
 * Every panel stays in the HTML (forceMount) so search and no-JS readers
 * see every install line.
 */
export function InstallTabs({ items }) {
  return (
    <Tabs defaultValue={items[0].value} className="gap-0">
      <TabsList
        aria-label="Language"
        className="h-auto w-full justify-start gap-1 rounded-none border-b border-rule bg-transparent p-0 px-3 pt-2 group-data-horizontal/tabs:h-auto"
      >
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="h-9 flex-none rounded-none border-0 border-b-2 border-transparent px-3 text-sm font-semibold text-ink-soft shadow-none data-active:border-brand data-active:bg-transparent data-active:text-ink data-active:shadow-none dark:data-active:border-brand dark:data-active:bg-transparent"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          forceMount
          className="px-4 py-4 data-[state=inactive]:hidden sm:px-5"
        >
          {item.panel}
        </TabsContent>
      ))}
    </Tabs>
  )
}
