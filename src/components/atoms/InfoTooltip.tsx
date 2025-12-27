"use client"

import * as Tooltip from "@radix-ui/react-tooltip"

export function InfoTooltip({
  label,
  children
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content
          side="top"
          className="rounded bg-zinc-900 px-3 py-1 text-xs text-white shadow"
        >
          {label}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
