// 周三召唤灵活动
auto();

const {findTextAndClick,loopFunction,isHasImageTemplate,clickClosePoint,randomClick,clickImageTemplate,hasText,findTextRect} = require('/sdcard/mh/templateImages/util.js')

function isFight(){
  while(true){
    sleep(5000) // 每隔20秒判断是否在战斗中
    if(!isHasImageTemplate('isFight.jpg',{region:'leftTopHalf'})){
      break;
    }
    log('还在战斗中...')
  }
}
let unFindTime = 0
while(true){
  isFight()
  randomClick()
  clickClosePoint()
  sleep(500)
  var res = loopFunction(function(){
    return findTextAndClick('周常',{region:'rightTopHalf'})
  },8)
  if(!res){
    var res3 = loopFunction(function(){
      return findTextAndClick('迷魂',{region:'rightTopHalf'})
    },8)
    if(!res3){
      unFindTime++
    }
  }
  var res2 = loopFunction(function(){
    return clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
  },8)
  if(res2){
    let res3 = hasText('移动')
    if(res3){
      sleep(6000)
    }
  }
  if(unFindTime > 3){
    break;
  }
}
exit()