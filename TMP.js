export function TMP(side) {
  const base = side.rows * side.cols;
  const alpha = 1.0;
  const beta = 0;

  return base * alpha + beta;
}
