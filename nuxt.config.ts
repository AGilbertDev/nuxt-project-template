// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts', '@nuxtjs/i18n'],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: { commaDangle: 'never', braceStyle: '1tbs' }
    }
  },

  // Québécois French is the default and English is the second locale, so the
  // French copy is never a retrofit. No prefix on the default locale keeps the
  // French URLs clean.
  i18n: {
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'fr', language: 'fr-CA', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-CA', name: 'English', file: 'en.json' }
    ],
    bundle: { optimizeTranslationDirective: false }
  }
})
