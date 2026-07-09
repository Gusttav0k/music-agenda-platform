"use client";
import { useState } from "react";



export default function AdminPage() {
  const [modalAberto, setModalAberto] = useState(false);

  return (

   <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white">
      <section className="mx-auto max-w-md">

        <h1 className="text-3xl font-bold">
          Painel da Banda
        </h1>

        <p className="mt-2 text-zinc-400">
          Gerencie sua agenda de shows.
        </p>

        <div className="mt-8 space-y-4">

          <div className="rounded-2xl bg-neutral-900 p-4">

            <h2 className="font-bold text-lg">
              EH Bar
            </h2>

            <p className="text-zinc-400">
              Terça • 20:00
            </p>

            <div className="mt-4 flex gap-3">

              <button className="flex-1 rounded-xl bg-blue-600 py-2">
                Editar
              </button>

              <button className="flex-1 rounded-xl bg-red-500 py-2">
                Excluir
              </button>

            </div>

          </div>

        </div>

      </section>
      <button
  className="
    fixed
    bottom-8
    right-8
    z-50
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-full
    bg-emerald-500
    text-4xl
    font-light
    text-white
    shadow-2xl
    transition
    hover:scale-110
    hover:bg-emerald-600
    active:scale-95
    "
    onClick={() => setModalAberto(true)}
    >
  +
</button>
{modalAberto && (
  <div className="fixed inset-0 z-50 flex items-end bg-black/70">
    <div className="mx-auto w-full max-w-md rounded-t-3xl bg-neutral-900 p-5 text-white">
    <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-zinc-700" />
      <h2 className="text-xl font-bold">Novo Show</h2>

      <div className="mt-5 space-y-4">
        <div className="space-y-2">
  <label className="flex items-center gap-2 text-zinc-300">
    📍 <span>Local</span>
  </label>

  <input
    placeholder="Ex: EH Bar"
    className="w-full rounded-2xl border border-zinc-700 bg-neutral-950 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-emerald-500"
  />
</div>

        <div>
  <label className="mb-2 block text-sm font-medium text-zinc-300">
    📅 Dia da semana
  </label>

  <select className="w-full rounded-xl bg-neutral-800 px-4 py-3 outline-none">
    <option>Segunda-feira</option>
    <option>Terça-feira</option>
    <option>Quarta-feira</option>
    <option>Quinta-feira</option>
    <option>Sexta-feira</option>
    <option>Sábado</option>
    <option>Domingo</option>
  </select>
</div>

        <div>
  <div>
    <div className="space-y-2">
  <label className="mb-2 block text-sm font-medium text-zinc-300">
    🕒 Horário
  </label>
</div>
 <input
    type="time"
    className="
      w-full
      rounded-2xl
      border
      border-zinc-700
      bg-neutral-950
      px-5
      py-4
      text-white
      outline-none
      appearance-none
      focus:border-emerald-500
    "
  />
  </div>
</div>

        <div className="space-y-2">
  <label className="flex items-center gap-2 text-zinc-300">
    🗺️ <span>Link do Google Maps</span>
  </label>

  <input
    placeholder="Cole o link do Google Maps"
    className="w-full rounded-2xl border border-zinc-700 bg-neutral-950 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-emerald-500"
  />
</div>

       <button
  className="
    mt-2
    w-full
    rounded-2xl
    bg-emerald-500
    py-4
    text-lg
    font-semibold
    text-white
    transition
    hover:bg-emerald-600
    active:scale-95
  "
>
  ✔ Salvar
</button>

        <button
          onClick={() => setModalAberto(false)}
          className="w-full rounded-2xl bg-neutral-800 py-4 text-zinc-300 transition hover:bg-neutral-700"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
)}
    </main>
  );
}