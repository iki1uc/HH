const HVGNH = {
    HH: {
        orbit: hh_orbit,
        whirl: hh_whirl,
        universe: hh_universe,
        pipeline: hh_pipeline,
        all: hh_all
    },

    VEC: {
        raw: VEC_raw,
        core: VEC,
        stages: [S1, S2, S3, S4]
    },

    GEO: {
        id: GEOID,
        universe: GEOUniverse
    },

    NC: {
        KI: NC_KI,
        AI: NC_AI,
        SCALE: NC_SCALE,
        linear: NC_linear,
        parallel: NC_parallel,
        whirl: NC_whirl,
        dynamic: NC_dynamic,
        hub6D: HUB_6D,
        all: NC_HUB_All
    },

    TMP: {
        BEN: BEN_tmp,
        C: C_tmp,
        DA: DA_tmp,
        NE: NE_tmp,
        X: X_tmp,
        Z: Z_tmp
    },

    RUN: {
        start: start_vector,
        scan: scan_language,
        load: load_room,
        verify: verify_html
    },

    HYPER: {
        core: HYPER_core,
        ext: EXT,
        djn: DJN,
        pyr: Pyr
    }
};
