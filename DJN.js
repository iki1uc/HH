import { TMP_UP } from "./TMP.js";
import { HHOrbit } from "./HH-Orbit.js";

export const OPtA_DYN = {
  compute(config = {}) {
    const orbit = HHOrbit.map();

    const C1 = TMP_UP(orbit.O1, config.O1);
    const C2 = TMP_UP(orbit.O2, config.O2);
    const C3 = TMP_UP(orbit.O3, config.O3);
    const C4 = TMP_UP(orbit.O4, config.O4);

    const OPtA = C1 + C2 + C3 + C4;

    return { C1, C2, C3, C4, OPtA };
  }
};
