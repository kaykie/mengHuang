auto();

const {findTextAndClick,isFightingCallback,clickClosePoint,isFighting,clickImagePoint,findImageTemplatePoints,isHasImageTemplate,clickRect,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')

toastLog('即将开始自动三本啦!!')
sleep(2000)
// 判断是否在战斗中
function isFight(){
  while(true){
    sleep(10000) // 每隔20秒判断是否在战斗中
    if(!isFighting()){
      break;
    }
    log('还在战斗中...')
  }
}

// 在副本战斗中，在点击进入战斗的时候 可能会出现对话  需要快速跳过
function isFuBengFight(){
  if(isHasImageTemplate('fuBengFight.jpg')){
    // 因为副本在进入在战斗的时候 可能会出现对话
    for(var i = 0; i<8;i++){
      randomClick()
      sleep(800)
    }
  }
}

var params = global.WEB_PARAMS.params

// 非普通 一些特殊情况执行
function specialFuBen(){
  if(hasText('桃花')){
    findTextAndClick('桃花')
    sleep(6000)
    if(isHasImageTemplate('commonBtn.jpg')){
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    }else{
      // 桃花定情这个副本有时候是需要随机点击的
      randomClick()
      sleep(800)
      randomClick()
      sleep(800)
      randomClick()
      sleep(800)
      randomClick()
      sleep(800)
      findTextAndClick('桃花')
      sleep(3000)
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    }
  }else if(hasText('如梦')){
  // 绿烟如梦是没有普通字眼的
    findTextAndClick('如梦')
    sleep(6000)
    if(isHasImageTemplate('commonBtn.jpg')){
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    }else{
      // 绿烟如梦这个副本有时候是需要随机点击的
      randomClick()
      sleep(800)
      randomClick()
      sleep(800)
      randomClick()
      sleep(800)
      randomClick()
      sleep(800)
      findTextAndClick('如梦')
      sleep(3000)
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    }
  }else if(hasText('')){
    findTextAndClick('隐藏任务')
    sleep(5000)
    if(isHasImageTemplate('commonBtn.jpg')){
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    }
  }else{
    randomClick()
  }
}

// 是否已经结束
function isOver(){
  return !hasText('动画') && isHasImageTemplate('guaji.jpg',{region:'leftTopHalf'})
}
// jian
// 普通
function taoHaiQu(){
  //  一般一个副本只有3次战斗,如果回到了长安城 需要跳出循环
  for(let i = 0;i < 15;i++){
    // 如何检测到了长安城 则跳出 
    if(isOver()){
      log('检测到长安城了')
      break;
    }else{
      log('未检测到长安城')
    }
    isFightingCallback(function(){
      if(isOver()){
        log('检测到长安城了3')
        return true
      }else{
        log('未检测到长安城3')
      }
      let res = findTextAndClick('动画',{isRepeat:true,region:'rightHalf'})
      // 如果没有跳过字眼 则等等下一个普通
      if(!res){
        sleep(3000)
      }else{
        sleep(5000)
      }
      const res2 = findTextAndClick('普通',{region:'rightHalf'});
      sleep(5000)
      if(!res2){
        specialFuBen()
      }else{
        let res3 = clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf'});
        if(!res3){
          // 如果此时还没有 就是文案太长了 需要自定义文案调整 此处是流沙净 普通处 文案太长了
          if(hasText('流沙')){
            findTextAndClick('什么妖怪')
          }else if(hasText('明珠')){
  
          }
        }
      }
      sleep(1000)
      isFuBengFight()
    })
    // 如何检测到了长安城 则跳出 
    if(isOver()){
      log('检测到长安城了2')
      break;
    }else{
      log('未检测到长安城了2')
    }
    isFight()
    // 重复跳过动画与点击普通按钮动作，万一上一次没有执行成功，需要不断去循环重复执行 如果超过10次还都没有执行成功到下一步 说明代码出错了，直接退出
  }
}

// 到选择普通副本流程
function normalEnterToSelect(){
  clickImageTemplate('changAnCheng.png',{region:'leftTopHalf'})
  sleep(1500)
  var result = clickImageTemplate('bxxz.jpg',{region:'leftHalf'})
  log(result,'result')
  
  if(!result){
    let result2 = clickImageTemplate('xz.png',{region:'leftHalf'});
    if(!result2){
      const result3 = clickImageTemplate('xx.png',{region:'leftHalf'})
      if(!result3){
        sleep(2000)
        clickImageTemplate('ytg.jpg')
        sleep(5000)
        randomClick()
        sleep(2000)
        clickImageTemplate('changAnCheng.png',{region:'leftTopHalf'})
        sleep(2000)
        clickImageTemplate('bxxz.jpg')
      }
    }
  }
  sleep(7000)
  clickImageTemplate('xuanZheFuBen.jpg',{isRepeat:true})
  sleep(2000)
  var arr = findImageTemplatePoints('jingRu.jpg');
  log(arr,'arr');
  return arr
}

// 普通副本
function normalFuBen(){
  for(var i = 0;i<3;i++){
    log('执行第'+ (i+1) +'个副本任务！')
    clickClosePoint()
    sleep(1500)
    
    var arr = normalEnterToSelect()
    if(arr.length === 0){
      for(var j = 0;j<4;j++){
        randomClick();
        sleep(1500);
        arr = normalEnterToSelect()
        if(arr.length >=3){
          break;
        }
      }
      
    }
    clickImagePoint(arr[i])
    sleep(3000)
    taoHaiQu()
  }
}

// 侠士副本
function xiaShiFuBen(){
  log('执行侠士副本')
  for(let i =0;i<2;i++){
    clickClosePoint();
    findTextAndClick('侠士',{region:'rightHalf'})
    sleep(4000)
    const originArr = findTextRect('进入');
    var arr = originArr.filter(item => item.text === '进入')
    log(arr,'找到的进入数组');
    // 如果此处没有找到进入的文案 则循环执行4次 直到找到进入的字眼
    if(arr.length === 0){
      for(var j = 0;j<4;j++){
        randomClick()
        sleep(1000)
        findTextAndClick('侠士',{region:'rightHalf'})
        var againArr = findTextRect('进入');
        arr = againArr.filter(item => item.text === '进入');
        if(arr.length >= 2){
          break;
        }
      }
    }
    clickRect(arr[i],{})
    sleep(5000)
    for(var z = 0;z<10;z++){
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf'});

      const res = findTextAndClick('跳过',{isRepeat:true})
      sleep(5000)
      const res2 = findTextAndClick('侠士',{region:'rightHalf'})
      if(!res2){
        specialFuBen()
      }else{
        sleep(6000)
      }
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf'});
      sleep(1500);
      isFuBengFight();

      if(hasText('点击') || hasText('继续')){
        randomClick()
        sleep(1000)
      }
      // 如何检测到了长安城 则跳出 
      if(isOver()){
        break;
      }
      isFight()
    }
    sleep(3000)
  }
}
sleep(2000)


if(params.check.length === 2){
  xiaShiFuBen()
  sleep(2000)
  normalFuBen()
}else{
  if(params.check.includes('3')){
    normalFuBen()
  }else{
    xiaShiFuBen()
  }
}

