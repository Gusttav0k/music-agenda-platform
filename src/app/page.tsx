import AgendaCard from "@/components/agendacards";
import Header from "@/components/header";
import Decorations from "@/components/Decoration";
import { agenda } from "@/data/agenda";
import FloatingHero from "@/components/FloatingHero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e90055] text-white">
      <section className="relative">
        <FloatingHero />
        <Decorations />
      </section>

      <section
        id="agenda"
        className="relative z-10 px-4 py-16 sm:py-20"
      >
        <div className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-[40%] bg-[#3d00d9]/45" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rotate-12 bg-[#270033]/35 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-full bg-[#efff00]/90" />

        <div className="mx-auto w-full max-w-[320px] px-2 sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]">
          <Header />

          <div className="mt-8 space-y-5">
            {agenda.map((show, index) => (
              <AgendaCard
                key={`${show.dia}-${show.local}`}
                dia={show.dia}
                local={show.local}
                horario={show.horario}
                imagem={show.imagem}
                maps={show.maps}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
