module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ],
  env: {
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },

};
