"use client";

import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="mb-10 text-center"
    >
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl shadow-xl">
        🎵
      </div>

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
        Site oficial
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
        Banda
      </h1>

      <p className="mt-3 text-sm text-zinc-400">
        Agenda semanal 
      </p>
    </motion.header>
  );
}