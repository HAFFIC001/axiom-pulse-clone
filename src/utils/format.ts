export function formatNumber(
    value?: number,
    fallback = "--"
  ): string {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return fallback
    }
    return value.toLocaleString()
  }
  
  export function formatPercent(
    value?: number,
    fallback = "--"
  ): string {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return fallback
    }
    return value.toFixed(2)
  }
  