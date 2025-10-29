// src/components/RutinaCard.jsx
import { useState } from "react";

const plan = {
  lugar: "Centro Cívico",
  calentamiento: [
    "1 km trote (Z1)",
    "Driles técnicos",
    "Elongaciones cortas",
  ],
  bloques: [
    {
      titulo: "G. ULTRA – LARGAS",
      repeticiones: "2×",
      series: ["1 km (Z1)", "2 km (Z2)", "1 km (Z3) · 2º BL (Z4)"],
      pausa: "2′ pausa entre bloques",
    },
    {
      titulo: "G. MEDIAS – CORTAS",
      repeticiones: "2×",
      series: [
        "1 km (Z1) · 2º BL (Z2)",
        "1 km (Z2) · 2º BL (Z3)",
        "1 km (Z3) · 2º BL (Z4)",
      ],
      pausa: "2′ pausa entre bloques",
    },
    {
      titulo: "GRUPO 4",
      repeticiones: "2 o 3×",
      series: [
        "500 m (Z1) + 2′ pausa",
        "500 m (Z2) + 2′ pausa",
        "500 m (Z3) + 2′ pausa",
      ],
    },
  ],
  enfriamiento: ["5′ trote suave", "Elongación larga"],
};

const ZonaChip = ({ z }) => (
  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
    {z}
  </span>
);

export default function RutinaCard() {
  const [open, setOpen] = useState({ c: true, p: true, e: false });

  const zonas = ["Z1", "Z2", "Z3", "Z4"];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur transition hover:shadow-xl">
      {/* Header */}
      <header className="flex items-center justify-between gap-3 border-b border-slate-200 p-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Rutina del día · Running
          </h3>
          <p className="text-sm text-slate-600">Lugar: {plan.lugar}</p>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          {zonas.map((z) => (
            <ZonaChip key={z} z={z} />
          ))}
        </div>
      </header>

      {/* Calentamiento */}
      <section className="p-4">
        <button
          onClick={() => setOpen((s) => ({ ...s, c: !s.c }))}
          className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-left"
        >
          <span className="font-medium text-slate-800">Calentamiento</span>
          <span className="text-sm text-slate-500">
            {open.c ? "Ocultar" : "Mostrar"}
          </span>
        </button>
        {open.c && (
          <ul className="mt-3 space-y-1 pl-1 text-slate-700">
            {plan.calentamiento.map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Trabajo principal */}
      <section className="px-4 pb-4">
        <button
          onClick={() => setOpen((s) => ({ ...s, p: !s.p }))}
          className="mb-2 flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-left"
        >
          <span className="font-medium text-slate-800">Trabajo principal</span>
          <span className="text-sm text-slate-500">
            {open.p ? "Ocultar" : "Mostrar"}
          </span>
        </button>

        {open.p && (
          <div className="grid gap-3 md:grid-cols-3">
            {plan.bloques.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-3 shadow-xs"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {b.titulo}
                  </h4>
                  <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-medium text-white">
                    {b.repeticiones}
                  </span>
                </div>
                <ul className="space-y-1 text-slate-700">
                  {b.series.map((s, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                {b.pausa && (
                  <p className="mt-2 text-xs text-slate-500">{b.pausa}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Enfriamiento */}
      <section className="px-4 pb-4">
        <button
          onClick={() => setOpen((s) => ({ ...s, e: !s.e }))}
          className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-left"
        >
          <span className="font-medium text-slate-800">Enfriamiento</span>
          <span className="text-sm text-slate-500">
            {open.e ? "Ocultar" : "Mostrar"}
          </span>
        </button>
        {open.e && (
          <ul className="mt-3 space-y-1 pl-1 text-slate-700">
            {plan.enfriamiento.map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-slate-200 p-4">
        <div className="flex gap-2 text-xs text-slate-600">
          <span className="rounded-full bg-slate-100 px-2 py-1">Bloques</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">Pausas</span>
          <span className="rounded-full bg-slate-100 px-2 py-1">Zonas</span>
        </div>
        <button className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700">
          Guardar rutina
        </button>
      </footer>
    </article>
  );
}
