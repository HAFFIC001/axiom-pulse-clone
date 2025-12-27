import PulseGrid from "@/components/organisms/PulseGrid"
import { NEW_PAIRS, FINAL_STRETCH, MIGRATED } from "@/data/tokens"

export default function PulsePage() {
  return (
    <main className="p-4 max-w-[1400px] mx-auto">
      <h1 className="text-lg font-semibold text-zinc-100 mb-4">
        Token Pulse
      </h1>

      <PulseGrid
        newPairs={NEW_PAIRS}
        finalStretch={FINAL_STRETCH}
        migrated={MIGRATED}
      />
    </main>
  )
}
