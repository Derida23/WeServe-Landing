// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/image',
  ],
  svgo: {
    componentPrefix: 'icon',
  },
  image: {
    dir: 'assets/',
  },
  googleFonts: {
    preload: true,
    display: 'swap',
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Kalnia: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
  },
})
