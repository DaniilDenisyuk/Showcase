import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  {
    files: ['**/*.{js,cjs,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx']
        }
      },
      'import/ignore': ['react-native']
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly'
      }
    },
    rules: {
      'react/prop-types': 'off',
      'import/no-named-as-default-member': 'off'
    },
    ignores: ['.DS_Store', 'build', 'node_modules', '*.jsbundle']
  }
]
