module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  extends: [
    'standard',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'eslint-config-prettier',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'testing-library',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    ' ': 'off',
    'import/order': [
      'error',

      {
        'newlines-between': 'always',
        groups: [
          ['builtin'],
          ['external'],
          ['internal', 'parent', 'sibling', 'index'],
          ['type'],
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
          },
          {
            pattern: '{.,..}/**/*.css',
            group: 'type',
            position: 'after',
          },
        ],
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
