"use client"

import { useState } from "react"
import TokenRow from "./TokenRow"
import { LoadingRow } from "../molecules/LoadingRow"
import { TableTabs } from "./TableTabs"
import { useTableSorting } from "@/hooks/useTableSorting"
import { NEW_PAIRS, FINAL_STRETCH, MIGRATED } from "@/data/tokens"
import AppTooltip from "../atoms/Tooltip"
import { useTabLoading } from "@/hooks/useTabLoading"

export function TokenTable() {
  const [tab, setTab] = useState(0)
  const loading = useTabLoading(tab, 500)

  const data =
    tab === 0
      ? NEW_PAIRS
      : tab === 1
      ? FINAL_STRETCH
      : MIGRATED

  const { sorted, sort } = useTableSorting(data)

  return (
    <>
      <TableTabs active={tab} onChange={setTab} />

      <div className="overflow-x-auto rounded-lg border border-zinc-800">
        <table className="w-full border-collapse text-[13px] leading-[16px]">
          <thead className="text-zinc-400">
            <tr>
              {/* Token */}
              <th className="px-4 py-[10px] text-left border-b border-zinc-800">
                Token
              </th>

              {/* Price */}
              <th
                className="px-4 py-[10px] text-left border-b border-zinc-800 cursor-pointer"
                onClick={() => sort("price")}
              >
                <AppTooltip label="Current token price">
                  <span className="hover:underline">Price</span>
                </AppTooltip>
              </th>

              {/* 5m */}
              <th className="px-4 py-[10px] text-left border-b border-zinc-800">
                <AppTooltip label="5 minute price change">
                  <span className="hover:underline">5m</span>
                </AppTooltip>
              </th>

              {/* Volume */}
              <th
                className="px-4 py-[10px] text-left border-b border-zinc-800 cursor-pointer"
                onClick={() => sort("volume")}
              >
                <AppTooltip label="24h trading volume">
                  <span className="hover:underline">Volume</span>
                </AppTooltip>
              </th>

              {/* Liquidity */}
              <th
                className="px-4 py-[10px] text-left border-b border-zinc-800 hide-mobile cursor-pointer"
                onClick={() => sort("liquidity")}
              >
                <AppTooltip label="Available liquidity">
                  <span className="hover:underline">Liquidity</span>
                </AppTooltip>
              </th>

              {/* Action */}
              <th className="px-4 py-[10px] text-right border-b border-zinc-800">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-900">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <LoadingRow key={i} />
                ))
              : sorted.map((token) => (
                  <TokenRow key={token.id} token={token} />
                ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
