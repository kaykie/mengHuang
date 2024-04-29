auto()

const {findTextAndClick,clickRect,pressRect,clickImagePoint,findImageTemplatePoint,clickImageTemplate,findTextRect,hasText} = require('/sdcard/mh/templateImages/util.js')

let buyFirstPoint = {},
buySecondPoint = {},
zhongQiuYueBingPoint = {},
yueBingPoint = {}
while(true){
  let res = findTextAndClick('梦幻');
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
    sleep(90);
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
    if(zhongQiuYueBingPoint.x){
      clickImagePoint(zhongQiuYueBingPoint)
    }else{
      zhongQiuYueBingPoint = findImageTemplatePoint('zhongQiuYueBing.jpg',{
        region:'rightTopHalf'
      })
      clickImagePoint(zhongQiuYueBingPoint)
    }
    sleep(100)
    if(yueBingPoint.x){
      clickImagePoint(yueBingPoint)
    }else{
      yueBingPoint = findImageTemplatePoint('yueBing.jpg',{
        region:'rightTopHalf'
      })
      clickImagePoint(yueBingPoint)
    }
  }
}
