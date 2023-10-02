import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'TabRouteView',
    component: () => import('./views/TabRouteView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('./views/home/index.vue'),
      },
      {
        path: 'User',
        name: 'User',
        component: () => import('./views/user/user.vue'),
      },
    ],
  },
  {
    path: '/fiveBen',
    name: 'fiveBen',
    component: () => import('./views/home/fiveBen.vue'),
  },
  {
    path: '/zhuagui',
    name: 'zhuagui',
    component: () => import('./views/home/zhuagui.vue'),
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

window.$router = router
Object.defineProperty(window, '$route', {
  get () {
    return router.currentRoute.value
  },
})
export default router
