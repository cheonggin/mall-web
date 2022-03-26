import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const homeVue = () => import('@/views/home/home.vue')
const categoryVue = () => import('@/views/category/category.vue')
const cartVue = () => import('@/views/cart/cart.vue')
const profileVue = () => import('@/views/profile/profile.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: homeVue, meta: { isShowTabbar: true } },
  { path: '/category', name: 'category', component: categoryVue, meta: { isShowTabbar: true } },
  { path: '/cart', name: 'cart', component: cartVue },
  { path: '/profile', name: 'profile', component: profileVue }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
