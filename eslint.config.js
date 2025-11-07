export default [
    {
  // В flat config заменяет env и parserOptions
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      // Замените или добавьте глобальные переменные, необходимые для вашего проекта
      // Например:
      window: 'readonly',
      document: 'readonly',
    }
  },

  // Правила ESLint
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }]
  },

  // Паттерны, игнорируемые ESLint
  ignores: ['dist/', 'coverage/', 'docs/']
},
{
    files: ['**/*/*.test.js'],
    plugins: ['jest'],
    rules: {
      'jest/prefer-expect-assertions': 'off',
    },
  },
];