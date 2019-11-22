module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "get-off-my-lawn",
  ],
  plugins: ["import"],
  globals: {
    tw: true,
  },
  rules: {
    // Disable typescript conflicts
    "@typescript-eslint/explicit-function-return-type": 0,

    // Disable react conflicts
    "react/jsx-filename-extension": [0, { extensions: [".tsx"] }],

    // Disable sort extension conflicts
    "import/no-useless-path-segments": 0,
    "import/order": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
