import globals from "globals";
import pluginJs from "@eslint/js";


export default {
    languageOptions: {
        globals: globals.browser,
    },
    ignores: [
        "assets/js/bootstrap.bundle.min.js",
        "assets/js/bootstrap.bundle.min.js.map",
        "_site/**/*",
        "purgecss.config.js"
    ],
    ...pluginJs.configs.recommended,
};