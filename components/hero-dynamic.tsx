"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo, useEffect, useState, type CSSProperties } from "react";

const floatingSkills = [
  { name: "Node.js", icon: "JS", top: "18%", left: "50%", delay: 1 },
  { name: "Next.js", icon: "N", top: "35%", left: "47%", delay: 2 },
  { name: "MongoDB", icon: "DB", top: "52%", left: "50%", delay: 3 },
  { name: "Git", icon: "Git", top: "72%", left: "50%", delay: 4 },
  { name: "React", icon: "Rx", top: "12%", left: "80%", delay: 0 },
  { name: "TypeScript", icon: "TS", top: "32%", left: "86%", delay: 1.5 },
  { name: "Docker", icon: "D", top: "55%", left: "86%", delay: 2.5 },
  { name: "AWS", icon: "AWS", top: "72%", left: "83%", delay: 3.5 },
] as const;

const PARTICLE_COUNT = 70;

type ParticleStyle = CSSProperties & {
  "--particle-drift-x": string;
  "--particle-drift-y": string;
  "--particle-scale": number;
  "--particle-duration": string;
  "--particle-delay": string;
};

function createSeededRandom(initialSeed: number) {
  let seed = initialSeed;

  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const particleRandom = createSeededRandom(42);
const particles = Array.from({ length: PARTICLE_COUNT }, (_, id) => ({
  id,
  left: particleRandom() * 100,
  top: particleRandom() * 100,
  driftX: (particleRandom() - 0.5) * 40,
  driftY: -20 - particleRandom() * 60,
  scale: 0.5 + particleRandom() * 1.2,
  duration: 6 + particleRandom() * 6,
  delay: particleRandom() * 5,
}));

const ParticleField = memo(function ParticleField() {
  return (
    <div className="absolute inset-0" data-particle-count={PARTICLE_COUNT}>
      {particles.map((particle) => {
        const style: ParticleStyle = {
          left: `${particle.left}%`,
          top: `${particle.top}%`,
          "--particle-drift-x": `${particle.driftX}px`,
          "--particle-drift-y": `${particle.driftY}px`,
          "--particle-scale": particle.scale,
          "--particle-duration": `${particle.duration}s`,
          "--particle-delay": `${particle.delay}s`,
        };

        return (
          <span
            key={particle.id}
            className="hero-particle absolute h-1 w-1 rounded-full bg-current text-primary/55 shadow-[0_0_8px_currentColor] dark:text-primary/40"
            data-hero-particle
            style={style}
          />
        );
      })}
    </div>
  );
});

export default function HeroDynamic() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsLowEndDevice(
      typeof navigator !== "undefined" &&
        Boolean(navigator.hardwareConcurrency) &&
        navigator.hardwareConcurrency <= 4,
    );
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {/* Animated Background — particles */}
      <ParticleField />

      {!isLowEndDevice && (
        <div className="pointer-events-none absolute inset-0 z-20">
          {floatingSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="pointer-events-none absolute hidden cursor-default items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 shadow-md backdrop-blur-md will-change-transform dark:bg-primary/15 lg:flex"
              style={{
                top: skill.top,
                left: skill.left,
              }}
              initial={{ opacity: 0, scale: 0.7, y: 0 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1, y: 0 }
                  : {
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: { duration: 0.4, delay: 0.3 + index * 0.1 },
                      scale: { duration: 0.4, delay: 0.3 + index * 0.1 },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: skill.delay,
                      },
                    }
              }
            >
              <span className="text-sm font-bold text-primary">
                {skill.icon}
              </span>
              <span className="whitespace-nowrap text-xs font-semibold text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { useEffect, useMemo, useState } from "react";

// const floatingSkills = [
//   { name: "Node.js", icon: "JS", top: "18%", left: "50%", delay: 1 },
//   { name: "Next.js", icon: "N", top: "35%", left: "47%", delay: 2 },
//   { name: "MongoDB", icon: "DB", top: "52%", left: "50%", delay: 3 },
//   { name: "Git", icon: "Git", top: "72%", left: "46%", delay: 4 },
//   { name: "React", icon: "Rx", top: "12%", left: "80%", delay: 0 },
//   { name: "TypeScript", icon: "TS", top: "32%", left: "78%", delay: 1.5 },
//   { name: "Docker", icon: "D", top: "55%", left: "82%", delay: 2.5 },
//   { name: "AWS", icon: "AWS", top: "72%", left: "80%", delay: 3.5 },
// ] as const;

// const floatingRings = [
//   {
//     size: "h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
//     top: "14%",
//     left: "10%",
//     border: "border-primary/40 dark:border-primary/35",
//     fill: "bg-primary/[0.03] dark:bg-primary/[0.055]",
//     duration: 8.5,
//     delay: 0,
//     x: 12,
//     y: -14,
//   },
//   {
//     size: "h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44",
//     top: "58%",
//     left: "6%",
//     border: "border-accent/40 dark:border-accent/35",
//     fill: "bg-accent/[0.03] dark:bg-accent/[0.055]",
//     duration: 10,
//     delay: 1.1,
//     x: -10,
//     y: -18,
//   },
//   {
//     size: "h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40",
//     top: "18%",
//     left: "66%",
//     border: "border-primary/35 dark:border-primary/30",
//     fill: "bg-primary/[0.028] dark:bg-primary/[0.05]",
//     duration: 9.5,
//     delay: 0.6,
//     x: -14,
//     y: 12,
//   },
//   {
//     size: "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
//     top: "70%",
//     left: "76%",
//     border: "border-accent/40 dark:border-accent/35",
//     fill: "bg-accent/[0.032] dark:bg-accent/[0.055]",
//     duration: 7.5,
//     delay: 1.7,
//     x: 10,
//     y: -12,
//   },
// ] as const;

// const PARTICLE_COUNT = 50;
// const LOW_END_PARTICLE_COUNT = 28;
// const REDUCED_MOTION_PARTICLE_COUNT = 24;

// export default function HeroDynamic() {
//   const [isMounted, setIsMounted] = useState(false);
//   const [isLowEndDevice, setIsLowEndDevice] = useState(false);
//   const shouldReduceMotion = useReducedMotion();

//   useEffect(() => {
//     setIsMounted(true);
//     setIsLowEndDevice(
//       typeof navigator !== "undefined" &&
//         Boolean(navigator.hardwareConcurrency) &&
//         navigator.hardwareConcurrency <= 4,
//     );
//   }, []);

//   const particleCount = shouldReduceMotion
//     ? REDUCED_MOTION_PARTICLE_COUNT
//     : isLowEndDevice
//       ? LOW_END_PARTICLE_COUNT
//       : PARTICLE_COUNT;

//   const particles = useMemo(() => {
//     const seed = (s: number) => {
//       return () => {
//         s |= 0;
//         s = (s + 0x6d2b79f5) | 0;
//         let t = Math.imul(s ^ (s >>> 15), 1 | s);
//         t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
//         return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
//       };
//     };
//     const rand = seed(42);

//     return Array.from({ length: particleCount }, (_, index) => ({
//       id: index,
//       left: rand() * 100,
//       top: rand() * 100,
//       scale: 0.5 + rand() * 1.2,
//       driftX: (rand() - 0.5) * 24,
//       driftY: -10 - rand() * 22,
//       duration: 6 + rand() * 5,
//       delay: rand() * 4,
//     }));
//   }, [particleCount]);

//   if (!isMounted) return null;

//   return (
//     <div
//       aria-hidden="true"
//       className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
//     >
//       <div className="absolute inset-0 z-0 opacity-75 sm:opacity-100">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute h-1.5 w-1.5 rounded-full bg-current text-primary/55 shadow-[0_0_10px_currentColor] dark:text-primary/40"
//             style={{
//               left: `${particle.left}%`,
//               top: `${particle.top}%`,
//               scale: particle.scale,
//             }}
//             initial={{
//               opacity: shouldReduceMotion ? 0.35 : 0,
//               x: 0,
//               y: 0,
//             }}
//             animate={
//               shouldReduceMotion
//                 ? { opacity: 0.35, x: 0, y: 0 }
//                 : {
//                     opacity: [0, 0.75, 0],
//                     x: [0, particle.driftX, 0],
//                     y: [0, particle.driftY, 0],
//                   }
//             }
//             transition={
//               shouldReduceMotion
//                 ? { duration: 0 }
//                 : {
//                     duration: particle.duration,
//                     delay: particle.delay,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }
//             }
//           />
//         ))}
//       </div>

//       <div className="absolute inset-0 z-10">
//         {floatingRings.map((ring) => (
//           <motion.div
//             key={`${ring.top}-${ring.left}`}
//             className={`absolute rounded-full border-2 ${ring.size} ${ring.border} ${ring.fill} will-change-transform`}
//             style={{
//               top: ring.top,
//               left: ring.left,
//             }}
//             initial={{
//               opacity: shouldReduceMotion ? 0.3 : 0.2,
//               x: 0,
//               y: 0,
//               scale: 1,
//             }}
//             animate={
//               shouldReduceMotion
//                 ? { opacity: 0.3, x: 0, y: 0, scale: 1 }
//                 : {
//                     opacity: [0.2, 0.42, 0.2],
//                     x: [0, ring.x, 0],
//                     y: [0, ring.y, 0],
//                     scale: [1, 1.03, 1],
//                   }
//             }
//             transition={
//               shouldReduceMotion
//                 ? { duration: 0 }
//                 : {
//                     duration: ring.duration,
//                     delay: ring.delay,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }
//             }
//           />
//         ))}
//       </div>

//       {!isLowEndDevice && (
//         <div className="pointer-events-none absolute inset-0 z-20">
//           {floatingSkills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               className="pointer-events-none absolute hidden cursor-default items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-2 shadow-md backdrop-blur-md will-change-transform dark:bg-primary/15 lg:flex"
//               style={{
//                 top: skill.top,
//                 left: skill.left,
//               }}
//               initial={{ opacity: 0, scale: 0.7, y: 0 }}
//               animate={
//                 shouldReduceMotion
//                   ? { opacity: 1, scale: 1, y: 0 }
//                   : {
//                       opacity: 1,
//                       scale: 1,
//                       y: [0, -10, 0],
//                     }
//               }
//               transition={
//                 shouldReduceMotion
//                   ? { duration: 0 }
//                   : {
//                       opacity: { duration: 0.4, delay: 0.3 + index * 0.1 },
//                       scale: { duration: 0.4, delay: 0.3 + index * 0.1 },
//                       y: {
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: skill.delay,
//                       },
//                     }
//               }
//             >
//               <span className="text-sm font-bold text-primary">
//                 {skill.icon}
//               </span>
//               <span className="whitespace-nowrap text-xs font-semibold text-foreground">
//                 {skill.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
