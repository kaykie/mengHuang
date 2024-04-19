<template>
  <div class="container">
    <h3>使用前置：</h3>
    <p>1、进入本页面，点击【开始执行】(确定要运行的脚本)</p>
    <p>2、启动梦幻西游手游app</p>
    <p>3、进入游戏点击普通宝图，等到弹出【使用】</p>
    <img src="@/assets/img/waTu.jpg"/>
    <p>4、点击悬浮窗口【开始】按钮即可</p>
    <van-button round block @click="startNow" type="primary" native-type="submit">
      开始执行
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
  },
  methods: {
    startNow () {
      auto.invoke(
        'runRobot',
        [{ robot: require('@/auto/robot/robot.waTu') }],
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
<style lang="less" scoped>
.container{
  :deep(.van-radio-group){
    margin: 10px;
    .van-radio{
      margin-bottom: 10px;
    }
  }
}
</style>
