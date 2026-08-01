export function NavIcon({ path }: { path: string }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon, hidden from screen readers
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
