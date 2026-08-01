export function NebulaBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-slate-50 to-purple-50" />

      {/* Nebula color blobs */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-200/60 via-sky-200/40 to-transparent blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-purple-200/60 via-fuchsia-100/40 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-100/50 via-sky-100/30 to-transparent blur-3xl" />

      {/* Stars */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="star" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [8, 12, 2], [15, 25, 1.5], [22, 8, 1], [30, 40, 2.5], [38, 18, 1.5],
          [45, 55, 1], [52, 10, 2], [60, 35, 1.5], [68, 20, 1], [75, 50, 2],
          [82, 15, 1.5], [90, 30, 1], [95, 60, 2], [5, 70, 1.5], [12, 85, 1],
          [25, 75, 2], [35, 90, 1.5], [48, 70, 1], [55, 88, 2], [65, 65, 1.5],
          [78, 80, 1], [88, 75, 2], [95, 90, 1.5], [20, 55, 1], [42, 35, 1.5],
        ].map(([x, y, r], i) => (
          <circle key={i} cx={`${x}%`} cy={`${y}%`} r={r} fill="url(#star)" />
        ))}

        {/* Geometric constellation lines */}
        <g stroke="#a5b4fc" strokeOpacity="0.35" strokeWidth="1">
          <line x1="20%" y1="55%" x2="42%" y2="35%" />
          <line x1="42%" y1="35%" x2="52%" y2="10%" />
          <line x1="52%" y1="10%" x2="60%" y2="35%" />
          <line x1="60%" y1="35%" x2="68%" y2="20%" />
          <line x1="78%" y1="80%" x2="88%" y2="75%" />
          <line x1="88%" y1="75%" x2="95%" y2="60%" />
        </g>

        {/* Small geometric shapes */}
        <g fill="#c7d2fe" fillOpacity="0.6">
          <rect x="70%" y="50%" width="4" height="4" transform="rotate(45 72% 52%)" />
          <rect x="10%" y="30%" width="3" height="3" transform="rotate(45 11.5% 31.5%)" />
          <rect x="85%" y="20%" width="5" height="5" transform="rotate(45 87.5% 22.5%)" />
        </g>
        <g fill="none" stroke="#c7d2fe" strokeOpacity="0.5" strokeWidth="1">
          <polygon points="32%,12% 34%,16% 30%,16%" />
          <polygon points="72%,80% 75%,84% 69%,84%" />
          <polygon points="18%,70% 21%,73% 16%,74%" />
        </g>
      </svg>
    </div>
  );
}
