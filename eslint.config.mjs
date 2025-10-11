// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-plugin-prettier';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

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
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;
