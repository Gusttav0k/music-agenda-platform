"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function FloatingHero() {
  const { scrollY } = useScroll();
  const yFaixa = useTransform(scrollY, [0, 500], [0, 12]);
  const opacityTitulo = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen w-full bg-[#e90055]">
      {/* Faixa amarela fechada em diagonal, sem corte reto no fim do hero */}
      <motion.div
        style={{ y: yFaixa }}
        className="pointer-events-none absolute bottom-12 left-0 h-44 w-full bg-[#efff00] [clip-path:polygon(0_38%,100%_0,100%_62%,0_100%)]"
      />

      {/* Respingo roxo grande, canto inferior esquerdo */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-[40%] bg-[#3d00d9]/90 blur-[2px]"
      />

      {/* Triângulo branco menor, sobreposto, efeito "brilho" do vídeo */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-[38%] h-40 w-40"
        style={{
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          background: "#ffffff",
          opacity: 0.6,
        }}
      />

      {/* Pinceladas brancas no topo, tipo nuvem/rasgo */}
      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[6%] h-6 w-40 rounded-full bg-white/80 blur-[1px]"
        style={{ clipPath: "ellipse(50% 40% at 50% 50%)" }}
      />
      <motion.div
        animate={{ x: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[22%] top-[14%] h-4 w-24 rounded-full bg-white/60 blur-[1px]"
      />

      {/* Respingo roxo fininho na borda direita */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-2 top-0 h-full w-3 bg-[#3d00d9]/70"
      />

      {/* Título central */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.h1
          style={{ opacity: opacityTitulo }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl"
        >
          NOME DA BANDA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-base"
        >
          Agenda de shows
        </motion.p>
      </div>
    </div>
  );
}
