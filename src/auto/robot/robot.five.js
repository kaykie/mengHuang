auto();
var h = device.height;
var w = device.width;
// setScreenMetrics(w,h);

const {findTextAndClick,findTextRectrandomClick,clickImageTemplate,hasText} = require('util.js')
const ratioX = device.width/1800
const ratioY = device.height/2400
log(ratioX,ratioY)


sleep(3000)

home();

sleep(2000)

home()

sleep(2000)



var btn = text('梦幻西游').findOne();

var center = btn.bounds();
try{
  click(center.centerX(),center.centerY()- 200)
}catch(err){
  log(err)
}

sleep(10000)

// randomClick();

// sleep(10000)

// findTextAndClick('红豆相思')
// sleep(3000)
// findTextAndClick('红豆相思')
// sleep(3000)
// findTextAndClick('菜叶')

// sleep(10000)

// findTextAndClick('活动',true)
// sleep(2000)

// sleep(5000)
// findTextAndClick('取消')



// clickImageTemplate('huodong.png')

// sleep(3000)






function getRandomNumber(num){
  return Math.round(Math.random() * num)
}

// sleep(3000)
// var textRect = findTextRect('捉鬼任务')

// var right = 290,top = 25,textWidth = 130,textHeight = 70;
// var x = textRect.bounds.left + right + getRandomNumber(textWidth),y = textRect.bounds.top + top + getRandomNumber(textHeight);
// log(x,y)
// click(x,y)

// sleep(5000)
// clickImageTemplate('zgrw.png')

// sleep(2000)

// var bool = hasText('队伍人数不足')
// if(bool){
//   findTextAndClick('取消')
// }

// sleep(2000)

// randomClick()

// sleep(2000)



for(var i = 0;i< 10;i++){
  findTextAndClick('日常-捉')
  sleep(9 * 60 * 1000)
  while(true){
    if(hasText('少侠已经捉完')){
      break;
    }
    sleep(30 * 1000)
  }
  findTextAndClick('确定');
  sleep(10000)
  clickImageTemplate('zgrw.png');
  sleep(3000)
  randomClick()
}