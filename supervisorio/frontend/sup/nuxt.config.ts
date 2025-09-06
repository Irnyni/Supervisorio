// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  app: {
    head: {
      script: [
        { src: 'bootstrap/dist/js/bootstrap.bundle.min.js', type: 'text/javascript' }
      ]
    }
  }
})