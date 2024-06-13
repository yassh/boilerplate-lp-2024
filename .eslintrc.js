module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "react/button-has-type": "error",
    "react-hooks/exhaustive-deps": "error",
    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-custom-classname": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
  },
}
