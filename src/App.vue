<template>
  <RouterView/>
</template>
<script >
import store from './store';
export default {
  data () {
    return {
      store,
    }
  },
  watch: {
  },
  created(){
    console.log(1111)
    auto.invoke('runRobotNow',[{robot:require('@/auto/global/robot.global2.js')}],()=>{
      console.log('调用全局截图权限')
    })
  }
}
</script>

<style lang="less">
#app{
  height: 100vh;
  overflow: hidden;
}

</style>
