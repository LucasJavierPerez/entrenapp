// src/pages/RutinasPage.jsx
import RutinaCard from "../components/RutinaCard";
import ScrollSection from "../components/scrollsections";

export default function RutinasPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="mb-1 text-3xl font-bold">Rutinas Personalizadas</h2>
        <p className="text-gray-600">
          Selecciona la rutina según tu actividad o nivel de entrenamiento.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RutinaCard />
        {/* Podés duplicar <RutinaCard /> con otros planes si querés */}
      </div>

      <ScrollSection />
    </div>
  );
}
