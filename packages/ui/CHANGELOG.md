# @mobentum/nebula-ui

## 1.1.1

### Patch Changes

- 9060e08: fix(card): align header/footer spacing to shadcn conventions

  CardHeader now uses `p-6` and CardFooter `flex items-center p-6 pt-0`
  (no border dividers), so card bodies are no longer pressed against the
  header.

- 7d43fb6: fix(select): only render SelectItemIndicator for the selected item

  Remove `keepMounted` from the item indicator so the check icon no longer
  shows next to every option in the list.

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
