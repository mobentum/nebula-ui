---
"@mobentum/nebula-ui": minor
---

Add shadcn-style compatibility and new primitives:

- `Button`: `asChild` support and shadcn `default`/`destructive` variant aliases plus `default`/`lg`/`icon` size aliases.
- `Card`: new `Title`, `Description`, and `Content` subcomponents.
- `Label`: new standalone `Label` component.
- `AlertDialog`: new `Action` component.
- `Tabs`: `TabsTrigger`/`TabsContent` aliases for `TabsTab`/`TabsPanel`.
- `Toast`: new imperative `toast()` / `useToast()` / `Toaster` API over the Base UI toast manager.
- Tune the radius scale so `sm`/`md`/`lg` sit closer to the base `--radius`.