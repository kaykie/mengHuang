auto();

const {findTextAndClick,randomClick,clickImageTemplate,hasText} = require('util.js')


sleep(2000)
clickImageTemplate('huodong.png')
sleep(2000)
findTextAndClick('日常活动');
sleep(2000);


let copyObj;// 副本对象
// 找到随便一个副本的坐标
function findCopyObj(){
  var img = captureScreen();
  var result = gmlkit.ocr(img,'zh');
  const arr = JSON.parse(JSON.stringify(result));
  const copyList = ['流沙净','琉璃碎','金蝉心','二重影','万丈山'];
  let obj = {};
  for(let i = 0;i<arr.children.length;i++){
    let item = arr.children[i];
    if(copyList.find(cell => item.text.indexOf(cell) >= 0)){
      obj = item;
      break;
    }
  }
  return obj
}
copyObj = findCopyObj()

log(copyObj,'obj')
sleep(1000)

while(JSON.stringify(copyObj) === '{}'){
  swipeHorizontalUp()
  sleep(2000)
  findCopyObj()
}

const joinArray = []
for(let i = 0;i<parseString.children.length;i++){
  let item = parseString.children[i];
  if(item.text.indexOf('参加')){
    joinArray.push({
      index:i,
      top:Math.abs(obj.bounds.top - item.bounds.top),
      right:Math.abs(obj.bounds.right - item.bounds.left),
    });
  }
}

function findMinimumBoundingBox(a) {
  let minTop = a[0].top;
  let minRight = a[0].right;
  let minIndex = 0;
  
  for (let i = 1; i < a.length; i++) {
    if (a[i].top < minTop) {
      minTop = a[i].top;
      minIndex = i;
    }
    if (a[i].right < minRight) {
      minRight = a[i].right;
    }
  }
  return a[minIndex]
}

const minArray = findMinimumBoundingBox(joinArray)

log(minArray,'minArray')


// const joinTextArray = parseString.children.filter(item => item.text.indexOf('参加') >= 0);
// const jinObj = parseString.children.find(item => item.text.indexOf('金蝉心') >= 0);
// log(JSON.stringify(jinObj),'jinObj')
// log(JSON.stringify(joinTextArray),'joinTextArray')

// function randomSleep(){
//   const num = Math.random() * 3 + 2;
//   sleep(Math.round(num));
// }
// // 金禅心普通
// function jcxPT(){
//   toastLog('即将进入金禅心普通');
//   findTextAndClick('剧情动画');
//   randomSleep();
//   clickImageTemplate('./images/jcxPT/2.png');// 点击同门相争
//   randomSleep();
//   sleep(2000);
//   findTextAndClick('尔等才是')
//   sleep(40);
//   while(true){
//     if(hasText('剧情动画')){
//       findTextAndClick('剧情动画');
//       break;
//     }
//     randomSleep()
//   }
//   randomSleep();
//   clickImageTemplate('./images/jcxPT/4.png')
//   randomSleep();
//   clickImageTemplate('./images/jcxPT/5.png');
//   sleep(40);
//   while(true){
//     if(hasText('剧情动画')){
//       findTextAndClick('剧情动画');
//       break;
//     }
//     randomSleep()
//   }
//   randomSleep();
//   clickImageTemplate('./images/jcxPT/6.png')
//   randomSleep();
//   clickImageTemplate('./images/jcxPT/7.png')
//   while(true){
//     if(hasText('剧情动画')){
//       findTextAndClick('剧情动画');
//       break;
//     }
//     randomSleep()
//   }
//   clickImageTemplate('./images/jcxPT/8.png')
//   toastLog('完成金禅心普通副本');
// }