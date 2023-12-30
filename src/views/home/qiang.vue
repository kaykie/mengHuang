<template>
  <div>
    <van-button round block @click="startNow" type="primary" native-type="submit">
      开始抢铅
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
      console.log('1fff')
      auto.invoke(
        'runRobot',
        [{ robot: require('@/auto/robot/robot.qiang'), ...this.model }],
        () => {
        },
      )
    }
  },
}
</script>
<style scoped></style>
