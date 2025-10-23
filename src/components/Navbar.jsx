import logo from "../assets/images/logo.png"; // o .png según corresponda

export default function Navbar() {
  return (
    <nav className="bg-yellow-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {/* Reemplazo del div por la imagen del logo */}
        <img
          src={logo}
          alt="Logo EntrenaApp"
          className="w-10 h-10 rounded-full bg-white/20 object-contain"
        />
        <h1 className="text-xl font-bold">EntrenaApp</h1>
      </div>

      <div className="space-x-4">
        <a href="/" className="hover:underline">Login</a>
        <a href="/rutinas" className="hover:underline">Rutinas</a>
        <a href="/calculadora" className="hover:underline">Calculadora</a>
        <a href="/entrenadores" className="hover:underline">Entrenadores</a>
        <a href="/chat" className="hover:underline">Chat</a>
        <a href="/entrenamientos" className="hover:underline">Entrenamientos</a>
      </div>
    </nav>
  );
}
