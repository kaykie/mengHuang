<template>
  <div class="container">
    <p>
      仅提供倒计时功能，不会提供自动抢星官地煞功能
    </p>
    <p>
      步骤一：点击下方开始执行按钮后在游戏中
    </p>
    <p>
      步骤二：当游戏中提示星官、地煞时，点击开始按钮
    </p>
    
    <van-button round block @click="startNow" type="primary" native-type="submit">
      开始执行
    </van-button>
    <p>
      提示：点击倒计时，则停止计时
    </p>
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
        [{ robot: require('@/auto/robot/robot.xingGuang'), ...this.model }],
      )
    },
    stop () {
      auto.invoke('robotStop', [], () => { })
    },
  },
}
</script>
<style scoped lang="less">
.container{
  p{
    line-height: 25px;
  }
}
</style>
