import React, { useState } from "react";
import Hero from "../components/hero";
import ScrollSection from "../components/scrollsections";
import TresDisciplinasZoomAnimado from "../components/TresDisciplinasZoomAnimado";

import img1 from "../assets/images/entrenador.png";
import img2 from "../assets/images/dashboard.png";
import img3 from "../assets/images/1.png";
import ig from "../assets/images/ig.png";

const resources = [
  { image: img1, tag: "ENTRENADORES", title: "Cómo estructurar bloques híbridos de fuerza y resistencia", author: "Equipo EntrenaApp" },
  { image: img2, tag: "DATA & BI", title: "Métricas clave para anticipar fatiga y evitar lesiones", author: "Dra. Valentina Pérez" },
  { image: img3, tag: "COACHCAST", title: "Integración entre staff remoto y presencial en tiempo real", author: "Host: Nicolás Duarte" },
];

export default function LoginPage() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <ScrollSection />
      <TresDisciplinasZoomAnimado />

      {/* ====== LOGIN / REGISTRO ====== */}
      <section id="login" className="relative -mt-6 pb-24 sm:-mt-12 sm:pb-28">
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
              <h3 className="text-xl font-semibold text-slate-900">Login / Registro</h3>
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

              <button type="submit" className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Ingresar
              </button>

              <p className="mt-4 text-center text-sm text-slate-500">
                ¿No tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setShowRegister(true)}
                  className="font-semibold text-slate-900 underline underline-offset-2 hover:text-slate-700"
                >
                  Registrarse
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ====== RECURSOS ====== */}
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

      {/* ====== MODAL DE REGISTRO (con Plan y Pago) ====== */}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
}

function ArticleCard({ image, tag, title, author }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
          {tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 text-white/80">
        <h3 className="text-lg font-semibold text-white transition group-hover:text-sky-200">{title}</h3>
        <p className="text-sm">{author}</p>
      </div>
    </article>
  );
}

/* ====== Modal de Registro con Plan y Pago  ====== */
function RegisterModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    terms: false,
    plan: "single", // "single" | "multi"
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const PRICES = { single: 1000, multi: 2000 };
  const currency = (v) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(v);
  const price = PRICES[form.plan];

  const onInput = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const formatCard = (v) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ").trim();

  const validate = () => {
    if (!form.name.trim()) return "Ingresá tu nombre";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Email inválido";
    if (!form.password || form.password.length < 6) return "La contraseña debe tener al menos 6 caracteres";
    if (form.password !== form.password2) return "Las contraseñas no coinciden";
    if (!form.terms) return "Debes aceptar los términos";
    if (!form.cardNumber || form.cardNumber.replace(/\s+/g, "").length < 13) return "Número de tarjeta inválido";
    if (!/^\d{2}\/\d{2}$/.test(form.cardExpiry)) return "Vencimiento inválido (MM/AA)";
    if (!/^\d{3,4}$/.test(form.cardCvv)) return "CVV inválido";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      alert(err);
      return;
    }
    // TODO: enviar al backend (plan & pago) y crear usuario
    console.log("Registro:", { ...form, price });
    alert(`¡Cuenta creada! Plan: ${form.plan === "single" ? "Un deporte" : "Multideporte"} - Total: ${currency(price)}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <h3 className="text-lg font-semibold text-slate-900">Crear cuenta</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 text-2xl leading-none" aria-label="Cerrar">×</button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 p-5 lg:grid-cols-2">
          {/* Columna izquierda: datos */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Nombre y apellido
              <input
                type="text" name="name" value={form.name} onChange={onInput}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                placeholder="Tu nombre" required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email" name="email" value={form.email} onChange={onInput}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                placeholder="nombre@correo.com" required
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Contraseña
                <input
                  type="password" name="password" value={form.password} onChange={onInput}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                  placeholder="••••••••" required
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Repetir contraseña
                <input
                  type="password" name="password2" value={form.password2} onChange={onInput}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                  placeholder="••••••••" required
                />
              </label>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox" name="terms" checked={form.terms} onChange={onInput}
                className="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
              />
              Acepto términos y condiciones
            </label>
          </div>

          {/* Columna derecha: plan + pago */}
          <div className="space-y-4">
            {/* PLAN */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="px-1 text-sm font-semibold text-slate-700">Plan</legend>

              <label className={`mt-2 flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition
                                 ${form.plan === "single" ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"}`}>
                <input type="radio" name="plan" value="single" checked={form.plan === "single"} onChange={onInput} className="mt-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Plan un deporte</p>
                  <p className="text-xs text-slate-600">Ideal si entrenás una sola disciplina</p>
                </div>
                <span className="ml-auto text-sm font-semibold text-slate-900">{currency(1000)}</span>
              </label>

              <label className={`mt-2 flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition
                                 ${form.plan === "multi" ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"}`}>
                <input type="radio" name="plan" value="multi" checked={form.plan === "multi"} onChange={onInput} className="mt-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Plan multideporte</p>
                  <p className="text-xs text-slate-600">Combina ciclismo, running, natación, etc.</p>
                </div>
                <span className="ml-auto text-sm font-semibold text-slate-900">{currency(2000)}</span>
              </label>

              <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                <p className="text-sm text-slate-700">Total</p>
                <p className="text-base font-semibold text-slate-900">{currency(price)}</p>
              </div>
            </fieldset>

            {/* PAGO (mock) */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="px-1 text-sm font-semibold text-slate-700">Pago con tarjeta</legend>

              <label className="block text-sm font-medium text-slate-700">
                Número de tarjeta
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={(e) => onInput({ target: { name: "cardNumber", value: formatCard(e.target.value) } })}
                  inputMode="numeric"
                  placeholder="1234 5678 9012 3456"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </label>

              <div className="mt-3 grid gap-3 grid-cols-[1fr_1fr]">
                <label className="block text-sm font-medium text-slate-700">
                  Vencimiento (MM/AA)
                  <input
                    name="cardExpiry"
                    value={form.cardExpiry}
                    onChange={onInput}
                    placeholder="08/27"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  CVV
                  <input
                    name="cardCvv"
                    value={form.cardCvv}
                    onChange={onInput}
                    inputMode="numeric"
                    placeholder="123"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                  />
                </label>
              </div>

              <label className="mt-3 block text-sm font-medium text-slate-700">
                Titular (como figura en la tarjeta)
                <input
                  name="cardName"
                  value={form.cardName}
                  onChange={onInput}
                  placeholder="Nombre Apellido"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none"
                />
              </label>
            </fieldset>

            <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Pagar {currency(price)} y crear cuenta
            </button>

            <p className="text-center text-xs text-slate-500 -mt-1">
              Cobro simulado para demo. Integraremos pasarela real (Mercado Pago) luego.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
