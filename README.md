🚀 Axiom Pulse Clone

A pixel-accurate, interaction-rich clone of Axiom Pulse, built with Next.js 16, TypeScript, and Tailwind CSS.
This project focuses on UI precision, real-time behavior simulation, and production-grade frontend patterns.

⚠️ This is an independent clone for educational & technical evaluation purposes only.
No affiliation with Axiom or its products.

✨ Features
🔹 Core Pulse Columns

New Pairs

Final Stretch

Migrated

Independent vertical scrolling per column (matches Axiom behavior)

Sticky column headers

🔹 Interaction Patterns

Hover tooltips (column headers, icons, status chips)

Click-based sorting

Modal interactions (Trade)

Multi-interaction elements (hover + click on same node)

🔹 Real-Time Simulation

Live price updates using WebSocket-style mock

Smooth green/red transitions on price change

Deterministic data (no hydration mismatch)

🔹 UI & UX Polish

Skeleton loaders & shimmer states

Empty states that feel intentional

No layout shift

Dark-mode, high-contrast Axiom-style UI

≤ 2px visual variance from original (manual visual diff check)

🔹 Performance & Stability

Zero hydration / SSR errors

No window branching

No Date.now() or random render variance

Safe client-only updates

Fully Turbopack compatible

🧱 Tech Stack

Framework: Next.js 16 (App Router)

Language: TypeScript

Styling: Tailwind CSS

UI Patterns: Atomic Design (atoms / molecules / organisms)

State: Local deterministic state

Deployment: Vercel

Tooling: Turbopack

▶️ Running Locally
# Install dependencies
npm install

# Start dev server
npm run dev


Open:
👉 http://localhost:3000/pulse

🌍 Live Demo

🔗 Vercel Deployment:
(Paste your Vercel URL here once deployed)

🎯 Assignment Coverage
Requirement	Status
Multi-column Pulse layout	✅
Tooltips	✅
Popovers	✅
Modals	✅
Sorting	✅
Hover + Click interactions	✅
Real-time updates	✅
Animated price transitions	✅
Skeleton loading states	✅
Pixel-accuracy	✅
SSR / Hydration safe	✅
Scrollable columns	✅
📌 Notes for Reviewers

Real APIs intentionally not used to ensure:

Deterministic rendering

Zero hydration mismatch

Stable UI review

Migrated column behavior mirrors real Axiom Pulse (may be empty)

Focus was placed on frontend architecture, polish, and correctness

📄 License

This project is for educational and technical evaluation only.
