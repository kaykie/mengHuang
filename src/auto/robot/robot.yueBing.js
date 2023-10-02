auto()

const {findTextAndClick,clickRect,clickImagePoint,findImageTemplatePoint,clickImageTemplate,findTextRect,hasText} = require('util.js')

let buyFirstPoint = {},
buySecondPoint = {},
zhongQiuYueBingPoint = {},
yueBingPoint = {}
while(true){
  sleep(300);
  let res = findTextAndClick('梦幻');
  console.log(res)
  if(res){
    if(buyFirstPoint.bounds){
      clickRect(buyFirstPoint)
    }else{
      let pointArr = findTextRect('购买');
      buyFirstPoint = pointArr[1]
    }
    
    sleep(100);
    if(buySecondPoint.bounds){
      clickRect(buySecondPoint)
    }else{
      let arr = findTextRect('购买');
      buySecondPoint = arr[1]
    }
  }else{
    if(zhongQiuYueBingPoint.x){
      clickImagePoint(zhongQiuYueBingPoint)
    }else{
      zhongQiuYueBingPoint = findImageTemplatePoint('zhongQiuYueBing.jpg',{
        region:'rightTopHalf'
      })
      clickImagePoint(zhongQiuYueBingPoint)
    }
    sleep(300)
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
