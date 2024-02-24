// 周一门派活动
auto();

const {findTextAndClick,isFighting,isFightingCallback,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')



// 判断是否在战斗中
function isFight(){
  while(true){
    sleep(5000) // 每隔8秒判断是否在战斗中
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
    var res = findTextAndClick('闯关-',{region:'rightHalf'});
    if(!res){
      sleep(1000)
      findTextAndClick('领取任务',{region:'rightHalf'});
    }
    sleep(4000)
    clickImageTemplate('mengPaiChuangGuan.jpg',{region:'rightBottomHalf'});
    sleep(2000)
    clickImageTemplate('lingQuRenWu.jpg',{region:'rightBottomHalf'});
    sleep(2500)
  }
  randomClick()
  isFightingCallback(function(){
    log('回调内容')
    sleep(1000)
    findTextAndClick('闯关(')
    sleep(5000)
    clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
    sleep(1000)
  })
  log('回调内容2')
  isFight()
  const minutes = new Date().getMinutes()
  if(minutes >= 40){
    break;
  }
}
toastLog('门派结束')