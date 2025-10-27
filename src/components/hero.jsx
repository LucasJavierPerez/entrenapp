import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "../assets/images/2.png";

const stats = [
  { value: "92%", label: "Planes completados" },
  { value: "+48%", label: "Compromiso del equipo" },
  { value: "12K", label: "Sesiones trackeadas" },
  { value: "24/7", label: "Coaching conectado" },
];

export default function Hero() {
  const heroRef = useRef(null);



useEffect(() => {
  const el = heroRef.current;
  if (!el) return;

  // respeta “reduce motion”
  const prefersReduced =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Animación de entrada (igual que antes)
  let timeline = null;
  if (!prefersReduced) {
    timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .fromTo(
        el.querySelector(".hero-text"),
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.1 }
      )
      .fromTo(
        el.querySelector(".hero-card"),
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        "-=0.6"
      );
  }

  // Efecto parallax con el mouse
  const card = el.querySelector(".hero-card");
  const text = el.querySelector(".hero-text");
  const blobLeft = el.querySelector(".blob-left");
  const blobRight = el.querySelector(".blob-right");

  const onMove = (e) => {
    if (prefersReduced) return;
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w - 0.5) * 2; // -1..1
    const y = (e.clientY / h - 0.5) * 2; // -1..1

    if (card) {
      gsap.to(card, {
        x: x * 10,
        y: y * 10,
        rotateX: y * 6,
        rotateY: -x * 6,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power2.out",
      });
    }
    if (text) {
      gsap.to(text, { x: x * -5, y: y * -5, duration: 0.5, ease: "power2.out" });
    }
    if (blobLeft) {
      gsap.to(blobLeft, { x: x * -12, y: y * -8, duration: 0.6, ease: "power2.out" });
    }
    if (blobRight) {
      gsap.to(blobRight, { x: x * 12, y: y * 10, duration: 0.6, ease: "power2.out" });
    }
  };

  const onLeave = () => {
    if (prefersReduced) return;
    gsap.to([card, text, blobLeft, blobRight].filter(Boolean), {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseleave", onLeave);

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseleave", onLeave);
    if (timeline) timeline.kill();
  };
}, []);


  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-slate-950 pb-16 pt-24 text-white sm:pb-24 sm:pt-28"
    >
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-[-280px] h-[560px] w-[560px] rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute -right-16 top-[180px] h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1.05fr_1fr] md:items-center">
        <div className="hero-text flex flex-col gap-8 text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-medium text-slate-100">
            Plataforma integral de entrenamiento
          </span>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Diseña experiencias de entrenamiento que tus atletas aman.
            </h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              Gestione planes personalizados, seguimiento en tiempo real y comunicación fluida en un solo lugar. EntrenaApp te ayuda a coordinar equipos de alto rendimiento con la precisión de un staff profesional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#login"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Comenzar gratis
            </a>
            <a
              href="#recursos"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Ver recorrido del producto
            </a>
          </div>

          <dl className="grid w-full gap-5 text-left sm:grid-cols-2">
            {stats.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs uppercase tracking-wide text-slate-200/80">
                  {label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-card relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400/30 via-cyan-300/30 to-indigo-500/40 blur-3xl" />
          <div className="relative h-full rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_25px_70px_rgba(2,6,23,0.35)]">
            <div className="flex items-center justify-between text-sm text-slate-200/80">
              <span className="font-medium">Dashboard del equipo</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Tiempo real</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
              <img
                src={heroBg}
                alt="Panel de control"
                className="h-60 w-full object-cover object-center opacity-90"
              />
            </div>

            <div className="mt-6 grid gap-4 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Objetivo semanal
                  </p>
                  <p className="text-base font-semibold text-white">Volumen +8%</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                  En progreso
                </span>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Índice de fatiga
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">3.2</p>
                  <p className="text-xs text-white/60">Seguro para la próxima sesión</p>
                </div>
                <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Tiempo en zona
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">78%</p>
                  <p className="text-xs text-white/60">Meta superada esta semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
