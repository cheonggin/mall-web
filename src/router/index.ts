import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const homeVue = () => import('@/views/home/home.vue')
const categoryVue = () => import('@/views/category/category.vue')
const cartVue = () => import('@/views/cart/cart.vue')
const profileVue = () => import('@/views/profile/children/profile.vue')
const profileSettingVue = () => import('@/views/profile/children/profile-setting.vue')
const profileAddressVue = () => import('@/views/profile/children/profile-address.vue')
const profileAddressEditVue = () => import('@/views/profile/children/profile-address-edit.vue')
const searchVue = () => import('@/views/search/search.vue')
const searchListVue = () => import('@/views/search/search-list.vue')
const detailVue = () => import('@/views/detail/detail.vue')
const loginVue = () => import('@/views/login-register/login.vue')
const registerVue = () => import('@/views/login-register/register.vue')
const orderVue = () => import('@/views/order/order.vue')
const paymentVue = () => import('@/views/payment/payment.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: homeVue,
    meta: { isShowTabbar: true }
  },
  {
    path: '/category',
    name: 'category',
    component: categoryVue,
    meta: { isShowTabbar: true }
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartVue
  },
  {
    path: '/profile/index',
    name: 'index',
    component: () => import('@/views/profile/index.vue'),
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: profileVue,
        meta: { isShowTabbar: true }
      },
      {
        path: '/profile/setting',
        name: 'profile-setting',
        component: profileSettingVue
      },
      {
        path: '/profile/address',
        name: 'profile-address',
        component: profileAddressVue
      },
      {
        path: '/profile/address/edit',
        name: 'profile-address-add',
        component: profileAddressEditVue
      },
      {
        path: '/profile/address/edit/:id',
        name: 'profile-address-edit',
        component: profileAddressEditVue
      }
    ]
  },

  { path: '/search', name: 'search', component: searchVue },
  { path: '/search/list', name: 'search-list', component: searchListVue },

  { path: '/detail/:id', name: 'detail', component: detailVue },

  { path: '/login', name: 'login', component: loginVue },
  { path: '/register', name: 'register', component: registerVue },

  { path: '/order', name: 'order', component: orderVue },
  { path: '/payment', name: 'payment', component: paymentVue }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
