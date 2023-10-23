auto();
var h = device.height;
var w = device.width;
// setScreenMetrics(w,h);

const {findTextAndClick,clickClosePoint,isFighting,randomClick,clickImageTemplate,hasText} = require('util.js')
const ratioX = device.width/1800
const ratioY = device.height/2400
log(ratioX,ratioY)


var params = global.WEB_PARAMS.params

sleep(1000);

for(var i = 0;i< 100;i++){
  if(isFighting()){
    log('战斗中...')
  }else{
    toastLog(`开始第${i+1}轮鬼`)
    findTextAndClick('日常-',{region:'rightHalf'})
    sleep(10000)
    // 如果10秒后还没有在战斗中 说明没有点击到任务
    if(!isFighting()){
      findTextAndClick('捉拿',{region:'rightHalf'})
    }
  }
  sleep(15000)
  if(!isFighting()){
    clickClosePoint()
    sleep(2000);
    toastLog(`再次来了，开始第${i+1}轮鬼`)
    findTextAndClick('日常-',{region:'rightHalf'})
    sleep(10000)
    // 如果10秒后还没有在战斗中 说明没有点击到任务
    if(!isFighting()){
      findTextAndClick('捉拿',{region:'rightHalf'})
    }
  }

  sleep(9 * 60 * 1000)
  while(true){
    if(hasText('少侠已经')){
      break;
    }
    sleep(25 * 1000)
  }
  findTextAndClick('确定');
  sleep(8000)
  clickImageTemplate('zgrw.png',{region:'rightHalf'});
  sleep(15000)
  randomClick()

}

exit()