auto()

const {findTextAndClick,clickRect,pressRect,clickImagePoint,findImageTemplatePoint,clickImageTemplate,findTextRect,hasText} = require('/sdcard/mh/templateImages/util.js')

toastLog('开始抢铅了!!!')
sleep(2000)
let buyFirstPoint = {},
buySecondPoint = {},
zhongQiuYueBingPoint = {},
yueBingPoint = {}
while(true){
  let res = findTextAndClick('铅');
  sleep(120)
  if(res){
    if(buyFirstPoint.bounds){
      // console.log(buyFirstPoint,'buyFirstPoint')
      pressRect(buyFirstPoint)
    }else{
      let pointArr = findTextRect('购买');
      buyFirstPoint = pointArr[1]
      pressRect(buyFirstPoint)
    }
    sleep(300);
    if(buySecondPoint.bounds){
      // console.log(buySecondPoint,'buySecondPoint')
      pressRect(buySecondPoint)
    }else{
      let arr = findTextRect('购买');
      buySecondPoint = arr[1]
      pressRect(buySecondPoint)
    }
    sleep(120)
  }else{
    if(zhongQiuYueBingPoint.bounds){
      pressRect(zhongQiuYueBingPoint)
    }else{
      let pointArr2 = findTextRect('采矿')
      log(pointArr2,'pointArr2')
      zhongQiuYueBingPoint = pointArr2[0]
      pressRect(zhongQiuYueBingPoint)
    }
    sleep(100)
    if(yueBingPoint.bounds){
      clickImagePoint(yueBingPoint);
    }else{
      yueBingPoint = findImageTemplatePoint('qiang.jpg')
      clickImagePoint(yueBingPoint)
    }
    sleep(100);
  }
}
