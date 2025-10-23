// 📁 src/components/ScrollSection.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import foto from "../assets/images/1.png";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    const content = contentRef.current;

    // Imagen: de izquierda a derecha (o viceversa cambiando valores)
    gsap.fromTo(
      img,
      { xPercent: -30 },            // arranca 20% a la izquierda
      {
        xPercent: 30,               // termina 20% a la derecha
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",      // cuando la sección entra al viewport
          end: "bottom top",        // hasta que sale
          scrub: true,              // ligado al scroll
        },
      }
    );

    // Contenido: movimiento contrario para mayor profundidad
    gsap.fromTo(
      content,
      { xPercent: 10, opacity: 0.9 },
      {
        xPercent: -10,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black text-white flex items-center justify-center"
    >
      {/* Imagen de fondo ampliada para permitir desplazamiento lateral visible */}
      <img
        ref={imgRef}
        src={foto}
        alt="Entrenamiento"
        className="absolute inset-0 h-full w-[130%] object-cover opacity-80 will-change-transform"
      />

      {/* Contenido superpuesto (se mueve en sentido contrario) */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 will-change-transform"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
          Desafía tus límites
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          Descubrí nuevas formas de mejorar tu rendimiento con cada entrenamiento.
        </p>
      </div>
    </section>
  );
}
