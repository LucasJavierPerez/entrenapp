import ScrollSection from "../components/scrollsections";

export default function RutinasPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Rutinas Personalizadas</h2>
      <p className="text-gray-600 mb-6">
        Selecciona la rutina según tu actividad o nivel de entrenamiento.
      </p>
      <ScrollSection />
    </div>
  );
}
