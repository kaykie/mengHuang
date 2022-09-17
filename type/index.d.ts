import router from '@/router';
import AutoX from '@/auto/JSSDK';
import store from '@/store';
declare global {
  var $router = router
  var $route = router.currentRoute.value
  var $store = store
  var auto = new AutoX()
}
