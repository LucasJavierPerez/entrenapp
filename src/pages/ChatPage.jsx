export default function ChatPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 text-white font-sans overflow-hidden">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#11173f] to-[#0c1030]" />
      {/* Manchas como la calculadora */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_20%,rgba(0,0,0,0.95)_0%,transparent_65%),radial-gradient(circle_600px_at_90%_80%,rgba(0,0,0,0.98)_0%,transparent_70%),radial-gradient(circle_400px_at_30%_70%,rgba(0,0,0,0.9)_0%,transparent_60%),radial-gradient(circle_450px_at_70%_30%,rgba(0,0,0,0.92)_0%,transparent_62%)] opacity-30" />

      <div className="relative w-full max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Chat con la Comunidad
        </h2>

        {/* Tarjeta “glass” del chat */}
        <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_25px_60px_rgba(2,6,23,0.35)]">
          {/* Área de mensajes */}
          <div className="h-[50vh] min-h-[280px] max-h-[60vh] overflow-y-auto p-5 space-y-4">
            {/* Mensajes de ejemplo (puedes mapear tu estado aquí) */}
            <Message who="Ana" text="¡Bienvenidos al chat! 🎉" />
            <Message who="Luis" text="¿Alguien sale a rodar mañana?" />
            <Message who="Tú" mine text="Yo me anoto, ¿8am está bien?" />
          </div>

          {/* Barra de entrada */}
          <div className="border-t border-white/10 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: envía el mensaje a tu backend/estado
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="flex-1 rounded-full bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/50
                           focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-transparent"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-900
                           hover:from-cyan-300 hover:to-blue-400 transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function Message({ who, text, mine = false }) {
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
