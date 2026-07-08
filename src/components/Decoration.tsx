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
        className="absolute -left-27 top-28 h-80 sm:-left-6 sm:h-[520px]"
       />
       
         

      <motion.img
        src="/imagem/cantor1.png"
        alt=""
        style={{ opacity, y }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-15 top-28 h-80 sm:-right-6 sm:h-[520px]"
      />
    </div>
  );
}