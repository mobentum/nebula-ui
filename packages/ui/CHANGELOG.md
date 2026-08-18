# @mobentum/nebula-ui

## 1.1.0

### Minor Changes

- 29481b9: Add shadcn-style compatibility and new primitives:

  - `Button`: `asChild` support and shadcn `default`/`destructive` variant aliases plus `default`/`lg`/`icon` size aliases.
  - `Card`: new `Title`, `Description`, and `Content` subcomponents.
  - `Label`: new standalone `Label` component.
  - `AlertDialog`: new `Action` component.
  - `Tabs`: `TabsTrigger`/`TabsContent` aliases for `TabsTab`/`TabsPanel`.
  - `Toast`: new imperative `toast()` / `useToast()` / `Toaster` API over the Base UI toast manager.
  - Tune the radius scale so `sm`/`md`/`lg` sit closer to the base `--radius`.

## 1.0.0

### Major Changes

- c6b433c: Rename packages from `@nebula/*` to `@mobentum/nebula-*`. Breaking change — update all imports and dependency names.
