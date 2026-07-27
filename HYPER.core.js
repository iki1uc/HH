import { HHOrbit } from "./HH-Orbit.js";
import { TMP } from "./TMP.js";

export const HYPERcore = {
  compute() {
    const orbit = HHOrbit.map();

    const core = {
      C1: TMP(orbit.O1),
      C2: TMP(orbit.O2),
      C3: TMP(orbit.O3),
      C4: TMP(orbit.O4)
    };

    core.OPtA = core.C1 + core.C2 + core.C3 + core.C4;

    return core;
  }
};
