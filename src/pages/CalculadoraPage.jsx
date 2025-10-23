import { useState } from "react";

export default function CalculadoraPage() {
  const [time, setTime] = useState(""); // formato MM:SS
  const [resultados, setResultados] = useState(null);
  const [error, setError] = useState("");

  const handleCalcular = () => {
    setError("");
    setResultados(null);

    // Validación de formato
    const regex = /^\d{1,2}:\d{2}$/;
    if (!regex.test(time)) {
      setError("Formato inválido. Usa MM:SS (por ejemplo 4:30).");
      return;
    }

    const [minutos, segundos] = time.split(":").map(Number);
    if (segundos >= 60) {
      setError("Los segundos deben ser menores que 60.");
      return;
    }

    const totalSegundos = minutos * 60 + segundos;

    if (totalSegundos < 180 || totalSegundos > 600) {
      setError("El ritmo debe estar entre 3:00 y 10:00 min/km.");
      return;
    }

    const baseSpeed = 3600 / totalSegundos; // km/h

    const zonas = {
      "Zona 1 (Regenerativo) 50–60%": [0.50, 0.60],
      "Zona 2 (Umbral Aeróbico) 65–70%": [0.65, 0.70],
      "Zona 3 (Umbral Anaeróbico) 75–85%": [0.75, 0.85],
      "Zona 4 (Vo2 Max) 90–100%": [0.90, 1.00],
      "Zona 5 (Tolerancia Láctica) 105–115%": [1.05, 1.15],
    };

    const resultadosTemp = {};

    for (const [zona, [minPerc, maxPerc]] of Object.entries(zonas)) {
      const minSpeed = baseSpeed * minPerc;
      const maxSpeed = baseSpeed * maxPerc;

      const minPace = 60 / maxSpeed; // min/km
      const maxPace = 60 / minSpeed;

      resultadosTemp[zona] = {
        min_pace: `${Math.floor(minPace)}:${Math.round((minPace * 60) % 60)
          .toString()
          .padStart(2, "0")}`,
        max_pace: `${Math.floor(maxPace)}:${Math.round((maxPace * 60) % 60)
          .toString()
          .padStart(2, "0")}`,
      };
    }

    setResultados(resultadosTemp);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Calculadora de Ritmos
      </h2>

      <input
        type="text"
        placeholder="Tiempo base (MM:SS)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 w-full mb-3 rounded text-center"
      />

      <button
        onClick={handleCalcular}
        className="bg-green-600 text-white px-4 py-2 rounded w-full mb-3"
      >
        Calcular Zonas
      </button>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {resultados && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-center">
            Resultados para ritmo base: {time} min/km
          </h3>
          <div className="space-y-2">
            {Object.entries(resultados).map(([zona, valores]) => (
              <div
                key={zona}
                className="border rounded-lg p-3 bg-gray-50 shadow-sm"
              >
                <p className="font-medium">{zona}</p>
                <p>
                  <span className="font-semibold">Ritmo: </span>
                  {valores.min_pace} – {valores.max_pace} min/km
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
