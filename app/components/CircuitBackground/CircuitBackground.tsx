"use client";
import { motion } from "framer-motion";

const paths = [
  "M40 20 V70 C40 90 70 90 70 110 V160",
  "M70 110 H120 C140 110 140 80 160 80 H180",
  "M120 110 V40 C120 20 150 20 150 40 V80",
  "M70 110 V190",
  "M40 70 H20",
  "M150 40 H190",
  "M160 80 V150 C160 170 130 170 130 190",
  "M20 130 H90 C110 130 110 160 140 160 H200",
  "M90 130 V60 C90 40 110 40 110 20",
  "M110 160 V200",
  "M200 80 V140",
  "M30 190 H80",
];

export default function CircuitMini() {
  return (
    <div className="w-48 h-48 relative">
      <svg viewBox="0 0 220 220" className="w-full h-full">
        <defs>
          {/* Strong glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Light mode shimmer */}
          <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="#000" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.75" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Dark mode shimmer (extra bright white) */}
          <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="42%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="58%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Base lines (always visible) */}
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            className="stroke-black/30 dark:stroke-white/25"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Shimmer overlays (light mode) */}
        {paths.map((d, i) => (
          <motion.path
            key={`light-${i}`}
            d={d}
            stroke="url(#shimmer-light)"
            className="dark:hidden"
            strokeWidth="1.7"
            fill="none"
            strokeDasharray="18 180"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
            filter="url(#glow)"
          />
        ))}

        {/* Shimmer overlays (dark mode – intense white glow) */}
        {paths.map((d, i) => (
          <motion.path
            key={`dark-${i}`}
            d={d}
            stroke="url(#shimmer-dark)"
            className="hidden dark:block"
            strokeWidth="2"
            fill="none"
            strokeDasharray="22 200"
            animate={{ strokeDashoffset: [220, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
            filter="url(#glow)"
          />
        ))}

        {/* Nodes */}
        {[
          [40, 20],
          [70, 110],
          [120, 110],
          [160, 80],
          [180, 80],
          [130, 190],
          [90, 130],
          [110, 20],
          [200, 140],
          [30, 190],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.8"
            className="fill-black dark:fill-white"
            filter="url(#glow)"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </svg>
    </div>
  );
}
