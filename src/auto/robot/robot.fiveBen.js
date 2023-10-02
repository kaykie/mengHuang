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

  for(let i = 0;i < 2;i++){
    let res = findTextAndClick('跳过')
    if(!res){
      sleep(3000)
    }else{
      sleep(6000)
    }
    findTextAndClick('普通');
    sleep(4000)
    clickImageTemplate('commonBtn.jpg',{region:'rightBottomHalf',isRepeat:true});
    isFight()
  }
  findTextAndClick('跳过',{isRepeat:true});
  // 诗
  sleep(9000)
  findTextAndClick('普通',{isRepeat:true});
}

for(let i = 0;i<3;i++){
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
  clickImageTemplate('xuanZheFuBen.jpg')
  sleep(2000)
  const arr = findTextRect('进入');
  log(arr,'arr');
  clickRect(arr[0],{})
  sleep(3000)
  taoHaiQu()
}



function mingZhuHuang(){
  findTextAndClick('跳过')
  sleep(5000)
  findTextAndClick('侠士')
  sleep(5000)
  clickImageTemplate('commonBtn.jpg');
  // 战斗中
  findTextAndClick('跳过')
  sleep(3000)
  findTextAndClick('侠士')
  sleep(5000)
  clickImageTemplate('commonBtn.jpg');
  // 战斗中
  findTextAndClick('跳过');
  sleep(3000)
  findTextAndClick('侠士')
  sleep(5000)
  clickImageTemplate('commonBtn.jpg');
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