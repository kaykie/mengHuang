auto();
var h = device.height;
var w = device.width;
// setScreenMetrics(w,h);

const {findTextAndClick,loopFunction,clickClosePoint,isFighting,randomClick,clickImageTemplate,isHasImageTemplate,hasText} = require('util.js')
const ratioX = device.width/1800
const ratioY = device.height/2400
log(ratioX,ratioY)


var params = global.WEB_PARAMS.params

for(var i = 0;i< 100;i++){
  if(isFighting()){
    log('战斗中...')
  }else{
    toastLog(`开始第${i+1}轮鬼`)
    findTextAndClick('日常-',{region:'rightHalf'})
    // TODO
    if(!hasText('日常-')){
      sleep(2000)
      clickImageTemplate('renwu.jpg',{region:'rightHalf'})
      sleep(2000)
      findTextAndClick('日常-',{region:'rightHalf'})
    }
    sleep(10000)
    // 如果10秒后还没有在战斗中 说明没有点击到任务
    if(!isFighting()){
      findTextAndClick('捉拿',{region:'rightHalf'})
    }
  }
  sleep(8000)
  if(!isFighting()){
    sleep(2000);
    toastLog(`再次来了，开始第${i+1}轮鬼`)
    findTextAndClick('日常-',{region:'rightHalf'})
    sleep(10000)
    // 如果10秒后还没有在战斗中 说明没有点击到任务
    if(!isFighting()){
      findTextAndClick('捉拿',{region:'rightHalf'})
    }
  }

  while(true){
    if(hasText('少侠已经')){
      break;
    }
    clickClosePoint()
    log('还在捉鬼中...')
    sleep(20 * 1000)
  }
  
  loopFunction(function(){
    return findTextAndClick('确定');
  },8)

  loopFunction(function(){
    return clickImageTemplate('zgrw.png',{region:'rightHalf'});
  },8)
  randomClick()
  sleep(1000)
  clickClosePoint()
}
