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
        component: () => import('./views/Home.vue'),
      },
      {
        path: 'User',
        name: 'User',
        component: () => import('./views/User.vue'),
      },
    ],
  },
  {
    path: '/Douyin',
    name: 'Douyin',
    component: () => import('./views/Douyin.vue'),
  },
  {
    path: '/Weixin',
    name: 'Weixin',
    component: () => import('./views/Weixin.vue'),
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
