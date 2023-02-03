// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "unplugin-icons-nuxt3"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
