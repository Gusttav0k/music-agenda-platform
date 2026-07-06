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
  const abrirMapa = () => {
    setTimeout(() => {
      window.open(maps, "_blank", "noopener,noreferrer");
    }, 180);
  };

  return (
    <motion.div
      onClick={abrirMapa}
      role="link"
      tabIndex={0}
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        opacity: { duration: 0.8, delay },
        y: { duration: 0.8, delay, ease: "easeOut" },
        scale: { duration: 0.12 },
      }}
      className="mx-auto flex w-full cursor-pointer gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-lg backdrop-blur transition hover:bg-white/[0.07] sm:gap-4"
    >
       
      <Image
        src={imagem}
        alt={local}
        width={300}
        height={300}
        className="h-24 w-24 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28"
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
    </motion.div>
  );
}