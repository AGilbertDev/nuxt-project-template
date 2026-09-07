// @ts-check
import perfectionist from 'eslint-plugin-perfectionist'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(prettierRecommended, {
  plugins: { perfectionist },
  rules: {
    'perfectionist/sort-imports': ['warn'],
    'perfectionist/sort-interfaces': ['warn'],
    'perfectionist/sort-named-imports': ['warn'],
    'vue/attributes-order': ['warn', { alphabetical: true }]
  }
})
