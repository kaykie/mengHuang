
// 项目会在初始化进入首页时，获取到本地的图片数据
export default{


  methods: {
    
  },
  mounted() {
    const array = [
      "bxxz.jpg",
      "changAnCheng.png",
      "commonBtn.jpg",
      "fighting.jpg",
      "fighting2.jpg",
      "fuBengFight.jpg",
      "guaji.jpg",
      "huodong.png",
      "isFight.jpg",
      "jingRu.jpg",
      "lingQuRenWu.jpg",
      "mengPaiChuangGuan.jpg",
      "qiang.jpg",
      "renwu.jpg",
      "sample.jpg",
      "sample2.jpg",
      "sample3.jpg",
      "sample4.jpg",
      "sample5.jpg",
      "shiYong.jpg",
      "tiaoguo.jpg",
      "xhao.jpg",
      "xhao2.jpg",
      "xhao3.jpg",
      "xuanZheFuBen.jpg",
      "xuanZheFuBen2.jpg",
      "xx.png",
      "xz.png",
      "ytg.jpg",
      "yueBing.jpg",
      "zgrw.png",
      "zhongQiuYueBing.jpg",
      "zhongkui.jpg",
      "zhongkui_kui.jpg",
      "zhongkui_zhong.jpg"
    ]
    
    auto.invoke(
      'runRobotNow',
      [{ robot: require('@/auto/robot/robot.syncImages'), params:{imgs:array} }],
      () => {
        log('ajFun1 回调:')
      },
    )
  },
}