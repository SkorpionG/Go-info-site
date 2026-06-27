module.exports = [
  {
    languageOptions: {
      globals: {
        document: 'readonly',
        window: 'readonly',
        customElements: 'readonly',
        HTMLElement: 'readonly',
        google: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
