<template>
  <div class="container">
    <h3>使用前置：</h3>
    <p>1、进入本页面，点击下方【开始执行三本】按钮</p>
    <p>2、启动梦幻西游手游app</p>
    <p>3、提前组好队伍并置于长安城</p>
    <img src="@/assets/img/autoThree.jpg"/>
    <p>4、点击悬浮窗口【开始】按钮即可</p>
    <van-checkbox-group v-model="groupChecked" @change="onChangeType" direction="horizontal">
      <van-checkbox name="3" shape="square">普通3本</van-checkbox>
      <van-checkbox name="2" shape="square">侠士2本</van-checkbox>
    </van-checkbox-group>
    <van-button :disabled="groupChecked.length==0" round block @click="startNow" type="primary" native-type="submit">
      开始执行{{ text }}
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
      groupChecked:['3','2'],
      text:'5本'
    }
  },
  mounted () { },
  unmounted () {
    console.log('保存页面上的数据')
    localStorage.VUE_DOUYIN = JSON.stringify(this.model)
  },
  methods: {
    onChangeType(val){
      console.log(val)
      if(val.length === 2){
        this.text = '5本'
        return
      }
      if(val.includes('3')){
        this.text = '3本'
      }else{
        this.text = '2本'
      }
    },
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
  :deep(.van-checkbox-group){
    margin: 10px;
  }
}
</style>
