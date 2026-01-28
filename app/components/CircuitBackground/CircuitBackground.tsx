// "use client";
// import { motion } from "framer-motion";

// const paths = [
//   "M40 20 V70 C40 90 70 90 70 110 V160",
//   "M70 110 H120 C140 110 140 80 160 80 H180",
//   "M120 110 V40 C120 20 150 20 150 40 V80",
//   "M70 110 V190",
//   "M40 70 H20",
//   "M150 40 H190",
//   "M160 80 V150 C160 170 130 170 130 190",
//   "M20 130 H90 C110 130 110 160 140 160 H200",
//   "M90 130 V60 C90 40 110 40 110 20",
//   "M110 160 V200",
//   "M200 80 V140",
//   "M30 190 H80",
// ];

// export default function CircuitMini() {
//   return (
//     <div className="w-32 sm:w-48 h-32 sm:h-40 relative">
//       <svg viewBox="0 0 220 220" className="w-full h-full">
//         <defs>
//           {/* Glow filter */}
//           <filter id="glow">
//             <feGaussianBlur stdDeviation="8" result="blur1" />
//             <feGaussianBlur stdDeviation="4" result="blur2" />
//             <feMerge>
//               <feMergeNode in="blur1" />
//               <feMergeNode in="blur2" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>

//           {/* Light mode shimmer - black glow */}
//           <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="transparent" />
//             <stop offset="45%" stopColor="#000000" stopOpacity="0.9" />
//             <stop offset="55%" stopColor="#000000" stopOpacity="0.9" />
//             <stop offset="100%" stopColor="transparent" />
//           </linearGradient>

//           {/* Dark mode shimmer - white glow */}
//           <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
//             <stop offset="0%" stopColor="transparent" />
//             <stop offset="42%" stopColor="#ffffff" stopOpacity="1" />
//             <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
//             <stop offset="58%" stopColor="#ffffff" stopOpacity="1" />
//             <stop offset="100%" stopColor="transparent" />
//           </linearGradient>
//         </defs>

//         {/* Base lines */}
//         {paths.map((d, i) => (
//           <path
//             key={i}
//             d={d}
//             className="stroke-black/20 dark:stroke-white/20"
//             strokeWidth="1"
//             fill="none"
//           />
//         ))}

//         {/* Light shimmer */}
//         {paths.map((d, i) => (
//           <motion.path
//             key={`light-${i}`}
//             d={d}
//             stroke="url(#shimmer-light)"
//             className="dark:hidden"
//             strokeWidth="2.5"
//             fill="none"
//             strokeDasharray="20 180"
//             animate={{ strokeDashoffset: [200, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "linear",
//               delay: i * 0.15,
//             }}
//             filter="url(#glow)"
//           />
//         ))}

//         {/* Dark shimmer */}
//         {paths.map((d, i) => (
//           <motion.path
//             key={`dark-${i}`}
//             d={d}
//             stroke="url(#shimmer-dark)"
//             className="hidden dark:block"
//             strokeWidth="3"
//             fill="none"
//             strokeDasharray="25 200"
//             animate={{ strokeDashoffset: [220, 0] }}
//             transition={{
//               duration: 1.8,
//               repeat: Infinity,
//               ease: "linear",
//               delay: i * 0.15,
//             }}
//             filter="url(#glow)"
//           />
//         ))}

//         {/* Nodes */}
//         {[
//           [40, 20],
//           [70, 110],
//           [120, 110],
//           [160, 80],
//           [180, 80],
//           [130, 190],
//           [90, 130],
//           [110, 20],
//           [200, 140],
//           [30, 190],
//         ].map(([cx, cy], i) => (
//           <motion.circle
//             key={i}
//             cx={cx}
//             cy={cy}
//             r="5"
//             className="fill-black dark:fill-white"
//             filter="url(#glow)"
//             animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               delay: i * 0.2,
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }








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
    <div className="w-32 sm:w-48 h-32 sm:h-40 relative overflow-hidden">
      <svg
        viewBox="0 0 220 220"
        className="w-full h-full block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="4" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="shimmer-light" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="45%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="shimmer-dark" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="42%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="58%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Base lines */}
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            className="stroke-black/20 dark:stroke-white/20"
            strokeWidth="1"
            fill="none"
          />
        ))}

        {/* Light shimmer */}
        {paths.map((d, i) => (
          <motion.path
            key={`light-${i}`}
            d={d}
            stroke="url(#shimmer-light)"
            className="dark:hidden"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="20 180"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.18,
            }}
            filter="url(#glow)"
          />
        ))}

        {/* Dark shimmer */}
        {paths.map((d, i) => (
          <motion.path
            key={`dark-${i}`}
            d={d}
            stroke="url(#shimmer-dark)"
            className="hidden dark:block"
            strokeWidth="3"
            fill="none"
            strokeDasharray="25 200"
            animate={{ strokeDashoffset: [220, 0] }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.18,
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
            r="5"
            className="fill-black dark:fill-white"
            filter="url(#glow)"
            animate={{ scale: [1, 1.25, 1], opacity: [0.75, 1, 0.75] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
