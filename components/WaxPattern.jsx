// Motifs wax dessinés en SVG (remplaçables plus tard par de vraies photos de tissus)
export default function WaxPattern({ variant = 0, colors, id, scale = 1, className = "" }) {
  const [a, b, c, d] = colors;
  const shapes = [
    <>
      <rect width="80" height="80" fill={a} />
      <circle cx="40" cy="40" r="36" fill={b} />
      <circle cx="40" cy="40" r="26" fill={a} />
      <circle cx="40" cy="40" r="16" fill={c} />
      <circle cx="40" cy="40" r="6" fill={d} />
    </>,
    <>
      <rect width="80" height="80" fill={a} />
      <path d="M0 20 L20 0 L40 20 L60 0 L80 20 V34 L60 14 L40 34 L20 14 L0 34Z" fill={b} />
      <circle cx="20" cy="60" r="8" fill={c} />
      <circle cx="60" cy="60" r="8" fill={d} />
    </>,
    <>
      <rect width="80" height="80" fill={a} />
      {[0, 90, 180, 270].map((r) => (
        <ellipse key={r} cx="40" cy="21" rx="9" ry="17" fill={b} transform={`rotate(${r} 40 40)`} />
      ))}
      <circle cx="40" cy="40" r="9" fill={c} />
      <circle cx="40" cy="40" r="3.5" fill={d} />
      <circle cx="4" cy="4" r="4" fill={d} /><circle cx="76" cy="4" r="4" fill={d} />
      <circle cx="4" cy="76" r="4" fill={d} /><circle cx="76" cy="76" r="4" fill={d} />
    </>,
    <>
      <rect width="80" height="80" fill={a} />
      <polygon points="40,4 76,40 40,76 4,40" fill={b} />
      <polygon points="40,16 64,40 40,64 16,40" fill={a} />
      <circle cx="40" cy="40" r="9" fill={c} />
      <circle cx="40" cy="40" r="3" fill={d} />
    </>,
    <>
      <rect width="80" height="80" fill={a} />
      <path d="M0 18 Q20 0 40 18 T80 18" stroke={b} strokeWidth="8" fill="none" />
      <path d="M0 44 Q20 26 40 44 T80 44" stroke={c} strokeWidth="8" fill="none" />
      <path d="M0 70 Q20 52 40 70 T80 70" stroke={b} strokeWidth="8" fill="none" />
      <circle cx="20" cy="31" r="3" fill={d} /><circle cx="60" cy="57" r="3" fill={d} />
    </>,
    <>
      <rect width="80" height="80" fill={a} />
      {[[0, 0], [80, 0], [40, 40], [0, 80], [80, 80]].map(([x, y]) => (
        <g key={`${x}${y}`}>
          <circle cx={x} cy={y} r="38" fill="none" stroke={b} strokeWidth="6" />
          <circle cx={x} cy={y} r="24" fill="none" stroke={c} strokeWidth="6" />
          <circle cx={x} cy={y} r="10" fill={d} />
        </g>
      ))}
    </>,
  ];
  const pid = `wax-${id}`;
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={pid} patternUnits="userSpaceOnUse" width="80" height="80" patternTransform={`scale(${scale})`}>
          {shapes[variant % shapes.length]}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  );
}
