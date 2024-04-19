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
    path: '/mengPai',
    name: 'mengPai',
    component: () => import('./views/home/mengPai.vue'),
  },
  {
    path: '/zhuagui',
    name: 'zhuagui',
    component: () => import('./views/home/zhuagui.vue'),
  },
  {
    path: '/yueBing',
    name: 'yueBing',
    component: () => import('./views/home/yueBing.vue'),
  },
  {
    path: '/zhaoHuangLing',
    name: 'zhaoHuangLing',
    component: () => import('./views/home/zhaoHuangLing.vue'),
  },
  {
    path: '/paTa',
    name: 'paTa',
    component: () => import('./views/home/paTa.vue'),
  },
  {
    path: '/waTu',
    name: 'waTu',
    component: () => import('./views/home/waTu.vue'),
  },
  {
    path: '/qiang',
    name: 'qiang',
    component: () => import('./views/home/qiang.vue'),
  },
  {
    path: '/xingGuang',
    name: 'xingGuang',
    component: () => import('./views/home/xingGuang.vue'),
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
