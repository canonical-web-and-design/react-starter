module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
