import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="min-h-screen">
        <AppRouter />
      </main>
    </div>
  );
}
