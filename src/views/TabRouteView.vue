<template>
  <div class="my-tabView">
    <RouterView/>
    <van-tabbar  v-model="active" inactive-color="#999">
      <van-tabbar-item v-for="item in tabs" :icon="item.icon" :name="item.key" :key="item.key" :to="item.to">{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data () {
    return {
      tabs: [
        { to: { name: 'Home' }, name: '功能', icon: 'wap-home',key:'home' },
        { to: { name: 'User' }, name: '设置', icon: 'setting',key:'setting' },
      ],
      active:'home'
    }
  }
}
</script>

<style lang="less">
.my-tabView{
  height: 100%;
}
</style>