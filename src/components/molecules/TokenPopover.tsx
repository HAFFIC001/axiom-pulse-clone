"use client"

import * as Popover from "@radix-ui/react-popover"
import { Token } from "@/types/token"

export default function TokenPopover({
  token,
  children,
}: {
  token: Token
  children: React.ReactNode
}) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="right"
          align="start"
          sideOffset={8}
          className="
            z-50 w-64 rounded-lg border border-zinc-800
            bg-zinc-950 p-4 shadow-xl
            text-xs text-zinc-300
            animate-in fade-in zoom-in-95
          "
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">
              {token.name}
            </span>
            <span className="text-zinc-400">
              {token.symbol}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Price</span>
              <span className="font-mono text-white">
                ${token.price.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>5m Change</span>
              <span
                className={
                  token.change5m >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {token.change5m}%
              </span>
            </div>

            <div className="flex justify-between">
              <span>Volume</span>
              <span>${token.volume.toLocaleString()}</span>
            </div>

            {token.marketCap && (
              <div className="flex justify-between">
                <span>Market Cap</span>
                <span>${token.marketCap.toLocaleString()}</span>
              </div>
            )}
          </div>

          <Popover.Arrow className="fill-zinc-800" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
