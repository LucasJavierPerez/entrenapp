import { NavLink } from "react-router-dom";
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
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
            <img
              src={logo}
              alt="EntrenaApp"
              className="h-7 w-7 object-contain"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            EntrenaApp
          </span>
        </NavLink>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-slate-900 ${
                  isActive ? "text-slate-900" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#recursos"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:inline-flex"
          >
            Recursos
          </a>
          <NavLink
            to="/"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700"
          >
            Ingresar
          </NavLink>
        </div>
      </div>
    </header>
  );
}
