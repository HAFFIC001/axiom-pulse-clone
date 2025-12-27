"use client"

import * as Tooltip from "@radix-ui/react-tooltip"

type TooltipProps = {
  label: string
  children: React.ReactNode
}

export default function AppTooltip({ label, children }: TooltipProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="center"
            sideOffset={6}
            className="
              z-50
              rounded-md
              border border-zinc-800
              bg-zinc-900
              px-2 py-1
              text-xs text-zinc-200
              shadow-lg
              select-none
            "
          >
            {label}
            <Tooltip.Arrow className="fill-zinc-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
