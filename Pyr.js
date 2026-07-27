export const PyramidTensor128 = {
  compute(mesh) {
    const T = [];

    for (let i = 0; i < mesh.vertices.length; i += 3) {
      const x = mesh.vertices[i];
      const y = mesh.vertices[i + 1];
      const z = mesh.vertices[i + 2];

      T.push([
        x * x,
        y * y,
        z * z,
        x * y,
        y * z,
        z * x
      ]);
    }

    return T;
  }
};
