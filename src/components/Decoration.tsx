"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function Decorations() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 280], [0.9, 0]);
  const y = useTransform(scrollY, [0, 280], [0, -40]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.img
        src="/imagem/cantor2.png"
        alt=""
        style={{ opacity, y }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-32 h-80 sm:-left-24 sm:h-96 md:-left-12 md:h-[500px]"
       />
       
         

      <motion.img
        src="/imagem/cantor1.png"
        alt=""
        style={{ opacity, y }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-14 top-32 h-80 sm:-right-24 sm:h-96 md:-right-12 md:h-[500px]"
      />
    </div>
  );
}