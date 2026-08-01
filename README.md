# Nebula UI

A React component library built on [Base UI](https://base-ui.com/) primitives with Tailwind CSS, designed for rapid prototyping.

## Tech Stack

- **Runtime**: React 18+ / 19
- **Primitives**: [Base UI](https://base-ui.com/) (unstyled, accessible)
- **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`, `class-variance-authority`
- **Build**: `tsup` (ESM + CJS + DTS)
- **Test**: Vitest + Testing Library
- **Monorepo**: pnpm workspaces + Turborepo
- **Docs**: Next.js 15 kitchensink

## Getting Started

```bash
pnpm install
pnpm run build
```

## Project Structure

```
nebula-ui/
├── docs/                    # Next.js kitchensink / documentation
├── packages/
│   ├── ui/                  # @nebula/ui — component library
│   │   ├── src/
│   │   │   ├── components/  # One folder per component
│   │   │   │   ├── layout/  # Separator only
│   │   │   │   ├── button/
│   │   │   │   └── accordion/
│   │   │   ├── lib/         # Utilities (cn, types)
│   │   │   └── __tests__/   # Co-located tests
│   │   ├── dist/            # Build output
│   │   ├── index.ts         # Barrel export
│   │   └── package.json     # @nebula/ui
│   ├── tsconfig/            # Shared TS configs
│   └── eslint-config/       # Shared ESLint config
├── .changeset/              # Changesets config
├── .github/workflows/       # CI + release
├── turbo.json
└── pnpm-workspace.yaml
```

## Development

### Start the docs dev server

```bash
pnpm run dev
```

This runs both the UI package in watch mode and the Next.js docs in parallel.

### Work on a single component

1. Create a component in `packages/ui/src/components/<name>/`
2. Add a barrel export in `packages/ui/src/components/<name>/index.ts`
3. Export from `packages/ui/index.ts`
4. Write tests in `packages/ui/src/__tests__/`
5. Add a demo page in `docs/app/`

### Run tests

```bash
pnpm run test
```

### Type-check

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

## Adding a New Component

1. Create a folder `packages/ui/src/components/<name>/`
2. Create `<name>.tsx` wrapping the Base UI primitive
3. Create `index.ts` to re-export
4. Import and re-export from `packages/ui/index.ts`
5. Add tests in `packages/ui/src/__tests__/<name>.test.tsx`
6. Run `pnpm run test —filter @nebula/ui` to verify

### Component conventions

- Use `forwardRef` for all interactive components
- Use `cva` for variant-based styling
- Use `cn()` for className merging
- Export both the component and its Props type
- Compound components use a namespace object (e.g. `Accordion.Root`)
- Each part accepts `className` for easy override

## Release

This project uses [Changesets](https://github.com/changesets/changesets).

1. Run `pnpm changeset` to describe what changed
2. Commit the generated markdown file
3. Push to `main` — GitHub Actions will open a release PR
4. Merge the release PR to publish to npm

## CI

- **CI** (`.github/workflows/ci.yml`): runs lint, typecheck, test, build on every push
- **Release** (`.github/workflows/release.yml`): creates release PRs and publishes via Changesets on push to `main`

## Theming

Nebula UI uses **CSS custom properties** for all semantic color tokens, enabling multi‑theme support.

### How it works

```css
/* 1. Define theme values in :root (light) and .dark (dark) */
:root {
  --background: #fafafa;
  --foreground: #171717;
  --primary: #093c5d;
  --border: #e5e5e5;
  /* … */
}

.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --primary: #38749e;
  --border: #404040;
}

/* 2. Map variables to Tailwind utility classes */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-border: var(--border);
  /* … */
}
```

All components use semantic Tailwind classes (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, etc.), so changing a CSS variable recolor the entire UI.

### Adding a new theme

Create a new theme by overriding the CSS variables under a `[data-theme]` selector:

```css
[data-theme="forest"] {
  --background: #f0f7f0;
  --foreground: #1a3a1a;
  --primary: #2d6a2d;
  --primary-foreground: #ffffff;
  --border: #c8dcc8;
  /* … */
}

[data-theme="forest"].dark,
.dark [data-theme="forest"] {
  --background: #0a1a0a;
  --foreground: #e0f0e0;
  --primary: #4k9a4a;
  --border: #2a4a2a;
  /* … */
}
```

Then switch themes by setting `data-theme="forest"` on `<html>`:

```tsx
document.documentElement.setAttribute('data-theme', 'forest');
```

### Provided CSS files

The UI package ships two optional CSS files under `@nebula/ui/styles/`:

| File | Purpose |
|---|---|
| `tailwind.css` | `@theme inline` block — maps CSS vars to Tailwind utilities |
| `theme.css` | Default `:root` / `.dark` values (light & dark) |

Import them in your app's global CSS:

```css
@import "tailwindcss";
@import "@nebula/ui/styles/tailwind.css";   /* optional: semantic tokens */
@import "@nebula/ui/styles/theme.css";       /* optional: default values */
@source "../node_modules/@nebula/ui/dist";
```

### Semantic token reference

| Token | Purpose | Used by |
|---|---|---|
| `background` / `foreground` | App background and text | Page, body, default surfaces |
| `card` / `card-foreground` | Elevated surfaces | Card, panels |
| `popover` / `popover-foreground` | Floating surfaces | Menu, Popover, Tooltip, Select |
| `primary` / `primary-foreground` | Brand emphasis | Primary Button, active states |
| `secondary` / `secondary-foreground` | Lower emphasis | Secondary Button, badges |
| `muted` / `muted-foreground` | Subtle surfaces | Tabs list, descriptions, placeholders |
| `accent` / `accent-foreground` | Interactive states | Hover backgrounds, ghost buttons |
| `destructive` / `destructive-foreground` | Errors | Danger Button, error states |
| `border` | Default borders | Cards, menus, inputs, dividers |
| `input` | Form control borders | Input, Textarea, Select trigger |
| `ring` | Focus rings | All focusable elements |

### FAQ

**Q: I use Tailwind v4 with `@source` — will Chimes UI classes work?**  
Yes. Add `@source "../node_modules/@nebula/ui/dist"` to your CSS so Tailwind scans the library output for class names like `gap-8`, `bg-background`, etc.

**Q: Can I use Nebula UI without CSS variables?**  
You can override any component with `className` to hardcode colors, but the default theme system relies on CSS variables.

## License

MIT
