import AgendaCard from "@/components/agendacards";
import Header from "@/components/header";
import Decorations from "@/components/Decoration";
import { agenda } from "@/data/agenda";

export default function Home() {
 
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-4 py-8 text-white">
      <Decorations />
      

      <section className="relative z-10 mx-auto w-full max-w-[320px] px-2 sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px]">
        <Header />

        <div className="mt-8 space-y-5">
          {agenda.map((show, index) => (
  <AgendaCard
    key={show.local}
    dia={show.dia}
    local={show.local}
    horario={show.horario}
    imagem={show.imagem}
    maps={show.maps}
    delay={index * 0.2}
  />
))}
          
        </div>
      </section>
    </main>
  );
}