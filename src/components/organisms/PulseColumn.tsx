"use client"

import { useEffect, useMemo, useState } from "react"
import { Token } from "@/types/token"
import TokenRow from "./TokenRow"
import TokenRowSkeleton from "../molecules/TokenRowSkeleton"

type SortKey = "price" | "volume" | null

export default function PulseColumn({
  title,
  tokens,
}: {
  title: string
  tokens: Token[]
}) {
  const [loading, setLoading] = useState(true)
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc")

  // Simulated initial loading (safe, deterministic)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  const sortedTokens = useMemo(() => {
    if (!sortKey) return tokens

    return [...tokens].sort((a, b) => {
      const aVal = sortKey === "price" ? a.price : a.volume
      const bVal = sortKey === "price" ? b.price : b.volume
      return sortDir === "asc" ? aVal - bVal : bVal - aVal
    })
  }, [tokens, sortKey, sortDir])

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    } else {
      setSortKey(key)
      setSortDir("desc")
    }
  }

  return (
    <div className="flex flex-col bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-zinc-950 px-3 py-2 text-[11px] text-zinc-400 flex justify-between items-center">
        <span>{title}</span>

        <div className="flex gap-2">
          <button
            onClick={() => toggleSort("price")}
            className="hover:text-white transition"
          >
            Price
          </button>
          <button
            onClick={() => toggleSort("volume")}
            className="hover:text-white transition"
          >
            Vol
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <TokenRowSkeleton key={i} />
          ))
        ) : sortedTokens.length === 0 ? (
          <div className="p-4 text-center text-xs text-zinc-500">
            No tokens yet
          </div>
        ) : (
          sortedTokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))
        )}
      </div>
    </div>
  )
}
