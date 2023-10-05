// 周一门派活动
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
let isLast = false
while(true){
  if(hasText('门派闯关(13/13)')){
    log('门派闯关最后一关')
    isLast = true
  }else{
    isLast = false
  }
  isFight()
  if(isLast){
    findTextAndClick('门派闯关-')
    sleep(3000)
    // TODO 点击领取任务
  }
  randomClick()
  sleep(1500)
  findTextAndClick('门派闯关(')
  sleep(5000)
  clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
  const minutes = new Date().getMinutes()
  if(minutes >= 40){
    break;
  }
}