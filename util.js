
// 横屏情况
function getRegion(regionStr){
  const width = device.width / 2,height = device.height / 2;
  let region = [0,0]
  if(regionStr === 'rightBottomHalf'){
    region = [height,width]
  }else if(regionStr === 'rightTopHalf'){
    region = [height,0,height,width]
  }else if(regionStr === 'leftTopHalf'){
    region = [0,0,height,width]
  }else if(regionStr === 'leftBottomHalf'){
    region = [0,width,height,width]
  }else if(regionStr === 'rightHalf'){
    region = [height,0,height,width * 2]
  }else if(regionStr === 'leftHalf'){
    region = [0,0,height,width * 2]
  }else if(regionStr === 'center'){
    // region = 
  }
  return region
}



function gmlkitOcr(img,options){
  if(!options){
    options = {}
  }
  let regionStr = options.region || '';
  let region = getRegion(regionStr)
  let imgWidth = img.getWidth()
  let imgHeight = img.getHeight()
  log(imgWidth,imgHeight)
  let regionWidth = region[2] ? region[2]: imgWidth - region[0]
  let regionHeight = region[3] ? region[3]: imgHeight - region[1]
  log(region[0],region[1],regionWidth,regionHeight)
  let newImg = images.clip(img,region[0],region[1],regionWidth,regionHeight)
  let result = gmlkit.ocr(newImg,'zh');
  let arr = JSON.parse(JSON.stringify(result));
  log(arr)
  if(regionStr){
    const newArr = [];
    for(let i = 0;i<arr.children.length;i++){
      let item = arr.children[i];
      newArr.push({
        children:item.children,
        confidence:item.confidence,
        language:item.language,
        level:item.level,
        text:item.text,
        bounds:{
          bottom:item.bounds.bottom + region[1],
          top:item.bounds.top + region[1],
          left:item.bounds.left + region[0],
          right: item.bounds.right + region[0]
        }
      })
    }
    return newArr
  }
  return arr.children
}
// 点击找到的文字
function clickRect(rect,options) {
  if(!options){
    options = {}
  }
  // let text = options.text;
  // let textNum = options.textNum
  // log(rect)
  if(!rect){
    return
  }
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
  x = Math.round((random() - 0.5) * width * scale + centerX);
  y = Math.round((random() - 0.5) * height * scale + centerY);
  click(x, y);
}

// 点按目标点
function pressRect(rect,options) {
  if(!options){
    options = {}
  }
  // let text = options.text;
  // let textNum = options.textNum
  // log(rect)
  // if (rect.text)
  //   log(`点击"${rect.text}"`);
  // 按一定比例将范围缩小在中央位置
  // 0 < scale <= 1, 越小表示越集中于中间
  var scale = 0.8;
  var x,y
  var height = rect.bounds.bottom - rect.bounds.top;
  var width = rect.bounds.right - rect.bounds.left;
  var centerY = rect.bounds.top + height / 2;
  var centerX = rect.bounds.left + width / 2;
  x = Math.round((Math.random() - 0.5) * width * scale + centerX);
  y = Math.round((Math.random() - 0.5) * height * scale + centerY);
  
  press(x, y,10);
}

// 点击模板图片
function clickImageTemplate(name,options){
  if(!options){
    options = {}
  }
  let isRepeat = options.isRepeat || false;
  let optionRegion = options.region || [0,0];
  region = getRegion(optionRegion)
  log(region)
  var img = captureScreen();
  var temp = images.read(`/sdcard/mh/templateImages/${name}`);
  var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,wRatio,hRatio)
  let p = findImage(img,smallTemp,{
    region:region
  });
  if(!p){
    log(`未找到${name}的图片`)
    if(isRepeat){
      sleep(3000)
      var newImg = captureScreen();
      sleep(200)
      p = findImage(newImg,smallTemp,{
        region:region
      });
      newImg.recycle()
      if(!p){
        log(`还是未找到${name}的图片`)
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
  log('点击图片',name)
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
  let regionStr = options.region;
  let region = getRegion(regionStr)
  var img = captureScreen();
  var temp = images.read(`/sdcard/mh/templateImages/${name}`);
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,wRatio,hRatio)
  let p = findImage(img,smallTemp,{
    region:region
  });
  log('是否有模板图片',name,!!p)
  return !!p
}

// 找到目标图片点
function findImageTemplatePoint(name,options){
  if(!options){
    options = {}
  }
  let regionStr = options.region || '';
  let threshold = options.threshold || 0.9
  let region = getRegion(regionStr)
  var img = captureScreen();
  var temp = images.read(`/sdcard/mh/templateImages/${name}`);
  var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  log(hRatio,wRatio)
  
  var smallTemp = images.scale(temp,wRatio,hRatio)
  let p = findImage(img,smallTemp,{
    region:region,
    threshold:threshold
  });
  img.recycle();
  temp.recycle()
  smallTemp.recycle()
  log('找目标图片了',name,p)
  return {x:p.x,y:p.y,imgWidth:imgWidth,imgHeight:imgHeight}
}

function findImageTemplatePoints(name,options){
  if(!options){
    options = {}
  }
  let regionStr = options.region || '';
  let threshold = options.threshold || 0.9
  let max = options.max || 3
  let region = getRegion(regionStr)
  var img = captureScreen();
  var temp = images.read(`/sdcard/mh/templateImages/${name}`);
  var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
  var hRatio = device.height / 2400;
  var wRatio = device.width / 1080;
  var smallTemp = images.scale(temp,wRatio,hRatio)
  let points = images.matchTemplate(img,smallTemp,{
    region:region,
    threshold:threshold,
    max:max
  });
  img.recycle();
  temp.recycle()
  smallTemp.recycle()
  let map = new Map();
  points.points.forEach(item => {
      if(!map.has(item.x + ',' + item.y)){
          map.set(item.x + ',' + item.y, true);
      }
  });
  let uniqueArray = Array.from(map.keys()).map(key => {
      return {x: parseFloat(key.split(',')[0]), y: parseFloat(key.split(',')[1]),imgWidth:imgWidth,imgHeight:imgHeight}
  });
  log('找一堆目标图片',name)
  return uniqueArray
}

/**
 * 打到文字并点击
 * @param {点击文字} text 
 * @param {延迟时间点击} delay 
 * @param {options} index如果目标图片上有多个 选择第几个  isRepeat如果没找到是否再找一次
 */
function findTextAndClick(text,options){
  if(!options) options = {}
  let index = options.index || 0;
  let isRepeat = options.isRepeat || false;
  let region = options.region || ''
  let originImg = captureScreen();
  if (originImg) {
      let img = images.grayscale(originImg)
      let arr = gmlkitOcr(img,{region:region});
      let findArray = []
      arr.forEach(item =>{
        if(item.text.indexOf(text) >= 0){
          findArray.push(item)
        }
      })
      console.log(findArray)
      if(isRepeat && findArray.length === 0){
        sleep(5000)
        log('上次未找到，再找一次！')
        var newImg = captureScreen();
        let arr = gmlkitOcr(newImg,{region:region});
        arr.forEach(item =>{
          if(item.text.indexOf(text) >= 0){
            findArray.push(item)
          }
        })
        newImg.recycle()
      }
      img.recycle();
      if(findArray.length > 0){
        clickRect(findArray[index],{text:text})
        return true
      }else{
        log(text,'没找到')
        return false
      }
      // 回收图片
  } else {
      log("截图失败");
  }
}

// 寻找文字位置
function findTextRect(text){
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
      log(text,findArray,'找到的文字列表')
      img.recycle();
      return findArray
      // 回收图片
  } else {
      log("截图失败");
      return []
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
function hasText(text,options){
  sleep(500)
  if(!options) options = {}
  let region = options.region || ''
  var originImg = captureScreen();
  if (originImg) {
      let img = images.grayscale(originImg)
      let arr = gmlkitOcr(img,{region:region});
      let findArray = []
      arr.forEach(item =>{
        if(item.text.indexOf(text) >= 0){
          findArray.push(item)
        }
      })
      console.log(findArray)
      // 回收图片
      img.recycle();
      return findArray.length > 0
  } else {
      log("截图失败");
  }
}

// 判断是否在战斗中
function isFighting(){
  return isHasImageTemplate('fighting.jpg',{region:'rightBottomHalf'}) || isHasImageTemplate('fighting2.jpg',{region:'rightBottomHalf'})
}

// 如果没有在战斗中应该继续执行回调函数
function isFightingCallback(callback){
  var time = 0
  while(!isFighting() && time < 5){
    log('执行'+ time + '次检测是否战斗任务')
    var res = callback()
    time++
    if(res){
      break;
    }
  }
  if(time>=5){
    global.robotStop()
  }
}

// 如果有X号则点击关闭
function clickClosePoint(){
  var time = 0;
  while(true && time < 5){
    if(isHasImageTemplate('xhao.jpg')){
      log('有一个x号，点击关闭');
      sleep(1500)
      clickImageTemplate('xhao.jpg',{region:'rightBottomHalf'})
    }else if(isHasImageTemplate('xhao2.jpg')){
      log('有一个x号，点击关闭,这个x号是擂台提示的');
      sleep(1500)
      clickImageTemplate('xhao2.jpg',{region:'rightHalf'})
    }else if(isHasImageTemplate('xhao3.jpg')){
      log('有一个x号，点击关闭,这个x号是擂台提示的');
      sleep(1500)
      clickImageTemplate('xhao3.jpg')
    }else{
      break;
    }
    time++
  }
}

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

module.exports = {
  clickRect,
  findTextAndClick,
  randomClick,
  clickImageTemplate,
  findTextRect,
  hasText,
  isHasImageTemplate,
  findImageTemplatePoint,
  clickImagePoint,
  pressRect,
  gmlkitOcr,
  isFighting,
  findImageTemplatePoints,
  clickClosePoint,
  isFightingCallback,
  loopFunction
}