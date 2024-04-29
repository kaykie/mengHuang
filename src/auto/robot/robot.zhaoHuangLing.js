// 周三召唤灵活动
auto();

const {findTextAndClick,isHasImageTemplate,isFightingCallback,randomClick,clickImageTemplate,hasText,findTextRect} = require('/sdcard/mh/templateImages/util.js')
// 循环执行一事件 减少判断时间
function loopFunction(fun,interTime){
  var bool = false
  for(var i = 0;i<interTime;i++){
    sleep(1000)
    var res = fun();
    if(res){
      bool = true
      break;
    }
  }
  return bool
}
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
  isFightingCallback(function(){
    // let res = findTextAndClick('周常',{region:'rightTopHalf'})
    var res = loopFunction(function(){
      return findTextAndClick('周常',{region:'rightTopHalf'})
    },6)
    if(!res){
      loopFunction(function(){
        return findTextAndClick('召唤',{region:'rightTopHalf'})
      },6)
    }
    loopFunction(function(){
      return clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true})
    },6)
  })
  const minutes = new Date().getMinutes()
  if(minutes >= 40){
    break;
  }
}