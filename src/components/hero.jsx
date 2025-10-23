// 📁 src/components/Hero.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroBg from "../assets/images/2.png";
import atleta from "../assets/images/logo.png";
import Button1 from "./button1";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    gsap.fromTo(
      el.querySelector(".hero-text"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src={heroBg}
        alt="Fondo hero"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Capa de contenido */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 hero-text">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Potencia tu rendimiento
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Entrená mejor, medí tu progreso y conecta con tu equipo.
        </p>
        <Button1 /> {/* 👉 Aquí tu botón importado */}
      </div>

      {/* Imagen del atleta (decorativa) */}
      <img
        src={atleta}
        alt="Atleta"
        className="absolute bottom-0 right-4 w-1/3 max-w-[400px] opacity-80 animate-float"
      />
    </section>
  );
}
