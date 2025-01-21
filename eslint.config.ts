import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import nodePlugin from 'eslint-plugin-n';

export default tseslint.config(
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: ['**/node_modules/*', '**/*.mjs', '**/*.js'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
    },
  },
  {
    files: ['**/*.ts'],
  },
  {
    rules: {
      '@stylistic/js/comma-dangle': ['warn', 'always-multiline'],
      '@stylistic/js/eol-last': ['warn', 'always'],
      '@stylistic/js/indent': ['warn', 2],
      '@stylistic/js/max-len': ['warn', { code: 80 }],
      '@stylistic/js/no-extra-semi': 'warn',
      '@stylistic/js/quotes': ['warn', 'single'],

      '@stylistic/ts/member-delimiter-style': [
        'warn',
        {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
          overrides: {
            interface: {
              singleline: {
                delimiter: 'semi',
                requireLast: false,
              },
              multiline: {
                delimiter: 'semi',
                requireLast: true,
              },
            },
          },
        },
      ],
      '@stylistic/ts/semi': ['warn', 'always'],

      '@typescript-eslint/explicit-member-accessibility': 'warn',
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-confusing-void-expression': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-unnecessary-condition': 0,
      '@typescript-eslint/no-unnecessary-type-parameters': 0,
      '@typescript-eslint/no-unsafe-enum-comparison': 0,
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true },
      ],
      '@typescript-eslint/restrict-plus-operands': [
        'warn',
        { allowNumberAndString: true },
      ],

      'no-extra-boolean-cast': 0,
      'n/no-process-env': 1,
      'n/no-missing-import': 0,
      'n/no-unpublished-import': 0,
      'prefer-const': 'warn',
    },
  },
);
