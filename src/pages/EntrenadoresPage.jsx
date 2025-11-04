export default function EntrenadoresPage() {
  const coaches = [
    { id: 1, name: "Valentina Pérez", role: "Fuerza · Data", status: "online" },
    { id: 2, name: "Nicolás Duarte", role: "Resistencia · Planificación", status: "away" },
    { id: 3, name: "Camila Soto", role: "Técnica · Natación", status: "offline" },
  ];

  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 text-white font-sans overflow-hidden">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#11173f] to-[#0c1030]" />
      {/* Manchas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_20%,rgba(0,0,0,0.95)_0%,transparent_65%),radial-gradient(circle_600px_at_90%_80%,rgba(0,0,0,0.98)_0%,transparent_70%),radial-gradient(circle_400px_at_30%_70%,rgba(0,0,0,0.9)_0%,transparent_60%),radial-gradient(circle_450px_at_70%_30%,rgba(0,0,0,0.92)_0%,transparent_62%)] opacity-30" />

      <div className="relative w-full max-w-6xl">
        <h2 className="mb-6 text-center text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Comunicación con Entrenadores
        </h2>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Panel izquierdo: listado de entrenadores */}
          <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_25px_60px_rgba(2,6,23,0.35)] p-4">
            <h3 className="px-2 pb-3 text-sm font-semibold text-white/80">Entrenadores</h3>
            <ul className="space-y-2">
              {coaches.map((c) => (
                <li key={c.id} className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-white/5 transition">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/10 border border-white/10">
                    {/* avatar placeholder */}
                    <div className="absolute inset-0 grid place-content-center text-white/60 text-xs">
                      {c.name.split(" ").map(s=>s[0]).join("").slice(0,2)}
                    </div>
                    {/* estado */}
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-[#0c1030] ${
                        c.status === "online"
                          ? "bg-emerald-400"
                          : c.status === "away"
                          ? "bg-amber-400"
                          : "bg-slate-400"
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{c.name}</p>
                    <p className="truncate text-xs text-white/60">{c.role}</p>
                  </div>
                  <button className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 border border-white/10 hover:bg-white/15">
                    Abrir chat
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Panel derecho: acciones + mensaje */}
          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_25px_60px_rgba(2,6,23,0.35)]">
            <div className="border-b border-white/10 p-4 flex flex-wrap items-center gap-2">
              <ActionButton label="Enviar archivo" />
            </div>

            {/* Zona de conversación (placeholder) */}
            <div className="p-5 h-[46vh] min-h-[260px] max-h-[60vh] overflow-y-auto space-y-3">
              <Bubble who="Valentina" text="¿Cómo se sintió el bloque de fuerza de hoy?" />
              <Bubble who="Tú" mine text="Bien, algo cargadas las piernas pero dentro de lo esperado." />
              <Bubble who="Valentina" text="Perfecto. Ajusto volumen -10% para mañana y envío la nota." />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                type="text"
                placeholder="Escribe un mensaje para tu entrenador…"
                className="flex-1 rounded-full bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/50
                           focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-transparent"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:from-cyan-300 hover:to-blue-400 transition"
              >
                Enviar
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}

function ActionButton({ label }) {
  return (
    <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10">
      {label}
    </button>
  );
}

function Bubble({ who, text, mine = false }) {
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow
          ${mine
            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900"
            : "bg-white/10 border border-white/10 text-white/90 backdrop-blur-sm"}`}
      >
        {!mine && <p className="text-[11px] uppercase tracking-wide text-white/60 mb-1">{who}</p>}
        <p>{text}</p>
      </div>
    </div>
  );
}
