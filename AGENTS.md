# Project Context

Nebula UI (@nebula/ui) — Base UI + Tailwind CSS component library under `packages/ui/`. Docs at `docs/`. Dev server: `cd docs && bun next dev` → `http://localhost:3000` (do NOT use `bun --bun next dev` — the Bun runtime breaks Turbopack's `next-mdx-remote/rsc` resolution on cold cache).

## Intent / Upcoming Work

- Add a `scrollable` prop to `Dialog.Content` that automatically applies `max-h-[85vh] flex flex-col` with a scrollable body area between sticky header and footer.
