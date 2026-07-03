import AgendaCard from "@/components/agendacards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white">
  <section className="mx-auto max-w-sm">
    <h1 className="text-center text-3xl font-bold">
      Band Schedule Platform
    </h1>

    <p className="mt-2 text-center text-sm text-zinc-400">
      Plataforma web para divulgação da agenda da banda
    </p>

    <div className="mt-8 space-y-5">

      <AgendaCard
      dia="Terça feira"
      local="EH bar"
      horario="20:00"
      imagem="/imagem/EH BAR.PNG"
      maps="https://maps.app.goo.gl/wTP2TrgJcfdgyqhf6"
      delay={0}
       /> 

      <AgendaCard
      dia="Sexta-feira"
      local="Sun Paradise"
      horario="22:00"
      imagem="/imagem/sun.PNG"
      maps="https://maps.app.goo.gl/3EErFXtVH2knsofdA"
      delay={0.2}
      />

      <AgendaCard
      dia="Sabado"
      local="Paradise"
      horario="17:00"
      imagem="/imagem/sun2.PNG"
      maps="https://maps.app.goo.gl/3EErFXtVH2knsofdA"
      delay={0.4}
      />
      </div>
  </section>
</main>
)}