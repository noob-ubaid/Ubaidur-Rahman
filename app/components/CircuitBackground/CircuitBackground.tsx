"use client";
import { motion } from "framer-motion";

const paths = [
  // Main vertical trunk (left)
  "M40 20 V60 Q40 80 60 80 Q78 80 78 100 V160",

  // Right horizontal from center (slightly higher)
  "M78 100 H108 Q128 100 128 78 Q128 58 148 58 H182",

  // Upper branch (offset to avoid overlap)
  "M108 100 V52 Q108 32 128 32 Q148 32 148 52 V78",

  // Lower extension
  "M78 100 V192",

  // Small left branch
  "M40 60 H18",

  // Top right small branch
  "M148 52 H192",

  // Curved down-right path (shifted right)
  "M148 78 V138 Q148 160 132 160 Q116 160 116 192",

  // Long bottom horizontal (shifted down)
  "M18 138 H78 Q98 138 98 156 Q98 174 120 174 H202",

  // Upper-left vertical (shifted left)
  "M78 138 V72 Q78 52 96 52 Q114 52 114 30",

  // Bottom center vertical
  "M120 174 V204",

  // Right vertical isolated
  "M202 78 V142",

  // Bottom-left short horizontal
  "M30 192 H82",
];

const nodes = [
  [40, 20],
  [78, 100],
  [108, 100],
  [148, 58],
  [182, 58],
  [116, 192],
  [78, 138],
  [114, 30],
  [202, 142],
  [30, 192],
];

export default function CircuitMini() {
  return (
    <div className="w-32 sm:w-48 h-32 sm:h-48 relative">
      <svg viewBox="0 0 220 220" className="w-full h-full">
        <defs>
          {/* Soft glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Light shimmer */}
          <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="#000" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.85" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Dark shimmer */}
          <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="#fff" stopOpacity="1" />
            <stop offset="55%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Base lines */}
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-black/30 dark:stroke-white/25"
          />
        ))}

        {/* Light shimmer */}
        {paths.map((d, i) => (
          <motion.path
            key={`light-${i}`}
            d={d}
            stroke="url(#shimmer-light)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="18 180"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.18,
            }}
            className="dark:hidden"
            filter="url(#glow)"
          />
        ))}

        {/* Dark shimmer */}
        {paths.map((d, i) => (
          <motion.path
            key={`dark-${i}`}
            d={d}
            stroke="url(#shimmer-dark)"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="22 200"
            animate={{ strokeDashoffset: [220, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.18,
            }}
            className="hidden dark:block"
            filter="url(#glow)"
          />
        ))}

        {/* Nodes */}
        {nodes.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.6"
            className="fill-black/80 dark:fill-white/80"
            filter="url(#glow)"
            animate={{ scale: [1, 1.55, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.22,
            }}
          />
        ))}
      </svg>
    </div>
  );
}





