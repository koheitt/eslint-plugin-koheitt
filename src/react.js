import react from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config([
  {
    name: "React",
    files: ["**/*.{jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"],
      {
        plugins: { "react-hooks": reactHooks },
        rules: reactHooks.configs.recommended.rules,
      },
      reactCompiler.configs.recommended,
    ],
  },
]);
