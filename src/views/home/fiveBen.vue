<template>
  <div class="container">
    <h3>使用前置：</h3>
    <p>1、进入本页面，点击下方【开始执行三本】按钮</p>
    <p>2、启动梦幻西游手游app</p>
    <p>3、提前组好队伍并置于长安城</p>
    <img src="@/assets/img/autoThree.jpg"/>
    <p>4、点击悬浮窗口【开始】按钮即可</p>
    <van-radio-group v-model="groupChecked" direction="horizontal">
      <van-radio name="normal2">69级普通2本</van-radio>
      <van-radio name="normal3">69级3本(2普通+1侠士)</van-radio>
      <van-radio name="highNormal3">89级普通3本</van-radio>
      <van-radio name="highNormal5">89级5本(3普通+2侠士.)</van-radio>
    </van-radio-group>
    <van-button :disabled="groupChecked.length==0" round block @click="startNow" type="primary" native-type="submit">
      开始执行
    </van-button>
    <p>注：上一个版本只战斗3次的问题已修复，目前只要打不过会重复执行</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      model: {
      },
      groupChecked:['highNormal5'],
    }
  },
  mounted () { },
  unmounted () {
    console.log('保存页面上的数据')
    localStorage.VUE_DOUYIN = JSON.stringify(this.model)
  },
  methods: {
    startNow () {
      console.log(this.groupChecked)
      auto.invoke(
        'runRobot',
        [{ robot: require('@/auto/robot/robot.fiveBen'), params:{check:this.groupChecked} }],
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
