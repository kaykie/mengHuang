
// 点击找到的文字
function clickRect(rect,options) {
  if(!options){
    options = {}
  }
  let text = options.text;
  let textNum = options.textNum
  sleep(1000);
  log(rect)
  if (rect.text)
    log(`点击"${rect.text}"`);
  // 按一定比例将范围缩小在中央位置
  // 0 < scale <= 1, 越小表示越集中于中间
  let scale = 0.8;
  let x,y
  let height = rect.bounds.bottom - rect.bounds.top;
  let width = rect.bounds.right - rect.bounds.left;
  let centerY = rect.bounds.top + height / 2;
  let centerX = rect.bounds.left + width / 2;
  if(rect.text.length !== options.textNum){
    
  }
  x = Math.round((random() - 0.5) * width * scale + centerX);
  y = Math.round((random() - 0.5) * height * scale + centerY);
  log(x,y);
  click(x, y);
}

// 点击模板图片
function clickImageTemplate(name,options){
  if(!options){
    options = {}
  }
  let isRepeat = options.isRepeat || false;
  let region = options.region || [0,0];
  const width = device.width / 2,height = device.height / 2;
  if(region === 'rightBottomHalf'){
    region = [height,width]
  }else if(region === 'rightTopHalf'){
    region = [height,0,height,width]
  }
  log(region)
  var img = captureScreen();
  var temp = images.read(`./images/${name}`);
  var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,hRatio,wRatio)
  let p = findImage(img,smallTemp,{
    region:region
  });
  if(!p){
    toastLog(`未找到${name}的图片`)
    if(isRepeat){
      p = findImage(img,smallTemp);
      if(!p){
        toastLog(`还是未找到${name}的图片`)
        return false
      }
    }else{
      return false
    }
  }
  click(p.x + Math.round(imgWidth /4 + Math.random() * imgWidth /4),p.y + Math.round(imgHeight / 4 + Math.random() * imgHeight/4))
  img.recycle();
  temp.recycle()
  smallTemp.recycle()
  return true
}

// 点击找到的图片的位置
function clickImagePoint(p){
  click(p.x + Math.round(p.imgWidth /4 + Math.random() * p.imgWidth /4),p.y + Math.round(p.imgHeight / 4 + Math.random() * p.imgHeight/4))
}

// 在图片中是否有模板图片
function isHasImageTemplate(name,options){
  if(!options){
    options = {}
  }
  let region = options.region || [0,0];
  let width = device.width / 2,height = device.height / 2;
  if(region === 'leftTopHalf'){
    region = [0,0,height,width]
  }else if(region === 'rightTopHalf'){
    region = [height,0,height,width]
  }
  
  var img = captureScreen();
  var temp = images.read(`./images/${name}`);
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,hRatio,wRatio)
  let p = findImage(img,smallTemp,{
    region:region
  });
  return !!p
}

function findImageTemplatePoint(name,options){
  if(!options){
    options = {}
  }
  let region = options.region || [0,0];
  let width = device.width / 2,height = device.height / 2;
  if(region === 'leftTopHalf'){
    region = [0,0,height,width]
  }else if(region === 'rightTopHalf'){
    region = [height,0,height,width]
  }
  
  var img = captureScreen();
  var temp = images.read(`./images/${name}`);
  var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,hRatio,wRatio)
  let p = findImage(img,smallTemp,{
    region:region
  });
  img.recycle();
  temp.recycle()
  smallTemp.recycle()
  return {x:p.x,y:p.y,imgWidth:imgWidth,imgHeight:imgHeight}
}

/**
 * 打到文字并点击
 * @param {点击文字} text 
 * @param {延迟时间点击} delay 
 * @param {options} index如果目标图片上有多个 选择第几个 textNum目标文字数量，因为目标字数可能不同 
 */
function findTextAndClick(text,options){
  if(!options) options = {}
  let index = options.index || 0;
  let textNum = options.textNum || text.length
  let originImg = captureScreen();
  if (originImg) {
      let img = images.grayscale(originImg)
      var result = gmlkit.ocr(img,'zh');
      let arr = JSON.parse(JSON.stringify(result));
      // log(arr,text,'text')
      let findArray = []
      arr.children.forEach(item =>{
        if(item.text.indexOf(text) >= 0){
          findArray.push(item)
        }
      })
      console.log(findArray)
      img.recycle();
      if(findArray.length > 0){
        clickRect(findArray[index],{text:text,textNum:textNum})
        return true
      }else{
        log('没找到')
        return false
      }
      // 回收图片
  } else {
      log("截图失败");
  }
}

// 寻找文字位置
function findTextRect(text){
  var originImg = captureScreen();
  let originImg = captureScreen();
  if (originImg) {
      let img = images.grayscale(originImg)
      var result = gmlkit.ocr(img,'zh');
      let arr = JSON.parse(JSON.stringify(result));
      // log(arr,text,'text')
      let findArray = []
      arr.children.forEach(item =>{
        if(item.text.indexOf(text) >= 0){
          findArray.push(item)
        }
      })
      console.log(findArray)
      img.recycle();
      return findArray
      // 回收图片
  } else {
      log("截图失败");
  }
}


// 中心点向外随机点击
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
      var a = result.find(3,e => e.text.indexOf(text) >= 0)
      // 回收图片
      img.recycle();
      return !!a
  } else {
      log("截图失败");
  }
}

module.exports = {
  clickRect,
  findTextAndClick,
  randomClick,
  clickImageTemplate,
  findTextRect,
  hasText,
  isHasImageTemplate,
  findImageTemplatePoint,
  clickImagePoint
}