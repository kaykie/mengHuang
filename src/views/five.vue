<template>
  <div>
    <van-button type="primary" @click="handleStart">开始执行</van-button>
  </div>
</template>



<script>
  export default{

    methods:{
      handleStart(){
        auto.invoke('runRobotNow',[{robot:require('@/auto/robot/robot.five')}],()=>{
          console.log('完成回调')
        })
      }
    }
  }
</script>