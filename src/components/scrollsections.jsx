const features = [
  {
    title: "Planificación adaptativa",
    description:
      "Diseña microciclos dinámicos con cargas que se ajustan según la disponibilidad y respuesta de cada atleta.",
    items: ["Plantillas inteligentes", "Ajustes por IA en tiempo real"],
  },
  {
    title: "Coaching conectado",
    description:
      "Centraliza feedback, chat y videoanálisis para mantener al equipo alineado sin depender de múltiples herramientas.",
    items: ["Mensajería contextual", "Alertas de progreso"],
  },
  {
    title: "Insights accionables",
    description:
      "Transforma métricas en decisiones claras con tableros que destacan riesgos y oportunidades de rendimiento.",
    items: ["Indicadores de fatiga", "Pronóstico de metas"],
  },
];

export default function ScrollSection() {
  return (
    <section
      id="recursos"
      className="relative overflow-hidden bg-white py-24 text-slate-900 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/20" />
      <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Cómo trabaja tu staff
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Procesos claros para planificar, ejecutar y medir cada bloque de entrenamiento.
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Unifica calendarios, comunicación y datos en una experiencia diseñada para entrenadores modernos y equipos exigentes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, items }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-transparent to-indigo-50 opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{description}</p>
                <ul className="space-y-2 text-sm font-medium text-slate-700">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
