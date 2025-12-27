import { Token } from "@/types/token"
import PulseColumn from "./PulseColumn"

export default function PulseGrid({
  newPairs,
  finalStretch,
  migrated,
}: {
  newPairs: Token[]
  finalStretch: Token[]
  migrated: Token[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
      <PulseColumn title="New Pairs" tokens={newPairs} />
      <PulseColumn title="Final Stretch" tokens={finalStretch} />
      <PulseColumn title="Migrated" tokens={migrated} />
    </div>
  )
}
