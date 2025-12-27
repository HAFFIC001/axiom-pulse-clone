"use client"

const tabs = ["New Pairs", "Final Stretch", "Migrated"] as const

export function TableTabs({
  active,
  onChange
}: {
  active: number
  onChange: (i: number) => void
}) {
  return (
    <div className="flex gap-6 border-b border-zinc-800 mb-4">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => onChange(i)}
          className={`pb-3 text-sm transition ${
            active === i
              ? "text-white border-b-2 border-white"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
