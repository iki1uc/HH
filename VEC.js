export function PyramidMatrix128() {
  const matrix = [];

  const blocks = [
    { r: 8, c: 4 },
    { r: 4, c: 8 },
    { r: 16, c: 2 },
    { r: 2, c: 16 }
  ];

  blocks.forEach(block => {
    const side = [];
    for (let i = 0; i < block.r; i++) {
      const row = Array(block.c).fill(1);
      side.push(row);
    }
    matrix.push(side);
  });

  return matrix;
}
