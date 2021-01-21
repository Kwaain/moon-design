module.exports = {
  extends: ['@heathmont/eslint-config-sportsbet'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    //
    // @TODO Implementation
    //
    'import/first': 'off', // Unnecessarily compresses JSX comment
    'import/no-cycle': 'off',
    'import/export': 'off', // We have both default export as well as named ones for now
    'no-unused-expressions': 'off', // Investigate `jsx;` alternative
    'no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    "@typescript-eslint/no-use-before-define": 'off',
    // Prevents a bug https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
  },
  overrides: [
    {
      /** Disable specific rules for SVGR config */
      files: ['packages/icons/src/config/*'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
