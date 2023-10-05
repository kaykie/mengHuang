auto();

const {findTextAndClick,isHasImageTemplate,clickRect,randomClick,clickImageTemplate,hasText,findTextRect} = require('util.js')

// 判断是否在战斗中
function isFight(){
  while(true){
    sleep(20000) // 每隔20秒判断是否在战斗中
    if(!isHasImageTemplate('isFight.jpg',{region:'leftTopHalf'})){
      break;
    }
    log('还在战斗中...')
  }
}
// 普通
function taoHaiQu(){
  for(let i = 0;i < 3;i++){
    let res = findTextAndClick('跳过',{isRepeat:true})
    // 如果没有跳过字眼 则等等下一个普通
    if(!res){
      sleep(3000)
    }else{
      sleep(6000)
    }
    const res2 = findTextAndClick('普通',{isRepeat:true});
    sleep(6000)
    if(!res2){
      randomClick()
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
  findTextAndClick('跳过',{isRepeat:true});
  // 诗
  sleep(9000)
  findTextAndClick('普通',{isRepeat:true});
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
    // findTextAndClick('长安城')
    sleep(3000)
    const result = clickImageTemplate('bxxz.jpg')
    if(!result){
      sleep(2000)
      clickImageTemplate('ytg.jpg')
      sleep(5000)
      randomClick()
      sleep(2000)
      // findTextAndClick('长安城')
      clickImageTemplate('changAnCheng.png',{region:'leftTopHalf'})
      sleep(2000)
      clickImageTemplate('bxxz.jpg',{
        isRepeat:true
      })
    }
    sleep(7000)
    clickImageTemplate('xuanZheFuBen.jpg',{isRepeat:true})
    sleep(2000)
    const arr = findTextRect('进入');
    log(arr,'arr');
    clickRect(arr[i],{})
    sleep(3000)
    taoHaiQu()
  }

}
normalFuBen()
// 侠士副本
function xiaShiFuBen(){
  findTextAndClick('侠士')
  sleep(5000)
  const arr = findTextRect('进入');
  log(arr,'arr');
  clickRect(arr[1],{})
  sleep(5000)
  for(let i = 0;i<3;i++){
    const res = findTextAndClick('跳过',{isRepeat:true})
    sleep(7000)
    findTextAndClick('侠士')
    sleep(5000)
    clickImageTemplate('commonBtn.jpg');
    isFight()
  }
  // 战斗中
  findTextAndClick('跳过');
  // 播放诗
  sleep(6000)
  findTextAndClick('侠士')
}
// xiaShiFuBen()
