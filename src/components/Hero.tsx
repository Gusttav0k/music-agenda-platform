"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-10 text-center"
    >
      <img
        src="/images/logo.png"
        alt="Logo da Banda"
        className="mx-auto mb-6 h-28 w-28 rounded-full object-cover"
      />

      <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
        Site Oficial
      </p>

      <h1 className="mt-3 text-4xl font-bold text-white">
        Banda Meu Xodó
      </h1>

      <p className="mt-4 text-zinc-400">
        Confira nossa agenda de apresentações desta semana.
      </p>

      <div className="mx-auto mt-8 h-px w-24 rounded-full bg-zinc-700" />
    </motion.section>
  );
}