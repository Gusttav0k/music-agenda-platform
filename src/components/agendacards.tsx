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
    <motion.a
      href={maps}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver localização de ${local} no Google Maps`}
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 0.8, delay, ease: "easeOut" },
        scale: { duration: 0.12 },
      }}
      className="mx-auto flex w-full gap-3 rounded-3xl border border-white/15 bg-[#270033]/90 p-3 shadow-xl backdrop-blur-sm transition hover:bg-[#3d00d9]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#e90055] sm:gap-4 sm:p-4"
    >
       
      <Image
        src={imagem}
        alt={local}
        width={300}
        height={300}
        className="h-20 w-20 shrink-0 rounded-2xl object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
      />

      <div className="flex flex-1 flex-col justify-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
          {dia}
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          {local}
        </h2>

        <p className="mt-1 text-sm text-zinc-300">
          🕒 {horario}
        </p>

        <p className="mt-3 text-sm font-semibold text-white">
          📍 Abrir no Maps →
        </p>
      </div>
    </motion.a>
  );
}
