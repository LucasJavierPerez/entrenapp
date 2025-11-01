// src/pages/RutinaDarkPage.jsx (opcional)
import RutinaCard from "../components/RutinaCard";

export default function RutinaDarkPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 text-white font-sans overflow-hidden">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#11173f] to-[#0c1030]" />
      {/* Manchas como la calculadora */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_20%,rgba(0,0,0,0.95)_0%,transparent_65%),radial-gradient(circle_600px_at_90%_80%,rgba(0,0,0,0.98)_0%,transparent_70%),radial-gradient(circle_400px_at_30%_70%,rgba(0,0,0,0.9)_0%,transparent_60%),radial-gradient(circle_450px_at_70%_30%,rgba(0,0,0,0.92)_0%,transparent_62%)] opacity-30" />

      <div className="relative w-full max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Rutina
        </h2>
        <RutinaCard />
      </div>
    </main>
  );
}
