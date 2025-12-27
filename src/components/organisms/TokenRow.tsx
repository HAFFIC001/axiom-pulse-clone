"use client"

import { Token } from "@/types/token"
import { Price } from "../atoms/Price"
import { TradeModal } from "../molecules/TradeModal"
import TokenPopover from "../molecules/TokenPopover"
import AppTooltip from "../atoms/Tooltip"
import { formatNumber, formatPercent } from "@/utils/format"
import { ArrowUpRight, Bookmark } from "lucide-react"

export default function TokenRow({ token }: { token: Token }) {
  return (
    <div
      tabIndex={0}
      className="group px-2 py-1.5 hover:bg-zinc-900/60 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition cursor-pointer focus:bg-zinc-900/60"
    >
      <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
        {/* LEFT — TOKEN INFO */}
        <TokenPopover token={token}>
          <div className="flex gap-2 cursor-pointer">
            {token.image && (
              <img
                src={token.image}
                alt={token.symbol}
                className="h-6 w-6 rounded border border-zinc-800 bg-black shrink-0"
              />
            )}

            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-medium text-white truncate">
                  {token.symbol}
                </span>
                <span className="text-[11px] text-zinc-400 truncate">
                  {token.name}
                </span>
              </div>

              {token.age && (
                <div className="text-[10px] text-zinc-500 leading-none">
                  {token.age}
                </div>
              )}

              <div className="mt-1 flex flex-col gap-[2px] text-[11px] text-zinc-400">
                <span>Vol ${formatNumber(token.volume)}</span>
                <span>Liq ${formatNumber(token.liquidity)}</span>
              </div>
            </div>
          </div>
        </TokenPopover>

        {/* RIGHT — PRICE / ACTION */}
        <div className="flex flex-col items-end gap-1 text-right">
          <Price id={token.id} fallback={token.price} />

          <span
            className={
              token.change5m >= 0
                ? "text-[11px] text-green-400"
                : "text-[11px] text-red-400"
            }
          >
            {formatPercent(token.change5m)}%
          </span>

          {/* Momentum bar */}
          <div className="w-12 h-[3px] bg-zinc-800 rounded overflow-hidden">
            <div
              className={
                token.change5m >= 0 ? "h-full bg-green-400" : "h-full bg-red-400"
              }
              style={{
                width: `${Math.min(Math.abs(token.change5m) * 5, 100)}%`,
              }}
            />
          </div>

          {/* Icons + Trade */}
          <div className="mt-0.5 flex items-center gap-1">
            <AppTooltip label="Open chart">
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
              >
                <ArrowUpRight size={12} />
              </button>
            </AppTooltip>

            <AppTooltip label="Watchlist">
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
              >
                <Bookmark size={12} />
              </button>
            </AppTooltip>

            <TradeModal symbol={token.symbol}>
              <button
                onClick={(e) => e.stopPropagation()}
                className="ml-1 text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 hover:text-white transition"
              >
                Trade
              </button>
            </TradeModal>
          </div>
        </div>
      </div>
    </div>
  )
}
