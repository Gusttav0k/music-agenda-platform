"use client";

import { motion } from "motion/react";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#d90045]">
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-10 h-72 w-72 rounded-[35%] bg-purple-700/80 blur-sm"
      />

      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-52 h-96 w-96 bg-pink-950/40 blur-md"
        style={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 left-1/2 h-80 w-[520px] -translate-x-1/2 rounded-full bg-violet-700/70 blur-2xl"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/45" />
    </div>
  );
}