auto();

const {findTextAndClick,isFighting,clickImagePoint,findImageTemplatePoints,isHasImageTemplate,clickRect,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')

// 判断是否在战斗中
function isFight(){
  while(true){
    sleep(20000) // 每隔20秒判断是否在战斗中
    if(!isFighting()){
      break;
    }
    log('还在战斗中...')
  }
}
// 普通
function taoHaiQu(){
  for(let i = 0;i < 3;i++){
    let res = findTextAndClick('动画',{isRepeat:true,region:'rightHalf'})
    // 如果没有跳过字眼 则等等下一个普通
    if(!res){
      sleep(3000)
    }else{
      sleep(6000)
    }
    const res2 = findTextAndClick('普通',{isRepeat:true,region:'rightHalf'});
    sleep(6000)
    if(!res2){
      if(hasText('桃花')){
        findTextAndClick('桃花')
        sleep(10000)
        
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
        sleep(10000)
        
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
      }else{
        randomClick()
      }
    }else{
      let res3 = clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
      if(!res3){
        // 如果此时还没有 就是文案太长了 需要自定义文案调整 此处是流沙净 普通处 文案太长了
        if(hasText('流沙')){
          findTextAndClick('什么妖怪')
        }else if(hasText('明珠')){

        }
      }
    }
    isFight()
  }
  sleep(2000)
  findTextAndClick('动画',{isRepeat:true,region:'rightHalf'});

  if(hasText('桃花')){
    findTextAndClick('桃花')
    sleep(10000)
    clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    isFight()
    findTextAndClick('动画',{isRepeat:true,region:'rightHalf'});
    sleep(7000)
    findTextAndClick('桃花')
  }

  sleep(9000)
  const res4 = findTextAndClick('普通',{isRepeat:true,region:'rightHalf'});
  if(!res4){
    sleep(1000)
    // 绿烟如梦是没有普通字眼的
    findTextAndClick('如梦',{region:'rightHalf'})
    sleep(2000)
  }
}

// 如果有X号则点击关闭
function clickClosePoint(){
  if(isHasImageTemplate('xhao.jpg')){
    log('有一个x号，点击关闭')
    clickImageTemplate('xhao.jpg',{region:'rightBottomHalf'})
  }
}
// taoHaiQu()

// 普通副本
function normalFuBen(){
  for(let i = 0;i<3;i++){
    clickClosePoint()
    sleep(2000)
    clickImageTemplate('changAnCheng.png',{region:'leftTopHalf'})
    sleep(3000)
    const result = clickImageTemplate('bxxz.jpg')
    log(result,'result')
    if(!result){
      sleep(2000)
      clickImageTemplate('ytg.jpg')
      sleep(5000)
      randomClick()
      sleep(2000)
      clickImageTemplate('changAnCheng.png',{region:'leftTopHalf'})
      sleep(2000)
      clickImageTemplate('bxxz.jpg')
    }
    sleep(7000)
    clickImageTemplate('xuanZheFuBen.jpg',{isRepeat:true})
    sleep(2000)
    const arr = findImageTemplatePoints('jingRu.jpg');
    log(arr,'arr');
    clickImagePoint(arr[i])
    sleep(3000)
    taoHaiQu()
  }
}
normalFuBen()
// 侠士副本
function xiaShiFuBen(){
  log('执行侠士副本')
  findTextAndClick('侠士',{region:'rightHalf'})
  sleep(7000)
  for(let i =0;i<2;i++){
    clickClosePoint();
    sleep(1000)
    const arr = findTextRect('进入');
    clickRect(arr[i],{})
    sleep(5000)
    for(let i = 0;i<3;i++){
      const res = findTextAndClick('跳过',{isRepeat:true})
      sleep(7000)
      findTextAndClick('侠士',{region:'rightHalf'})
      sleep(5000)
      clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf'});
      isFight()
    }
    // 战斗中
    findTextAndClick('跳过');
    // 播放诗外加奖励
    sleep(15000)
    findTextAndClick('侠士',{region:'rightHalf'})
    sleep(3000)
  }
}
// xiaShiFuBen()
