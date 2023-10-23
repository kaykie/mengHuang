// 周一门派活动
auto();

const {findTextAndClick,isFighting,clickRect,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')



// 判断是否在战斗中
function isFight(){
  while(true){
    sleep(15000) // 每隔20秒判断是否在战斗中
    if(!isFighting()){
      break;
    }
    log('还在战斗中...')
  }
}

while(true){
  if(hasText('闯关-')){
    log('去领取任务了')
    sleep(1000);
    findTextAndClick('闯关-',{region:'rightHalf'});
    sleep(5000)
    clickImageTemplate('mengPaiChuangGuan.jpg',{region:'rightBottomHalf'});
    sleep(2000)
    clickImageTemplate('lingQuRenWu.jpg',{region:'rightBottomHalf'});
    sleep(2500)
  }
  randomClick()

  let time = 0
  while(!isFighting() && time < 5){
    sleep(1500)
    findTextAndClick('闯关(')
    sleep(5000)
    clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
    time++
    sleep(1000)
  }
  isFight()
  const minutes = new Date().getMinutes()
  if(minutes >= 40){
    break;
  }
}
toastLog('门派结束')
exit()