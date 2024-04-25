<template>
  <div>
    <h3>使用前置：</h3>
      <p>1、进入本页面，点击下方【开始执行】按钮</p>
      <p>2、启动梦幻西游手游app</p>
      <p>3、提前组好队伍并置于长安城</p>
      <p>4、先领取门派闯关任务</p>
      <img src="@/assets/img/mengPaiChuangGuan.jpg"/>
      <p>5、点击悬浮窗口【开始】按钮即可</p>
      <div style="margin: 16px;">
        <van-button round block @click="startNow" type="primary" native-type="submit">
          开始执行
        </van-button>
      </div>
      <h4>脚本执行流程：</h4>
      <p>1、找到 【闯关-】文字</p>
      <p>2、点击找到的 【闯关-】文字</p>
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
        [{ robot: require('@/auto/robot/robot.mengPai'), ...this.model }],
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
