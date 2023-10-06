auto();
var h = device.height;
var w = device.width;
// setScreenMetrics(w,h);

const {findTextAndClick,isFighting,randomClick,clickImageTemplate,hasText} = require('util.js')
const ratioX = device.width/1800
const ratioY = device.height/2400
log(ratioX,ratioY)


// sleep(3000)

// home();

// sleep(2000)

// home()

// sleep(2000)

var params = global.WEB_PARAMS.params
// var btn = text('梦幻西游').findOne();

// var center = btn.bounds();
// try{
//   click(center.centerX(),center.centerY()- 200)
// }catch(err){
//   log(err)
// }

sleep(5000)

for(var i = 0;i< params.times;i++){
  if(isFighting()){
    toast('战斗中...')
  }else{
    toast(`开始第${i+1}轮鬼`)
    findTextAndClick('日常-',{region:'rightHalf'})
    sleep(10000)
    // 如果10秒后还没有在战斗中 说明没有点击到任务
    if(!isFighting()){
      findTextAndClick('捉拿',{region:'rightHalf'})
    }
  }

  sleep(9 * 60 * 1000)
  while(true){
    if(hasText('少侠已经捉完')){
      break;
    }
    sleep(30 * 1000)
  }
  findTextAndClick('确定');
  sleep(10000)
  clickImageTemplate('zgrw.png',{region:'rightHalf'});
  sleep(3000)
  randomClick()
}

