export default function TokenRowSkeleton() {
    return (
      <div className="px-3 py-3 animate-pulse border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-zinc-800" />
            <div>
              <div className="h-3 w-24 bg-zinc-800 rounded mb-2" />
              <div className="h-2 w-16 bg-zinc-800 rounded" />
            </div>
          </div>
          <div className="h-3 w-20 bg-zinc-800 rounded" />
        </div>
      </div>
    )
  }
  