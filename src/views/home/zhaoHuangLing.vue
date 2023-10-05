<template>
  <div>
    <van-button round block @click="startNow" type="primary" native-type="submit">
      开始执行活动
    </van-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: {
      },
    }
  },
  mounted () { },
  unmounted () {
    console.log('保存页面上的数据')
    localStorage.VUE_DOUYIN = JSON.stringify(this.model)
  },
  methods: {
    startNow () {

      auto.invoke(
        'runRobot',
        [{ robot: require('@/auto/robot/robot.zhaoHuangLing'), ...this.model }],
        () => {
          // log('ajFun1 回调:', typeof r, r)
        },
      )
    },
    stop () {
      auto.invoke('robotStop', [], () => { })
    },
  },
}
</script>
<style scoped></style>
