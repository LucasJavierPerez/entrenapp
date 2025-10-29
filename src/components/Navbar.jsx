import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navLinks = [
  { label: "Inicio", to: "/" },
  { label: "Rutinas", to: "/rutinas" },
  { label: "Calculadora", to: "/calculadora" },
  { label: "Entrenadores", to: "/entrenadores" },
  { label: "Chat", to: "/chat" },
  { label: "Entrenamientos", to: "/entrenamientos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cerrar al navegar
  useEffect(() => setOpen(false), [location.pathname]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Cerrar si el viewport pasa a >= md (evita quedarse abierto al rotar o redimensionar)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => mq.matches && setOpen(false);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
            <img src={logo} alt="EntrenaApp" className="h-7 w-7 object-contain" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">EntrenaApp</span>
        </NavLink>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-slate-900 ${isActive ? "text-slate-900" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Acciones + botón mobile */}
        <div className="flex items-center gap-3">
        
          
          <NavLink
            to="/"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700"
            onClick={closeMenu}
          >
            Ingresar
          </NavLink>

          <button
            type="button"
            className="ml-1 inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: render solo cuando open === true */}
      {open && (
        <div className="md:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/20 opacity-100 transition-opacity" onClick={closeMenu} />
          {/* Panel */}
          <div className="fixed inset-x-0 top-16 z-50 origin-top rounded-b-2xl border-b border-slate-200 bg-white shadow-lg">
            <nav className="flex flex-col gap-1 p-4 text-base font-medium text-slate-700">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:text-slate-900 ${
                      isActive ? "text-slate-900" : ""
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
