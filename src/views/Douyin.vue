<template lang="pug">
.page-full.VUE_DOUYIN
  van-nav-bar(
    title='DY看视频评赞',
    left-text='返回',
    left-arrow,
    @click-left='$router.go(-1)'
  )
  .content.mt10
    van-form
      van-cell-group(inset)
        van-field(
          v-model='model.interval',
          label='观看时长',
          name='pattern',
          placeholder='请输入内容',
          type='digit',
          required,
          :rules='[{ required: true, message: "请输入正确内容" }]'
        )
        van-field(label='点赞概率')
          template(#input)
            van-slider(v-model="model.zanMax" :step="0.01" :max="1" :min="0")
              template(#button)
                .custom-button {{(model.zanMax *100).toFixed(0)}} %

        van-field(label='关注概率')
          template(#input)
            van-slider(v-model="model.subscribeMax" :step="0.01" :max="1" :min="0")
              template(#button)
                .custom-button {{(model.subscribeMax *100).toFixed(0)}} %

        van-field(label='评论概率')
          template(#input)
            van-slider(v-model="model.commentMax" :step="0.01" :max="1" :min="0")
              template(#button)
                .custom-button {{(model.commentMax *100).toFixed(0)}} %

        van-field(
          v-model='model.comment',
          label='评论内容',
          name='model.comment',
          placeholder='请输入内容',
          required,
          type='textarea',
          rows='2',
          autosize,
          :rules='[{ required: true, message: "请输入正确内容" }]'
        )

        van-field(
          v-model='model.max',
          label='观看量',
          name='pattern',
          placeholder='请输入内容',
          type='digit',
          required,
          :rules='[{ required: true, message: "请输入正确内容" }]'
        )
      div(style='margin: 16px')
        van-button(round, block, type='primary', @click='startNow') 启动
        van-button.mt10(round, block, type='danger', @click='stop') 停止
        .mt10.c6.fz14
          | 请先打开视频页:
          | 同城视频, 达人视频, 话题视频, 搜索结果视频...
</template>
<script>
export default {
  data () {
    return {
      model: {
        zanMax: 0.2,
        sendType: '1',
        commentMax: 0.2,
        subscribeMax: 0.2,
        comment: '不错哟\n点赞\n视频拍得非常好\nBGM恰到好处',
        interval: 3,
        max: 100,
        ...JSON.parse(localStorage.VUE_DOUYIN || '{}'),
      },
    }
  },
  mounted () { },
  unmounted () {
    console.log('保存页面上的数据')
    localStorage.VUE_DOUYIN = JSON.stringify(this.model)
  },
  methods: {
    startNow () {
      auto.invoke(
        'runRobotNow',
        [{ robot: require('@/auto/robot/robot.douyin'), ...this.model }],
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
<style lang='stylus' scoped></style>
