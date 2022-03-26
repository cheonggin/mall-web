/*eslint-disable*/
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    isShowTabbar?: boolean
  }
}
