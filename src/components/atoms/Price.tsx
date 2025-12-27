import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { useRef } from "react"
import clsx from "clsx"

export function Price({ id, fallback }: { id: string; fallback: number }) {
  const price = useSelector((s: RootState) => s.tokens[id] ?? fallback)
  const prev = useRef(price)

  const direction =
    price > prev.current ? "up" : price < prev.current ? "down" : "same"

  prev.current = price

  return (
    <span
      className={clsx(
        "font-mono transition-colors duration-300",
        direction === "up" && "text-green-400",
        direction === "down" && "text-red-400",
        direction === "same" && "text-white"
      )}
    >
      ${price.toFixed(2)}
    </span>
  )
}
