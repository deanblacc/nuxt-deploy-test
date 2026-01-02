// https://nuxt.com/docs/api/configuration/nuxt-config config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    baseURL: '/nuxt-deploy-test/',
    head: {
      title: 'My Nuxt App',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt-deploy-test/favicon.svg' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
