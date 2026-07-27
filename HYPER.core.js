export const HYPER = {

    activate(hh) {
        return {
            HYPER: "ACTIVE",
            MODE: "HYPER-REAL",
            LEVEL: "6D",
            ORBIT: hh.orbit,
            VEC: hh.vec,
            STATE: "PARALLEL-SUN"
        };
    }
};
