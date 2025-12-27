"use client"

import { useEffect, useState } from "react"
import { Token } from "@/types/token"

export function useLiveTokens(initial: Token[]) {
  const [tokens, setTokens] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((t) => {
          const delta = (Math.random() - 0.5) * 0.015
          const newPrice = +(t.price * (1 + delta)).toFixed(6)
          const newChange = +(t.change5m + delta * 100).toFixed(2)

          return {
            ...t,
            price: newPrice,
            change5m: newChange,
          }
        })
      )
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return tokens
}
