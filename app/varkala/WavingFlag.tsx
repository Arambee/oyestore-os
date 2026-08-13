// A small waving Indian flag, purely CSS/SVG - no external image or video
// asset. The "wave" is a feTurbulence + feDisplacementMap filter animated
// via SMIL, a standard technique for cloth-like ripple without JS.
const CHAKRA_CENTER = { x: 81, y: 40 };
const CHAKRA_RADIUS = 9;
const CHAKRA_SPOKES = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * 15 * Math.PI) / 180;
  return {
    x2: CHAKRA_CENTER.x + CHAKRA_RADIUS * Math.cos(angle),
    y2: CHAKRA_CENTER.y + CHAKRA_RADIUS * Math.sin(angle),
  };
});

export default function WavingFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 100"
      className={`h-[27px] w-[43px] sm:h-[39px] sm:w-[62px] ${className}`}
      aria-hidden
    >
      <defs>
        <filter
          id="flag-wave"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.04"
            numOctaves={2}
            seed={3}
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="5s"
              values="0.015 0.04;0.025 0.05;0.015 0.04"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={9}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      {/* Pole */}
      <rect
        x={4}
        y={0}
        width={3}
        height={100}
        fill="#9CA3AF"
      />
      <circle
        cx={5.5}
        cy={3}
        r={4}
        fill="#D4AF37"
      />

      {/* Flag cloth, waving */}
      <g filter="url(#flag-wave)">
        <rect
          x={7}
          y={8}
          width={148}
          height={21.33}
          fill="#FF9933"
        />
        <rect
          x={7}
          y={29.33}
          width={148}
          height={21.33}
          fill="#FFFFFF"
        />
        <rect
          x={7}
          y={50.67}
          width={148}
          height={21.33}
          fill="#138808"
        />
        <circle
          cx={CHAKRA_CENTER.x}
          cy={CHAKRA_CENTER.y}
          r={CHAKRA_RADIUS}
          fill="none"
          stroke="#000080"
          strokeWidth={0.9}
        />
        <circle
          cx={CHAKRA_CENTER.x}
          cy={CHAKRA_CENTER.y}
          r={1.1}
          fill="#000080"
        />
        {CHAKRA_SPOKES.map((s, i) => (
          <line
            key={i}
            x1={CHAKRA_CENTER.x}
            y1={CHAKRA_CENTER.y}
            x2={s.x2}
            y2={s.y2}
            stroke="#000080"
            strokeWidth={0.5}
          />
        ))}
      </g>
    </svg>
  );
}
