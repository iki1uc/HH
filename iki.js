export const iki1uc_KERNEL = {
  tick() {
    const orbit81 = ORBIT_81_TMP.get();
    const orbit9 = ORBIT_9x9.matrix;
    const respo = TMP_RESPO.compute(orbit81[0]);

    return {
      orbit81,
      orbit9,
      respo
    };
  }
};
