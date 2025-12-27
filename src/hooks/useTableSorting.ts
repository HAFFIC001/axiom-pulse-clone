import { useState, useMemo } from "react"
import { Token } from "@/types/token"

export type SortKey = keyof Token

export function useTableSorting(data: Token[]) {
  const [key, setKey] = useState<SortKey>("volume")
  const [dir, setDir] = useState<"asc" | "desc">("desc")

  const sorted = useMemo(() => {
    return [...data].sort((a, b) => {
      const v1 = a[key]
      const v2 = b[key]
      if (typeof v1 === "number" && typeof v2 === "number") {
        return dir === "asc" ? v1 - v2 : v2 - v1
      }
      return 0
    })
  }, [data, key, dir])

  return {
    sorted,
    sort: (k: SortKey) => {
      if (k === key) {
        setDir(d => (d === "asc" ? "desc" : "asc"))
      } else {
        setKey(k)
        setDir("desc")
      }
    }
  }
}
