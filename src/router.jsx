import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RutinasPage from './pages/RutinasPage';
import CalculadoraPage from './pages/CalculadoraPage';
import EntrenadoresPage from './pages/EntrenadoresPage';
import ChatPage from './pages/ChatPage';
import EntrenamientosPage from './pages/EntrenamientosPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/rutinas" element={<RutinasPage />} />
      <Route path="/calculadora" element={<CalculadoraPage />} />
      <Route path="/entrenadores" element={<EntrenadoresPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/entrenamientos" element={<EntrenamientosPage />} />
    </Routes>
  );
}
