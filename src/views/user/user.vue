<template lang="pug">
.page.User
  van-cell(title='打开日志', @click='showConsole' is-link)
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
    }
  },
}
</script>
<style lang='stylus' scoped>
</style>
