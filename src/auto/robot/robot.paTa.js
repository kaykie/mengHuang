// 周三召唤灵活动
auto();

const {findTextAndClick,isHasImageTemplate,clickClosePoint,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')

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
  let res = findTextAndClick('周常',{region:'rightTopHalf'})
  if(!res){
    let res3 = findTextAndClick('迷魂',{region:'rightTopHalf'})
    if(!res3){
      unFindTime++
    }
  }
  sleep(7000)
  let res2 = clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
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