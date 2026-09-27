import { MotionValue, motion, useTransform } from "framer-motion";

/** Nozzle sits at y=252 of the 330-unit viewBox; the flame hangs below it. */
export const ROCKET_VIEWBOX_W = 120;
export const ROCKET_VIEWBOX_H = 330;
export const ROCKET_NOZZLE_Y = 252;

interface RocketSvgProps {
  /** 0 = engine off, 1 = full burn. Drives flame size and glow. */
  thrust: MotionValue<number>;
}

const RocketSvg = ({ thrust }: RocketSvgProps) => {
  const flameScale = useTransform(thrust, [0, 0.25, 1], [0, 0.45, 1]);
  const flameOpacity = useTransform(thrust, [0, 0.1, 1], [0, 0.9, 1]);
  const glowOpacity = useTransform(thrust, [0, 1], [0, 0.55]);

  return (
    <svg
      viewBox={`0 0 ${ROCKET_VIEWBOX_W} ${ROCKET_VIEWBOX_H}`}
      width="100%"
      height="100%"
      style={{ overflow: "visible", display: "block" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="rocket-body-shade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f1f2f6" />
          <stop offset="1" stopColor="#c9ced8" />
        </linearGradient>
        <radialGradient id="rocket-engine-glow" cx="0.5" cy="0" r="0.8">
          <stop offset="0" stopColor="#ffb347" stopOpacity="1" />
          <stop offset="1" stopColor="#ff7a18" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Engine glow bleeding onto the lower body */}
      <motion.ellipse
        cx="60"
        cy="252"
        rx="46"
        ry="34"
        fill="url(#rocket-engine-glow)"
        style={{ opacity: glowOpacity }}
      />

      {/* Flame: outer thrust scale (motion) wraps the CSS flicker group */}
      <motion.g style={{ scaleY: flameScale, scaleX: flameScale, opacity: flameOpacity, originX: 0.5, originY: 0 }}>
        <g className="rocket-flame">
          <path d="M44 250 C 42 286, 54 306, 60 326 C 66 306, 78 286, 76 250 Z" fill="#fb923c" />
          <path d="M49 250 C 48 276, 56 292, 60 306 C 64 292, 72 276, 71 250 Z" fill="#fde047" />
          <path d="M54 250 C 54 266, 58 278, 60 288 C 62 278, 66 266, 66 250 Z" fill="#ffffff" />
        </g>
      </motion.g>

      {/* Fins */}
      <path
        d="M32 166 C 20 190, 10 214, 8 238 L 32 226 Z"
        fill="var(--chakra-colors-primary-600)"
        stroke="var(--chakra-colors-primary-800)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M88 166 C 100 190, 110 214, 112 238 L 88 226 Z"
        fill="var(--chakra-colors-primary-600)"
        stroke="var(--chakra-colors-primary-800)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Nozzle */}
      <path d="M44 224 L 38 246 H 82 L 76 224 Z" fill="#4a5568" stroke="#2d3748" strokeWidth="2" />
      <path d="M40 246 H 80 L 76 252 H 44 Z" fill="#2d3748" />

      {/* Body */}
      <rect
        x="32"
        y="94"
        width="56"
        height="132"
        rx="7"
        fill="url(#rocket-body-shade)"
        stroke="#4a5568"
        strokeWidth="2.5"
      />
      {/* Accent stripe + rivet line */}
      <rect x="33.25" y="152" width="53.5" height="12" fill="var(--chakra-colors-primary-500)" />
      <rect x="33.25" y="200" width="53.5" height="3" fill="#a0aec0" opacity="0.7" />

      {/* Centre fin facing the viewer */}
      <path d="M55 186 H 65 L 68 238 H 52 Z" fill="var(--chakra-colors-primary-700)" stroke="#2d3748" strokeWidth="1.5" />

      {/* Nose cone */}
      <path
        d="M60 6 C 79 28, 89 60, 89 96 L 31 96 C 31 60, 41 28, 60 6 Z"
        fill="var(--chakra-colors-primary-500)"
        stroke="var(--chakra-colors-primary-800)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M60 6 C 52 20, 46 40, 44 60 C 48 42, 54 24, 60 6 Z" fill="#ffffff" opacity="0.35" />

      {/* Porthole */}
      <circle cx="60" cy="124" r="17" fill="var(--chakra-colors-primary-600)" />
      <circle cx="60" cy="124" r="12" fill="#455a64" />
      <circle cx="60" cy="124" r="12" fill="url(#rocket-body-shade)" opacity="0.15" />
      <circle cx="55" cy="119" r="4" fill="#ffffff" opacity="0.6" />
    </svg>
  );
};

export default RocketSvg;
