module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/typedef": [
      "error", {
        arrayDestructuring: true,
        memberVariableDeclaration: true,
        arrowParameter: true,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: true
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error", {
        allowExpressions: true,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowFunctionsWithoutTypeParameters: false,

      }
    ],
    "semi": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off"
  },
}
