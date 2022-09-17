<template lang="pug">
.page
  RouterView
van-tabbar.select-none(route, :fixed='false' inactive-color="#999")
  van-tabbar-item(
    v-for='item in tabs',
    :key='item.id',
    :icon='item.icon',
    replace,
    :to='item.to'
  ) {{ item.name }}
</template>
<script>
export default {
  data () {
    return {
      tabs: [
        { to: { name: 'Home' }, name: '功能', icon: 'wap-home' },
        { to: { name: 'User' }, name: '设置', icon: 'setting' },
      ],
    }
  },
}
</script>
