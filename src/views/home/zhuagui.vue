<template>
  <div class="container">
    <van-nav-bar
      title="捉鬼任务"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @failed="onFailed" @submit="handleSubmit">
      <h3>使用前置：</h3>
      <p>1、进入本页面，点击下方【开始捉鬼】按钮</p>
      <p>2、启动梦幻西游手游app</p>
      <p>3、提前组好队伍并置于长安城</p>
      <p>4、到钟馗那领取捉鬼任务（如下）</p>
      <img style="width: 100%;" src="@/assets/img/zhuaGui.jpg"/>
      <p>5、点击悬浮窗口【开始】按钮即可</p>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          开始捉鬼
        </van-button>
      </div>
      <h4>脚本执行流程：</h4>
      <p>1、找到 【日常-】文字</p>
      <p>2、点击找到的 【日常-】文字</p>
    </van-form>
  </div>
</template>



<script>
  export default{
    data(){
      return {
        times:10
      }
    },

    methods:{
      onFailed(info){
        console.log(info);
      },
      handleSubmit(values){
        console.log(values);
        auto.invoke('runRobot',[{robot:require('@/auto/robot/robot.five'),params:values}],()=>{
          console.log('完成回调')
        })
      },
      onClickLeft(){
        this.$router.back()
      }
    }
  }
</script>