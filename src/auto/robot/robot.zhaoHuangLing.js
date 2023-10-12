// 周三召唤灵活动
auto();

const {findTextAndClick,isHasImageTemplate,clickRect,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')

// 如果有X号则点击关闭
function clickClosePoint(){
  if(isHasImageTemplate('xhao.jpg')){
    log('有一个x号，点击关闭')
    clickImageTemplate('xhao.jpg',{region:'rightBottomHalf'})
  }
}
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
  clickClosePoint()
  sleep(500)
  let res = findTextAndClick('周常',{region:'rightTopHalf'})
  if(!res){
    findTextAndClick('召唤',{region:'rightTopHalf'})
  }
  sleep(7000)
  let res2 = clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
  if(res2){
    let res3 = hasText('移动')
    if(res3){
      sleep(6000)
    }
  }
  const minutes = new Date().getMinutes()
  if(minutes >= 40){
    break;
  }
}
exit()