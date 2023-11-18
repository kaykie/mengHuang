<template>
  <div class="container">
    <h3>使用前置：</h3>
    <p>1、进入本页面，点击下方【开始执行三本】按钮</p>
    <p>2、启动梦幻西游手游app</p>
    <p>3、提前组好队伍并置于长安城</p>
    <img src="@/assets/img/autoThree.jpg"/>
    <p>4、点击悬浮窗口【开始】按钮即可</p>
    <van-button round block @click="startNow" type="primary" native-type="submit">
      开始执行三本
    </van-button>
    <p>注：由于大多副本都是只有三次战斗，所以脚本逻辑中只会执行三次战斗，所以如果打不过的话，建议还是手动的好。</p>
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
        [{ robot: require('@/auto/robot/robot.fiveBen'), ...this.model }],
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
<style lang="less">

</style>
