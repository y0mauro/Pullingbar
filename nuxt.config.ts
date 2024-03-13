// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.css"],
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          "DM+Sans": [400, 500, 600, 700],
        },
      },
    ],
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
