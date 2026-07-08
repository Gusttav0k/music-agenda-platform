import AgendaCard from "@/components/agendacards";
import Header from "@/components/header";
import Decorations from "@/components/Decoration";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-4 py-8 text-white">
      <Decorations />
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[11] h-56 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent" />

      <section className="relative z-10 mx-auto w-full max-w-[340px] px-3 sm:max-w-sm sm:px-0">
        <Header />

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
  );
}