import React from "react";
import Hero from "../components/hero";
import ScrollSection from "../components/scrollsections";
import TresDisciplinasZoomAnimado from "../components/TresDisciplinasZoomAnimado";
import img1 from "../assets/images/entrenador.png";
import img2 from "../assets/images/dashboard.png";
import img3 from "../assets/images/1.png";
import ig from "../assets/images/ig.png";


const resources = [
  {
    image: img1,
    tag: "ENTRENADORES",
    title: "Cómo estructurar bloques híbridos de fuerza y resistencia",
    author: "Equipo EntrenaApp",
  },
  {
    image: img2,
    tag: "DATA & BI",
    title: "Métricas clave para anticipar fatiga y evitar lesiones",
    author: "Dra. Valentina Pérez",
  },
  {
    image: img3,
    tag: "COACHCAST",
    title: "Integración entre staff remoto y presencial en tiempo real",
    author: "Host: Nicolás Duarte",
  },

];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <ScrollSection />
      <TresDisciplinasZoomAnimado />

      <section
        id="login"
        className="relative -mt-6 pb-24 sm:-mt-12 sm:pb-28"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white" />
        <div className="absolute inset-y-10 right-[10%] hidden h-64 w-64 rounded-full bg-sky-200/50 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              Portal para Alumnos
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Inicia sesión y sincroniza con tu Entrenador.
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                Accede al panel donde conviven planes, métricas y comunicación del equipo. Invita a tus amigos, comparte rutinas y sigue tu progreso sin fricción.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Invita ilimitados entrenadores y atletas sin costos ocultos.",
                "Integra wearables y apps de entrenamiento populares.",
                "Automatiza recordatorios, hitos y reportes semanales.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-900" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400/20 via-blue-400/10 to-indigo-500/20 blur-2xl" />
            <form className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_50px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-semibold text-slate-900">
                Login / Registro
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Ingresa con tu correo institucional o solicita acceso a la demo.
              </p>

              <label className="mt-6 block text-sm font-medium text-slate-700">
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  placeholder="nombre@tuclub.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-slate-900 focus:outline-none focus:ring-0"
                />
              </label>

              <label className="mt-4 block text-sm font-medium text-slate-700">
                Contraseña
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-slate-900 focus:outline-none focus:ring-0"
                />
              </label>

              <button
                type="submit"
                className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Ingresar
              </button>

              <p className="mt-4 text-center text-sm text-slate-500">
                ¿No tienes cuenta? <a href="#" className="font-semibold text-slate-900">Solicita acceso</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl space-y-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                Comunidad EntrenaApp
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Historias, ideas y frameworks para equipos de alto rendimiento.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Explorar recursos
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ArticleCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
         <div className="bg-slate-900 w-40 m-auto rounded-2xl p-3 transition-all duration-300 hover:bg-slate-800 hover:border-2 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/25">
  <a href="https://www.instagram.com/horadeentrenapp" target="_blank" rel="noopener noreferrer">
    <img src={ig} alt="Instagram" className="transition duration-300 hover:scale-110" />
  </a>
</div>
      </section>
    </div>
  );
}

function ArticleCard({ image, tag, title, author }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          {tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 text-white/80">
        <h3 className="text-lg font-semibold text-white transition group-hover:text-sky-200">
          {title}
        </h3>
        <p className="text-sm">{author}</p>
      </div>
    </article>
  );
}
