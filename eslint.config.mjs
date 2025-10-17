// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  {
    plugins: { prettier: prettier },
    rules: {
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          singleQuote: true,
          semi: true,
          printWidth: 90,
          bracketSameLine: false,
          trailingComma: 'es5',
        },
      ],
    },
  },
  {
    plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // `react` and `next` first, then packages starting with `@` followed by packages starting with a character.
            ['^react$', '^next', '^@?\\w'],
            // Aliased imports, often starting with `~` or a specific alias.
            ['^~'],
            // Imports from public directory.
            ['^public/.*$'],
            // Imports from parent directories, starting with `../` or `public/`.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Imports from the current directory, starting with `./`.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Side effect imports.
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
