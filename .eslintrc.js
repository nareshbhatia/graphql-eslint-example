module.exports = {
  root: true,
  overrides: [
    {
      files: ['service.ts'],
      processor: '@graphql-eslint/graphql',
    },
    {
      files: ['*.graphql'],
      extends: [
        'plugin:@graphql-eslint/operations-all',
        'plugin:@graphql-eslint/schema-all',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@graphql-eslint/eslint-plugin',
      parserOptions: {
        operations: ['./*.ts'],
        schema: './schema.graphql',
      },
      rules: {
        '@graphql-eslint/executable-definitions': 'off',
        '@graphql-eslint/require-description': 'off',
        '@graphql-eslint/require-nullable-result-in-root': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
};
