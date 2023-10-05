// 周三召唤灵活动
auto();

const {findTextAndClick,isHasImageTemplate,clickRect,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')

function isFight(){
  while(true){
    sleep(5000) // 每隔20秒判断是否在战斗中
    if(!isHasImageTemplate('isFight.jpg',{region:'leftTopHalf'})){
      break;
    }
    log('还在战斗中...')
  }
}
while(true){
  isFight()
  randomClick()
  findTextAndClick('周常',{region:'rightTopHalf'})
  sleep(7000)
  clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
  const minutes = new Date().getMinutes()
  if(minutes >= 40){
    break;
  }
}
exit()