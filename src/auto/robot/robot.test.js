auto();
const {findTextAndClick,gmlkitOcr,findImageTemplatePoint,randomClick,clickImageTemplate,findTextRect,hasText} = require('util.js')

var h = device.height;
var w = device.width;
// setScreenMetrics(w,h);
log('h:',h,w)
var ratioX = device.width/1080
var ratioY = device.height/2400
log(ratioX,ratioY)

log(111)
let originImg = images.read("./images/sample3.jpg")
// let img = images.grayscale(originImg)

// let findArr = gmlkitOcr(img,{region:''})
// log(JSON.stringify(findArr))
var temp = images.read(`./images/jingRu.jpg`);
const point = images.matchTemplate(originImg,temp,{
  max:3
})
const pointArr = [];
let map = new Map();

point.points.forEach(item => {
    if(!map.has(item.x + ',' + item.y)){
        map.set(item.x + ',' + item.y, true);
    }
});

let uniqueArray = Array.from(map.keys()).map(key => {
    return {x: parseFloat(key.split(',')[0]), y: parseFloat(key.split(',')[1])}
});
log(uniqueArray)
// 新增：自定义模型路径(必须是绝对路径), files.path() 将相对路径转为绝对路径
// let myModelPath = files.path("./models");
// 识别图片中的文字，返回完整识别信息（兼容百度OCR格式）。
// let result = paddle.ocr(img, myModelPath)
// log("完整识别信息: " + JSON.stringify(result))
// // 识别图片中的文字，只返回文本识别信息（字符串列表）。当前版本可能存在文字顺序错乱的问题 建议先使用detect后自行排序
// const stringList = paddle.ocrText(img, myModelPath)
// log("文本识别信息: " + JSON.stringify(stringList))
// let resultGml = gmlkit.ocr(img,'zh')
// log(JSON.stringify(resultGml),'gmlkit')
// let arr = JSON.parse(JSON.stringify(resultGml));
// let findArray = []
// arr.children.forEach(item =>{
//   if(item.text.indexOf('百') >= 0){
//     findArray.push(item)
//   }
// })
// log(findArray)
// // 回收图片
// img.recycle()