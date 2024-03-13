// https://nuxt.com/docs/api/configuration/nuxt-config

import{resolve} from 'path'

export default defineNuxtConfig({  
 devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "src"),

  },
css: [
  "~/assets/main.css",
],
  modules: [
    ['@nuxtjs/google-fonts', {families: {Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]}}],

  ],

postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},


  });
