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
}
</script>

<style lang="less">
#app{
  height: 100vh;
  overflow: hidden;
}

</style>
