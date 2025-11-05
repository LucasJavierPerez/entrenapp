import { useEffect, useMemo, useState } from "react";
import CardAnimada from "../components/CardAnime";
import logo from "../assets/images/logo.png";
import ig from "../assets/images/ig.png";

export default function UserDataForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    direccion: "",
    peso: "",
    altura: "",
    fotoPerfil: null,
  });
  const [errors, setErrors] = useState({});

  // Evitar scroll del body cuando abre el modal
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isModalOpen]);

  const previewURL = useMemo(
    () => (formData.fotoPerfil ? URL.createObjectURL(formData.fotoPerfil) : null),
    [formData.fotoPerfil]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // normalizo altura/peso a números positivos (texto igual se muestra)
    const cleaned =
      name === "peso" || name === "altura"
        ? value.replace(/[^\d.,]/g, "").replace(",", ".")
        : value;
    setFormData((p) => ({ ...p, [name]: cleaned }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFormData((p) => ({ ...p, fotoPerfil: file || null }));
  };

  const validate = () => {
    const next = {};
    if (!formData.direccion.trim()) next.direccion = "Ingresá tu dirección";
    if (!formData.peso || Number(formData.peso) <= 0) next.peso = "Peso inválido";
    if (!formData.altura || Number(formData.altura) <= 0) next.altura = "Altura inválida";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Datos enviados:", formData);
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 text-white font-sans overflow-hidden">
      {/* Fondo RutinaDark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#11173f] to-[#0c1030]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_10%_20%,rgba(0,0,0,0.95)_0%,transparent_65%),radial-gradient(circle_600px_at_90%_80%,rgba(0,0,0,0.98)_0%,transparent_70%),radial-gradient(circle_400px_at_30%_70%,rgba(0,0,0,0.9)_0%,transparent_60%),radial-gradient(circle_450px_at_70%_30%,rgba(0,0,0,0.92)_0%,transparent_62%)] opacity-30" />

      <div className="relative w-full max-w-5xl space-y-6">
        <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Perfil del Atleta
        </h1>

        {/* Grid: Preview a la izquierda / Acciones a la derecha (stack en mobile) */}
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* PREVIEW DEL PERFIL */}
          <ProfilePreview formData={formData} previewURL={previewURL} />

          {/* Acciones / Card con logo + botones */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_25px_60px_rgba(2,6,23,0.35)] p-6">
            <div className="max-w-md mx-auto">
              <CardAnimada enable3D intensity={8} className="max-w-md mx-auto">
                <div className="p-4 flex items-center justify-center">
                  <img src={logo} alt="EntrenaApp" className="h-24 w-auto drop-shadow" />
                </div>
              </CardAnimada>
            </div>

            {/* Acciones */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:from-cyan-300 hover:to-blue-400 transition"
              >
                Cargar tus datos
              </button>

              <a
                href="https://www.instagram.com/horadeentrenapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 transition"
              >
                <img src={ig} alt="Instagram" className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Modal de carga de datos */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          {/* Panel */}
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-[#0c1030]/90 text-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <h2 className="text-lg font-semibold">Cargar datos personales</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/70 hover:text-white text-2xl leading-none"
                aria-label="Cerrar modal"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {/* Dirección */}
              <Field label="Dirección" error={errors.direccion}>
                <input
                  type="text"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                  placeholder="Ingresa tu dirección"
                />
              </Field>

              {/* Peso / Altura */}
              <div className="grid grid-cols-2 gap-3">
                <Field label="Peso (kg)" error={errors.peso}>
                  <input
                    type="number"
                    name="peso"
                    value={formData.peso}
                    onChange={handleInputChange}
                    min="0"
                    step="0.1"
                    placeholder="70"
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                  />
                </Field>
                <Field label="Altura (cm)" error={errors.altura}>
                  <input
                    type="number"
                    name="altura"
                    value={formData.altura}
                    onChange={handleInputChange}
                    min="0"
                    placeholder="175"
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                  />
                </Field>
              </div>

              {/* Foto de perfil */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Foto de perfil
                </label>

                <label className="relative flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 p-3 hover:bg-white/10 transition">
                  <input
                    type="file"
                    name="fotoPerfil"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  />
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                    {previewURL ? (
                      <img src={previewURL} alt="Preview" className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-xs text-white/60">Sin foto</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm">Seleccionar imagen</p>
                    <p className="text-xs text-white/60 truncate">
                      {formData.fotoPerfil?.name || "PNG/JPG hasta 2MB"}
                    </p>
                  </div>
                </label>
              </div>

              {/* Enviar */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-900 hover:from-cyan-300 hover:to-blue-400 transition"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

/* =============== Preview del Perfil =============== */
function ProfilePreview({ formData, previewURL }) {
  // Cálculo de IMC (peso kg / (altura m)^2)
  const bmi = useMemo(() => {
    const peso = parseFloat(formData.peso);
    const alturaM = parseFloat(formData.altura) / 100;
    if (!peso || !alturaM) return null;
    const v = peso / (alturaM * alturaM);
    // redondeo a 1 decimal
    return Math.round(v * 10) / 10;
  }, [formData.peso, formData.altura]);



  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_25px_60px_rgba(2,6,23,0.35)] p-6">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/10">
          {previewURL ? (
            <img src={previewURL} alt="Avatar" className="h-full w-full object-cover" />
          ) : (
            <div className="grid h-full w-full place-content-center text-white/70">👤</div>
          )}
        </div>

        {/* Datos principales */}
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">Tu perfil</h3>
          <p className="text-sm text-white/70 truncate">
            {formData.direccion || "Dirección no especificada"}
          </p>
        </div>
      </div>

      {/* Métricas */}
      <dl className="mt-6 grid grid-cols-3 gap-3">
        <Metric label="Peso" value={formData.peso ? `${formData.peso} kg` : "—"} />
        <Metric label="Altura" value={formData.altura ? `${formData.altura} cm` : "—"} />
        <Metric
          label="IMC"
          value={bmi ? `${bmi}` : "—"}
        />
      </dl>

      {/* Chips de estado */}
      <div className="mt-5 flex flex-wrap gap-2">
        <Chip active={!!formData.direccion} label="Dirección" />
        <Chip active={!!formData.peso} label="Peso" />
        <Chip active={!!formData.altura} label="Altura" />
        <Chip active={!!previewURL} label="Foto cargada" />
      </div>

      {/* Ayuda */}
      <p className="mt-4 text-sm text-white/60">
        Este es un <strong>modelo de tu perfil</strong>. Se actualiza en vivo con los datos que completes.
      </p>
    </div>
  );
}

function Metric({ label, value, extra }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <dt className="text-xs uppercase tracking-wide text-white/60">{label}</dt>
      <dd className="mt-1 text-lg font-semibold">{value}</dd>
      {extra && <div className="mt-1">{extra}</div>}
    </div>
  );
}

function Chip({ label, active }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs
        ${active ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border-white/10 bg-white/5 text-white/70"}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-300" : "bg-white/40"}`} />
      {label}
    </span>
  );
}

/* Subcomponentes UI */
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/80 mb-1">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-amber-300">{error}</p>}
    </div>
  );
}
