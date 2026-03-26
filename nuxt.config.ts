// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      wordpressUrl: 'https://wcmep.com.tw'
    }
  },
  css: [
    'swiper/css',
    'swiper/css/navigation'
  ]
})