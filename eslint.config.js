export default [
  {
    files: ['src/**/*.js'], // или другие шаблоны
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        // добавьте любые глобальные переменные по необходимости
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      // ваши правила
    },
  },
];