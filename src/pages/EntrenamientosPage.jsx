// src/pages/CalendarioPage.jsx
export default function CalendarioPage() {
  const SRC =
    "https://calendar.google.com/calendar/embed?src=daf58fcac06ef693a8794379246a905ba8d8650363023cf47ad8d1f93a0fa09d%40group.calendar.google.com&ctz=America%2FArgentina%2FCordoba";

  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 text-white font-sans overflow-hidden">
      {/* Fondo tipo Calculadora */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#11173f] to-[#0c1030]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_20%,rgba(0,0,0,0.95)_0%,transparent_65%),radial-gradient(circle_600px_at_90%_80%,rgba(0,0,0,0.98)_0%,transparent_70%),radial-gradient(circle_400px_at_30%_70%,rgba(0,0,0,0.9)_0%,transparent_60%),radial-gradient(circle_450px_at_70%_30%,rgba(0,0,0,0.92)_0%,transparent_62%)] opacity-30" />

      {/* Card de vidrio */}
      <div className="relative w-full max-w-6xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Calendario
          </h1>
          <p className="mt-2 text-white/70">Fechas, eventos y entrenamientos.</p>
        </header>

        {/* Contenedor responsive del iframe */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-inner">
          {/* Alturas adaptativas: mobile / md / lg */}
          <div className="relative h-[560px] md:h-[700px] lg:h-[820px]">
            <iframe
              title="Google Calendar"
              src={SRC}
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
