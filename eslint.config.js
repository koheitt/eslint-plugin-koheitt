import globals from "globals";

import my from "./index.js";

export default [
  {
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
  },
  ...my.configs.recommended,
  ...my.configs.recommendedReact,
];
