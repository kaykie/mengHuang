<template lang="pug">
RouterView
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

<style lang="stylus">
@keyframes gradientBG 
  0%
    background-position 0% 50%
  50%
    background-position 100% 50%
  100%
    background-position 0% 50%
#app
  display flex
  flex 1
  flex-direction column
  height 100%
  width 100%
  overflow hidden
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-image linear-gradient(-45deg, #e1aa99, #ffdfeb, #b8ebfd, #c2fff1);
  background-size: 600% 600%;
  animation gradientBG 5s ease infinite

.page
  flex 1
  display flex
  flex-direction column
  overflow-y auto

.van-tabbar
  flex 0 0 auto

.custom-button
  width 50px
  height 26px
  line-height 26px
  display flex
  align-items center
  justify-content center
  color #fff
  font-size 12px
  text-align center
  background-color $theme
  border-radius 100px
  transform scale(0.8)




</style>
