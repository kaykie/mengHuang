

export default{


  methods: {
    
  },
  mounted() {
    const context =  require.context('./images',true)
    const array = [];
    context.keys().forEach(item =>{
      array.push(item.replace(/\.\//,''))
    })
    auto.invoke(
      'runRobotNow',
      [{ robot: require('@/auto/robot/robot.syncImages'), params:{imgs:array} }],
      () => {
        log('ajFun1 回调:')
      },
    )
  },
}