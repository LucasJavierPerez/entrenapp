import { useEffect, useRef } from "react";
import gsap from "gsap";
// este compnente usa la misma logica que el hero pero separando la logica para poder ser reutilizada
const CardAnimada = ({ 
  children, 
  className = "",
  enableParallax = true,
  enable3D = true,
  intensity = 10 
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Animación de entrada
    if (!prefersReduced) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
      );
    }

    // Efecto parallax con el mouse
    if (!enableParallax || prefersReduced) return;

    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 2;
      const y = (e.clientY / h - 0.5) * 2;

      gsap.to(el, {
        x: x * intensity,
        y: y * intensity,
        rotateX: enable3D ? y * (intensity * 0.6) : 0,
        rotateY: enable3D ? -x * (intensity * 0.6) : 0,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
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
    };
  }, [enableParallax, enable3D, intensity]);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
    >
      {/* Efecto de gradiente de fondo (opcional) */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400/30 via-cyan-300/30 to-indigo-500/40 blur-3xl" />
      
      {/* Contenido de la card */}
      <div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_25px_70px_rgba(2,6,23,0.35)]">
        {children}
      </div>
    </div>
  );
};

export default CardAnimada;