auto();
var h = device.height;
var w = device.width;
// setScreenMetrics(w,h);

const {findTextAndClick,clickClosePoint,isFighting,randomClick,clickImageTemplate,isHasImageTemplate,hasText} = require('/sdcard/mh/templateImages/util.js')
const ratioX = device.width/1800
const ratioY = device.height/2400
log(ratioX,ratioY)


var params = global.WEB_PARAMS.params


for(var i = 29;i>0;i--){
  sleep(1000)
  ui.run(function(){
    log(global.floatyWindow.stopText.getText())
    global.floatyWindow.stopText.setText(i + '')
  });
}

ui.run(function(){
  global.floatyWindow.stopText.setText('停止')
})