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
  "Zona 1 (Regenerativo) 50–60%": [0.5, 0.6],
  "Zona 2 (Umbral Aeróbico) 65–70%": [0.65, 0.7],
  "Zona 3 (Umbral Anaeróbico) 75–85%": [0.75, 0.85],
  "Zona 4 (Vo2 Max) 90–100%": [0.9, 1.0],
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
// 🌌 Fondo con gradiente oscuro tipo dashboard deportivo
<div className="min-h-screen relative flex items-center justify-center p-6 text-white font-sans overflow-hidden">
  {/* 🌌 Fondo base */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#11173f] to-[#0c1030]"></div>
  
  {/* 🌌 Manchas grandes y muy visibles */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_20%,rgba(0,0,0,0.95)_0%,transparent_65%),radial-gradient(circle_600px_at_90%_80%,rgba(0,0,0,0.98)_0%,transparent_70%),radial-gradient(circle_400px_at_30%_70%,rgba(0,0,0,0.9)_0%,transparent_60%),radial-gradient(circle_450px_at_70%_30%,rgba(0,0,0,0.92)_0%,transparent_62%)] opacity-30"></div>
  
  

  {/* 🧮 Tarjeta principal translúcida con efecto vidrio */}
  <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/10">
    
    {/* 🏁 Título con tipografía moderna */}
    <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Calculadora de Ritmos
    </h2>
    <p className="text-gray-300 text-center mb-6">
      Descubre tus zonas de entrenamiento a partir de tu ritmo base.
    </p>

    {/* ⏱️ Input con borde luminoso */}
    <input
      type="text"
      placeholder="Tiempo base (MM:SS)"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="w-full text-center text-white bg-white/10 border border-white/20 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
    />

    {/* 🚀 Botón principal con gradiente animado */}
    <button
      onClick={handleCalcular}
      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
    >
      Calcular Zonas
    </button>

    {/* ⚠️ Mensaje de error con color destacado */}
    {error && <p className="text-red-400 text-center mt-3">{error}</p>}

    {/* 📊 Resultados en tarjetas pequeñas */}
    {resultados && (
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-cyan-300">
          Resultados para ritmo base: {time} min/km
        </h3>

        <div className="space-y-3">
          {Object.entries(resultados).map(([zona, valores]) => (
            // 🧩 Tarjeta individual de zona
            <div
              key={zona}
              className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-inner hover:bg-white/10 transition"
            >
              <p className="font-medium text-cyan-200">{zona}</p>
              <p className="text-gray-200">
                <span className="font-semibold text-white">Ritmo: </span>
                {valores.min_pace} – {valores.max_pace} min/km
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
</div>


);
}
