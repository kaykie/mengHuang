// 挖图脚本
auto();

const {findTextAndClick,loopFunction,isHasImageTemplate,isFighting,randomClick,clickImageTemplate,hasText,findTextRect} = require('/sdcard/mh/templateImages/util.js')
toastLog('挖图脚本执行中...')

while(true){
  if(isFighting()){
    log('战斗中...')
    sleep(5000)
  }
  sleep(500)
  var res = loopFunction(function(){
    sleep(1000)
    return findTextAndClick('使用',{region:'rightBottomHalf'})
  },55)
  if(!res){
    // 由于加图片得更新包，后续再更新用图片找使用功能
    // var res3 = loopFunction(function(){
    //   return clickImageTemplate('shiYong.jpg',{region:'rightBottomHalf'})
    // },12)
    // if(!res3){
    // }
    break
  }
}
toastLog('挖图脚本执行结束')
