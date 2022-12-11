export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/main.scss";',
        },
      },
    },
  },
});
