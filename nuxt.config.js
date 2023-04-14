import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    title: 'Calculator App',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Calculator App' }
    ]
  },
  googleFonts: {
    display: 'Anuphan',
    prefetch: true,
    preconnect: true,
    download: false,
    preload: true,
    families: {
      Anuphan: [400, 500, 700]
    }
  }
})
