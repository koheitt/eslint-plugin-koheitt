import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export const jsBeyondRecommended = {
  "array-callback-return": "error",
  "camelcase": "error",
  "curly": "error",
  "default-case-last": "error",
  "dot-notation": "error",
  "eqeqeq": "error",
  "no-alert": "error",
  "no-await-in-loop": "error",
  "no-constructor-return": "error",
  "no-eval": "error",
  "no-fallthrough": ["error", { reportUnusedFallthroughComment: true }],
  "no-inner-declarations": "error",
  "no-labels": "error",
  "no-new-wrappers": "error",
  "no-param-reassign": "error",
  "no-promise-executor-return": "error",
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-template-curly-in-string": "error",
  "no-throw-literal": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable-loop": "error",
  "no-useless-assignment": "error",
  "no-var": "error",
  "object-shorthand": "error",
  "prefer-const": "error",
  "prefer-object-has-own": "error",
};

const tsBeyondRecommended = {
  "@typescript-eslint/consistent-type-imports": "error",
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      "args": "all",
      "argsIgnorePattern": "^_",
      "caughtErrors": "all",
      "caughtErrorsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "ignoreRestSiblings": true,
    },
  ],
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",
};

const stylisticBeyondRecommended = {
  "@stylistic/function-call-spacing": "error",
  "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
  "@stylistic/indent": ["error", 2, { SwitchCase: 0 }],
  "@stylistic/jsx-one-expression-per-line": "off",
  "@stylistic/no-extra-semi": "error",
  "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
  "@stylistic/quote-props": ["error", "as-needed", { unnecessary: false }],
  "@stylistic/switch-colon-spacing": "error",
  "@stylistic/yield-star-spacing": ["error", "after"],
};

export function getRecommendedWithGlobals(globals) {
  return [
    {
      name: "Target JS and TS",
      files: ["**/*.{js,jsx,ts,tsx}"],
    },
    {
      name: "JS recommended + beyond",
      languageOptions: {
        globals,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...jsBeyondRecommended,
      },
    },
    ...tseslint.configs.recommended,
    {
      name: "TS beyond recommended",
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
      rules: tsBeyondRecommended,
    },
    {
      name: "Stylistic recommended",
      ...stylistic.configs.customize({
        arrowParens: true,
        braceStyle: "1tbs",
        semi: true,
      }),
    },
    {
      name: "Stylistic beyond recommended",
      rules: stylisticBeyondRecommended,
    },
  ];
}
