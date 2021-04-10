module.exports = {
  root: true,
  extends: ["@react-native-community"],
  plugins: ["react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "semi": "off",
    "quotes": ["off", "double"],
    "comma-dangle": ["error", "never"],
    "prettier/prettier": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0
  }
};
