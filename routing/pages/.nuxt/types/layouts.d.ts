import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "H:/Documents/Travail/302_Tests/Nuxt3 Exemples/routing/pages/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}