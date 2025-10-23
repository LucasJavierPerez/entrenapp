import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router";
import ScrollSection from "./components/scrollsections";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ✅ Navbar aparece en todas las páginas */}
      <Navbar />

      {/* ✅ Aquí renderizamos las rutas */}
      <main className="p-6">
        <AppRouter />
      </main>

      {/* ✅ Efecto animado al final de la página */}
      
    </div>
  );
}

