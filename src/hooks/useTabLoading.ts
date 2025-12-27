import { useEffect, useState } from "react"

export function useTabLoading(dep: unknown, delay = 500) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), delay)
    return () => clearTimeout(t)
  }, [dep, delay])

  return loading
}
