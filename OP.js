export function TMP_UP(side, config = {}) {
  const base = side.rows * side.cols;

  const alpha = config.alpha ?? 1.0;   // Verstärkung
  const beta  = config.beta  ?? 0.0;   // Offset
  const gamma = config.gamma ?? 1.0;   // Orbit-Kopplung
  const delta = config.delta ?? 0.0;   // Dynamische Driftkorrektur

  return (base * alpha + beta) * gamma + delta;
}
