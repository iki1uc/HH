import { HHPyramid128 } from "./HH-Orbit.js";

export const HYPERcore = {
  load() {
    const orbitMap = HHPyramid128.mapToOrbit();
    return this.computeOPtA(orbitMap);
  },

  computeOPtA(orbitMap) {
    const TMP = (side) => side.rows * side.cols; // dein TMP-Operator

    const core = {
      C1: TMP(orbitMap.O1),
      C2: TMP(orbitMap.O2),
      C3: TMP(orbitMap.O3),
      C4: TMP(orbitMap.O4)
    };

    core.OPtA = core.C1 + core.C2 + core.C3 + core.C4;

    return core;
  }
};
