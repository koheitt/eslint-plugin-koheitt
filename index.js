import globals from "globals";

import { getRecommendedWithGlobals } from "./src/jsts.js";
import react from "./src/react.js";

export default {
  configs: {
    recommendedInBrowser: getRecommendedWithGlobals(globals.browser),
    recommendedInNode: getRecommendedWithGlobals(globals.nodeBuiltin),
    recommendedInReact: react,
  },
};
