<template lang="pug">
.page.User
  van-cell(title='打开日志', @click='showConsole' is-link)
  van-cell(title='调autojs方法', @click='runAutoFn' is-link)
  van-cell(title='执行autojs代码', @click='runAutoCode' is-link)
  van-cell(title='执行autojs脚本文件', @click='runAutoFile' is-link)
  .fz16.tac.m10.danger autojs设置$store {{store.count}}
  .p10
    div Log:
    .pre(v-for='item in store.log', :key='item') {{ item }}

</template>
<script>
import store from '@/store'
export default {
  data () {
    return {
      store,
    }
  },
  methods: {
    showConsole () {
      auto.invoke('showLog')
      // 或者直接调用 auto.execAjCode('app.startActivity("console")')
    },
    runAutoFn () {
      auto.invoke('toastLog', '调autojs方法 成功')
      // 或者直接调用 auto.execAjCode('app.startActivity("console")')
    },
    runAutoCode () {
      auto.execAjCode('toastLog("执行autojs代码 成功")')
      // 或者直接调用 auto.execAjCode('app.startActivity("console")')
    },
    runAutoFile () {
      auto.execAjCode(require('@/auto/robot/robot.douyin'))
      // 或者直接调用 auto.execAjCode('app.startActivity("console")')
    },
  },
}
</script>
<style lang='stylus' scoped>
</style>
