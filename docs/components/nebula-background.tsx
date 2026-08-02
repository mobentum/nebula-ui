const LEO_STARS = [
  { x: 43, y: 55 }, // ε
  { x: 47, y: 62 }, // μ
  { x: 53, y: 66 }, // ζ
  { x: 58, y: 62 }, // η
  { x: 64, y: 50 }, // γ Algieba
  { x: 52, y: 76 }, // α Regulus
  { x: 72, y: 66 }, // δ Zosma
  { x: 79, y: 48 }, // θ
  { x: 84, y: 58 }, // β Denebola
];

const LEO_LINES = [
  [0, 1], [1, 2], [2, 3], [3, 4], // sickle arc
  [2, 5], [3, 5], // Regulus hanging off the sickle
  [5, 6], [6, 7], [6, 8], [7, 8], // tail triangle
];

export function NebulaBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
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
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [8, 12, 2], [15, 25, 1.5], [22, 8, 1], [30, 40, 2.5], [38, 18, 1.5],
          [45, 30, 1], [52, 10, 2], [60, 35, 1.5], [68, 20, 1], [75, 30, 2],
          [82, 15, 1.5], [90, 30, 1], [95, 60, 2], [5, 70, 1.5], [12, 85, 1],
          [25, 75, 2], [35, 90, 1.5], [48, 90, 1], [55, 88, 2], [65, 85, 1.5],
          [78, 80, 1], [88, 75, 2], [95, 90, 1.5], [20, 55, 1], [42, 35, 1.5],
          [30, 20, 1], [68, 8, 1], [90, 45, 1], [8, 45, 1], [15, 55, 1],
        ].map(([x, y, r], i) => {
          const s = r * 3;
          return (
            <g key={i} transform={`translate(${x}% ${y}%)`}>
              <circle r={s * 2.2} fill="url(#star)" />
              <path
                d={`M0 ${-s} L${s * 0.35} ${-s * 0.35} ${s} 0 ${s * 0.35} ${s * 0.35} 0 ${s} ${-s * 0.35} ${s * 0.35} ${-s} 0 ${-s * 0.35} ${-s * 0.35}`}
                fill="#6366f1"
                fillOpacity="0.65"
              />
            </g>
          );
        })}

        {/* Leo constellation */}
        <g stroke="#6366f1" strokeOpacity="0.55" strokeWidth="1.2">
          {LEO_LINES.map(([a, b], i) => (
            <line
              key={i}
              x1={`${LEO_STARS[a].x}%`}
              y1={`${LEO_STARS[a].y}%`}
              x2={`${LEO_STARS[b].x}%`}
              y2={`${LEO_STARS[b].y}%`}
            />
          ))}
        </g>
        {LEO_STARS.map(({ x, y }, i) => {
          const s = i === 5 || i === 8 ? 4 : 3;
          return (
            <g key={i} transform={`translate(${x}% ${y}%)`}>
              <circle r={s * 2.6} fill="url(#star)" />
              <path
                d={`M0 ${-s} L${s * 0.35} ${-s * 0.35} ${s} 0 ${s * 0.35} ${s * 0.35} 0 ${s} ${-s * 0.35} ${s * 0.35} ${-s} 0 ${-s * 0.35} ${-s * 0.35}`}
                fill="#6366f1"
                fillOpacity="0.85"
              />
              <text
                x={s + 4}
                y={s + 4}
                fontSize="7"
                fill="#6366f1"
                fillOpacity="0.7"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {i === 5 ? 'Regulus' : i === 8 ? 'Denebola' : i === 4 ? 'Algieba' : ''}
              </text>
            </g>
          );
        })}
        <text
          x="14%"
          y="24%"
          fontSize="8"
          letterSpacing="2"
          fill="#6366f1"
          fillOpacity="0.5"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          LEO
        </text>

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
