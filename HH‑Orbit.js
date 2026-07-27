export const HHPyramid128 = {
  sides: 4,
  unitsPerSide: 32,
  total: 128,

  decomposition: {
    S1: { rows: 8, cols: 4 },
    S2: { rows: 4, cols: 8 },
    S3: { rows: 16, cols: 2 },
    S4: { rows: 2, cols: 16 }
  },

  mapToOrbit() {
    return {
      O1: this.decomposition.S1,
      O2: this.decomposition.S2,
      O3: this.decomposition.S3,
      O4: this.decomposition.S4
    };
  }
};
