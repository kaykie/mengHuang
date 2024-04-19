import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/global.styl'
import './auto/JSSDK'
import './flexable'
import router from './router'
import './store'
import vant from 'vant'
import 'vant/es/dialog/style';

// 初始化autojs 全局函数
auto.execAjCode(require('@/auto/global/robot.global'))
auto.execAjCode(require('@/auto/global/robot.menu'))

const app = createApp(App)
app.config.globalProperties.$WD = window
app.config.globalProperties.$store = $store
window.$vm = app

app.use(router)
app.use(vant)

app.mount('#app')

document.querySelector('#AppLoading').style.display = 'none'

