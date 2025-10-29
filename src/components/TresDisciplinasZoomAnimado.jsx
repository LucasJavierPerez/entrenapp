import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Tres tarjetas (Ciclismo, Running, Natación).
 * - Hover / foco / click: se abre overlay a ~80vh con transición animada.
 * - Mouse out: se cierra con animación. También cierra con Esc o click fuera.
 * - Accesible (teclado) y mobile-friendly (tap).
 * - Respeta reduce motion.
 *
 * Reemplaza las rutas de imagen por tus assets reales.
 */

const items = [
  {
    key: "bike",
    title: "Ciclismo",
    img: "src/assets/images/bici.png", // 🔁 reemplaza
    alt: "Persona pedaleando en bicicleta de ruta",
    details: ["Entrenamientos personalizados por semana", "Análisis de potencia avanzada", "Planes de recuperación activa"],
  },
  {
    key: "run",
    title: "Running",
    img: "src/assets/images/pista.png", // 🔁 reemplaza
    alt: "Persona corriendo en pista",
    details: ["Recomendaciones nutricionales", "Seguimiento de progreso semanal", "Planes de entrenamiento adaptativos"],
  },
  {
    key: "swim",
    title: "Natación",
    img: "src/assets/images/nado.png", // 🔁 reemplaza
    alt: "Persona nadando estilo crol",
    details: ["Objetivos personalizados", "Análisis de técnica con video", "Planes de entrenamiento por fases"],
  },
];

function ExpandedView({ item, onClose }) {
  const reduce = useReducedMotion();

  // Cerrar con Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Variants
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.9 },
    exit: { opacity: 0 },
  };

  const panel = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: reduce ? "tween" : "spring",
        stiffness: 180,
        damping: 20,
        duration: reduce ? 0.25 : undefined,
      },
    },
    exit: {
      opacity: 0,
      scale: reduce ? 1 : 0.95,
      transition: { duration: reduce ? 0.2 : 0.25 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60]"
      initial="hidden"
      animate="visible"
      exit="exit"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black"
        variants={backdrop}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.article
        className="relative mx-auto mt-8 w-[min(92vw,900px)] overflow-hidden rounded-3xl border border-white/15 bg-black/30 shadow-2xl backdrop-blur-sm"
        variants={panel}
        onMouseLeave={onClose}
      >
        <div className="relative">
          <motion.img
            src={item.img}
            alt={item.alt}
            initial={{ scale: reduce ? 1 : 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0.2 : 0.5, ease: "easeOut" }}
            className="h-[70vh] w-full object-cover object-center"
          />
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
            {item.title}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8">
          <div className="pointer-events-auto">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <ul className="mt-2 space-y-2 text-white/90">
              {item.details.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />
                  {d}
                </li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function Card({ item, onOpen }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-sky-400"
      tabIndex={0}
      aria-label={`${item.title}: más información`}
      onMouseEnter={() => onOpen(item)}
      onFocus={() => onOpen(item)}
      onClick={() => onOpen(item)}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={item.img}
          alt={item.alt}
          className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 motion-safe:transition-opacity motion-safe:duration-300 group-hover:opacity-100" />
      </div>
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow">
        {item.title}
      </span>
    </article>
  );
}

export default function TresDisciplinasZoomAnimado() {
  const [active, setActive] = useState(null);

  return (
    <section id="disciplinas" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Entrena en tus tres disciplinas
          </h2>
          <p className="mt-2 text-slate-600">Acerca el mouse, enfoca o toca para ver detalles con transición.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.key} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ExpandedView
            key={active.key}
            item={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Uso:
 * 1) npm i framer-motion
 * 2) Guarda como `TresDisciplinasZoomAnimado.jsx` e importa <TresDisciplinasZoomAnimado />.
 * 3) Reemplaza las imágenes.
 * 4) El overlay se cierra con mouse out del panel, Esc o click fuera.
 */
