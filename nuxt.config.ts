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
  ],
  nitro: {
    preset: 'static',  // 加入這行
    prerender: {
      failOnError: false,
      ignore: ['/blog/製造業行銷-case-1', '/blog/網頁設計']
    }
  }
})