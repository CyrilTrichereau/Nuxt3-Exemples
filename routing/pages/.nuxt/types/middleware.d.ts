import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "H:/Documents/Travail/302_Tests/Nuxt3 Exemples/routing/pages/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}