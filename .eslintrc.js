module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    "airbnb-base/legacy",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      // enable additional rules
      // "linebreak-style": ["error", "unix"],
      // "quotes": ["error", "single"],
      // "semi": ["error", "always"],

      // // override default options for rules from base configurations
      // "comma-dangle": ["error", "always"],
      // "no-cond-assign": ["error", "always"],

      // // disable rules from base configurations
      // "no-console": ["error"],
  },
};