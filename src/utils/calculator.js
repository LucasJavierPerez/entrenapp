export function calcularRitmo(distancia, tiempo) {
  const d = parseFloat(distancia);
  const t = parseFloat(tiempo);
  if (!Number.isFinite(d) || !Number.isFinite(t) || d <= 0 || t <= 0) return null;
  return (t / d).toFixed(2);
}