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
.container{
  font-size:16px;
  p{
    margin:5px 0;
  }
  img{
    width:100%;
  }
}
</style>
