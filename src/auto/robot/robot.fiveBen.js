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
// taoHaiQu()

for(let i = 0;i<3;i++){
  log(1111)
  sleep(2000)
  findTextAndClick('长安城')
  sleep(3000)
  const result = clickImageTemplate('bxxz.jpg',{
    isRepeat:true
  })
  if(!result){
    sleep(2000)
    clickImageTemplate('ytg.jpg')
    sleep(5000)
    randomClick()
    sleep(2000)
    findTextAndClick('长安城')
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


// 侠士副本
function xiaShiFuBen(){
  for(let i = 0;i<3;i++){
    const res = findTextAndClick('跳过',{isRepeat:true})
    if(res){

    }
    sleep(5000)
    findTextAndClick('侠士')
    sleep(5000)
    clickImageTemplate('commonBtn.jpg');
  }
  // 战斗中
  findTextAndClick('跳过');
  // 播放诗
  sleep(6000)
  findTextAndClick('侠士')
}


// 琉璃碎
function liuLiSui(){
  findTextAndClick('跳过')
  sleep(3000)
  findTextAndClick('普通');
  sleep(5000)
  clickImageTemplate('commonBtn.jpg');
  // 战斗中
  findTextAndClick('跳过')
  sleep(3000)
  findTextAndClick('普通');
  sleep(5000)
  randomClick(); // 不需要点击按钮 直接进入
  // 战斗中...
  findTextAndClick('跳过')
  sleep(3000)
  findTextAndClick('普通');
  sleep(3000)
  clickImageTemplate('commonBtn.jpg'); // 点击进入战斗
  // 战斗中...
  findTextAndClick('跳过')
  sleep(6000)
  findTextAndClick('普通');
}

// liuLiSui()