"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export function TradeModal({
  symbol,
  children
}: {
  symbol: string
  children: React.ReactNode
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content
          className="fixed left-1/2 top-1/2 w-[360px] -translate-x-1/2 -translate-y-1/2
                     rounded-lg bg-zinc-950 border border-zinc-800 p-5 shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-sm font-semibold">
              Trade {symbol}
            </Dialog.Title>
            <Dialog.Close>
              <X className="h-4 w-4 text-zinc-400 hover:text-white" />
            </Dialog.Close>
          </div>

          <div className="space-y-3">
            <input
              placeholder="Amount"
              className="w-full rounded bg-black border border-zinc-800 px-3 py-2 text-sm outline-none focus:border-zinc-600"
            />

            <button
              className="w-full rounded bg-white text-black py-2 text-sm font-semibold
                         hover:bg-zinc-200 transition"
            >
              Execute Trade
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
