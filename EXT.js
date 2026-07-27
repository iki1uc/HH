export const HHOrbit = {
  S1: { rows: 8, cols: 4, weight: 1.0 },
  S2: { rows: 4, cols: 8, weight: 1.0 },
  S3: { rows: 16, cols: 2, weight: 1.0 },
  S4: { rows: 2, cols: 16, weight: 1.0 },

  mode: "HH-DEFAULT",

  map() {
    return {
      O1: this.S1,
      O2: this.S2,
      O3: this.S3,
      O4: this.S4
    };
  }
};
