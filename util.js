
function clickRect(rect,text,isLast) {
  sleep(1000);
  log(rect)
  if (rect.text)
    log(`点击"${rect.text}"`);
  // 按一定比例将范围缩小在中央位置
  // 0 < scale <= 1, 越小表示越集中于中间
  let scale = 0.8;
  let x,y
  if(isLast){
    x = rect.bounds.right - Math.round(random() * text.length * 30 * scale);
    y = Math.round((random() - 0.5) * rect.bounds.height() * scale + rect.bounds.centerY());
  }else{
    x = Math.round((random() - 0.5) * rect.bounds.width() * scale + rect.bounds.centerX());
    y = Math.round((random() - 0.5) * rect.bounds.height() * scale + rect.bounds.centerY());
  }
  log(x,y);
  click(x, y);
}

// 点击模板图片
function clickImageTemplate(name){
  var img = captureScreen();
  var temp = images.read(`/sdcard/aj/${name}`);
  var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,hRatio,wRatio)
  var p = findImage(img,smallTemp);
  click(p.x + Math.round(Math.random() * imgWidth),p.y + Math.round(Math.random() * imgHeight))
  log(p,'16')
  sleep(1000)
  img.recycle();
  temp.recycle()
  smallTemp.recycle()
}

/**
 * 
 * @param {点击文字} text 
 * @param {延迟时间点击} delay 
 * @param {离中心点位置} scale 
 */
function findTextAndClick(text,isLast){
  var img = captureScreen();
  if (img) {
      var result = gmlkit.ocr(img,'zh');
      log(result)
      var a = result.find(3,e => e.text.indexOf(text) >= 0)
      if(a){
        clickRect(a,text,isLast)
        return true
      }else{
        log('没找到')
        return false
      }
      // 回收图片
      img.recycle();
  } else {
      log("截图失败");
  }
}

// 寻找文字位置
function findTextRect(text){
  var img = captureScreen();
  if (img) {
      var result = gmlkit.ocr(img,'zh');
      log(result)
      var a = result.find(3,e => e.text.indexOf(text) >= 0)
      log(a)
      // 回收图片
      img.recycle();
      return a
  } else {
      log("截图失败");
  }
}


function randomClick(){
  const isAdd = Math.random() > 0.5;
  const width = device.width / 2,height = device.height / 2;
  let x,y
  if(isAdd){
    x = width + 400 * Math.random();
    y = height + 200 * Math.random()
  }else{
    x = width - 400 * Math.random();
    y = height - 200 * Math.random()
  }
  click(y,x)
}

// 判断当前是否存在文字
function hasText(text){
  var img = captureScreen();
  if (img) {
      var result = gmlkit.ocr(img,'zh');
      log(result)
      var a = result.find(3,e => e.text.indexOf(text) >= 0)
      // 回收图片
      img.recycle();
      return !!a
  } else {
      log("截图失败");
  }
}

// 寻找文字位置 仅返回寻找到的 目标位置
function findTextRect(text){
  var img = captureScreen();
  if (img) {
      var result = gmlkit.ocr(img,'zh');
      log(result)
      var a = result.find(3,e => e.text.indexOf(text) >= 0)
      log(a)
      // 回收图片
      img.recycle();
      return a
  } else {
      log("截图失败");
  }
}

module.exports = {
  findTextAndClick,
  randomClick,
  clickImageTemplate,
  findTextRect,
  hasText
}