<template lang="pug">
.page.Home.select-none
  .flex.fdc.jcc.aic
    img.w100(
      src="/auto.png"
      )
    svg.logo.w150.h150.df.aic.jcc(viewbox="0 0 128 128")
      path(fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" )
      path(fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" )

  .list
    .item(
      v-for='item in list',
      :class='item.class',
      @click='goPage(item)',
      :key='item.route'
    )
      .van-icon(:class='item.icon')
      .title {{ item.title }}
      .name {{ item.name }}
</template>
<script>
import store from '@/store';
export default {
  data () {
    return {
      store,
      list: [
        {
          route: 'Douyin',
          class: 'bg-mauve',
          title: '自动看抖音',
          icon: 'van-icon-chat-o',
          name: '抖音',
        },
        {
          route: 'Weixin',
          class: 'bg-cyan',
          title: '点赞评论',
          icon: 'van-icon-chat-o',
          name: '朋友圈',
        },
        {
          class: 'bg-purple',
          route: 'Weixin',
          title: '点赞评论',
          icon: 'van-icon-chat-o',
          name: '朋友圈',
        },
        {
          class: 'bg-pink',
          route: 'Weixin',
          title: '点赞评论',
          icon: 'van-icon-chat-o',
          name: '朋友圈',
        },
        {
          class: 'bg-orange',
          route: 'Weixin',
          title: '点赞评论',
          icon: 'van-icon-chat-o',
          name: '朋友圈',
        },
        {
          class: 'bg-olive',
          route: 'Weixin',
          title: '点赞评论',
          icon: 'van-icon-chat-o',
          name: '朋友圈',
        },
        {
          class: 'bg-red',
          route: 'Weixin',
          title: '点赞评论',
          icon: 'van-icon-chat-o',
          name: '朋友圈',
        },
      ],
    }
  },
  mounted () { },
  methods: {
    goPage (item) {
      this.$router.push({ name: item.route })
    },
  },
}
</script>

<style lang="stylus" scoped>
.Home
  .list
    display flex
    flex-wrap wrap
    &::after
      content ''
      position absolute
      z-index -1
      background-color inherit
      width 100%
      height 100%
      left 0
      bottom -10%
      border-radius 5px
      opacity 0.2
      -webkit-transform scale(0.9, 0.9)
      transform scale(0.9, 0.9)
    .item
      flex 0 0 45%
      height 90px
      margin 10px 2.5%
      border-radius 6px
      padding 15px
      background-image url('~@/assets/img/gray-float.png')
      background-size cover
      background-position center
      position relative
      z-index 1
    .title
      font-size 16px
    .name
      font-size 14px
      text-transform Capitalize
      margin-top 10px
      position relative
      &::after
        content ''
        position absolute
        display block
        width 50px
        height 1px
        background #fff
        bottom 0
        right 20px
        opacity 0.3
        &::before
          content ''
          position absolute
          display block
          width 20px
          height 3px
          background #fff
          bottom 0
          right 0
          opacity 0.5
    .van-icon
      position absolute
      right 15px
      top 15px
      font-size 26px
      width 30px
      height 30px
      text-align center
      line-height 30px
  .bg-red
    background-color #e54d42
    color #ffffff
  .bg-orange
    background-color #f37b1d
    color #ffffff
  .bg-yellow
    background-color #fbbd08
    color #333333
  .bg-olive
    background-color #8dc63f
    color #ffffff
  .bg-green
    background-color #39b54a
    color #ffffff
  .bg-cyan
    background-color #1cbbb4
    color #ffffff
  .bg-blue
    background-color #0081ff
    color #ffffff
  .bg-purple
    background-color #6739b6
    color #ffffff
  .bg-mauve
    background-color #9c26b0
    color #ffffff
  .bg-pink
    background-color #e03997
    color #ffffff
  .bg-brown
    background-color #a5673f
    color #ffffff
  .bg-gray
    background-color #f0f0f0
    color #333333
  .bg-black
    background-color #333333
    color #ffffff
  .bg-white
    background-color #ffffff
    color #666666
</style>
