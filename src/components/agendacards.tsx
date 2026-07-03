"use client";

import { motion } from "motion/react";
import Image from "next/image";

type AgendaCardProps = {
  dia: string;
  local: string;
  horario: string;
  imagem: string;
  maps: string;
  delay?: number;
};

export default function AgendaCard({
  dia,
  local,
  horario,
  imagem,
  maps,
  delay = 0,
}: AgendaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur"
    >
      <Image
        src={imagem}
        alt={local}
        width={1000}
        height={1000}
        className="aspect-square w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
          {dia}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">{local}</h2>

        <p className="mt-2 text-zinc-300">🕒 {horario}</p>

        <a
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Ver localização
        </a>
      </div>
    </motion.div>
  );
}