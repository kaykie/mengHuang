auto();
const {findTextAndClick,gmlkitOcr,findImageTemplatePoint,randomClick,clickImageTemplate,findTextRect,hasText} = require('/sdcard/mh/templateImages/util.js')



if(hasText('少侠已经') || hasText('已经捉完') || hasText('1轮鬼')){
  log(111)
}
// var h = device.height;
// var w = device.width;
// setScreenMetrics(w,h);
// log('h:',h,w)
// var ratioX = device.width/1080
// var ratioY = device.height/2400
// log(ratioX,ratioY)

// log(111)
// let originImg = images.read("./images/sample5.jpg")
// // let img = images.grayscale(originImg)

// // let findArr = gmlkitOcr(img,{region:''})
// // log(JSON.stringify(findArr))
// var temp = images.read(`./images/xuanZheFuBen.jpg`);
// // const point = images.matchTemplate(originImg,temp,{
// //     max:3
// // })

// var originImg = images.read(`./images/sample5.jpg`);
// // var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();
// var hRatio = 2460 / 2400;
// var wRatio = 1080 / 1080;
// var smallTemp = images.scale(temp,wRatio,hRatio)

// let p = findImage(originImg,smallTemp);
// // var p = findImage(originImg,temp)
// log(p)

// const pointArr = [];
// let map = new Map();

// point.points.forEach(item => {
//     if(!map.has(item.x + ',' + item.y)){
//         map.set(item.x + ',' + item.y, true);
//     }
// });

// let uniqueArray = Array.from(map.keys()).map(key => {
//     return {x: parseFloat(key.split(',')[0]), y: parseFloat(key.split(',')[1])}
// });
// log(uniqueArray)


// function warp(callback){
//     for(let i = 0;i<10;i++){
//         callback()
//         log(i)
//         if(i === 5){
//             global.robotStop()
//             break;
//         }
//     }
// }

// warp(function(){
//     sleep(2000)
//     log(666)
// })

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
//长距离测试
// function swipeUp () {
//     var a = device.width;
//     var b = device.height;
//     swipe(a * 0.5, b * 0.8, a * 0.5, b * 0.2, 500);
// }


// var isClockIn = false
// function clickClockIn(){
//     if(hasText('上班打卡')){
//         findTextAndClick('上班打卡')
//         sleep(800)
//         if(hasText('打卡成功')){
//             toastLog('打卡成功')
//         }else{
//             toastLog('打卡失败')
//         }
//     }else{
//         isClockIn = true
//         log('已打卡啦！')
//     }
// }

// // device.keepScreenDim(365 * 24 * 3600 * 1000)
// function clockIn(){
//     if(!device.isScreenOn()){
//         device.wakeUp();
//         sleep(1000)
//         var a = device.width;
//         var b = device.height;
//         swipe(a * 0.5, b * 0.5, a * 0.5, b * 0.2, 500);

//         var password = "00000"  //这里输入你手机的密码
//         for(var i = 0; i < password.length; i++){
//             var p = text(password[i].toString()).findOne().bounds();
//             click(p.centerX(), p.centerY());
//             sleep(100);
//         }
//     }
//     sleep(1000)
//     launchApp('飞书')
//     if(hasText('考勤规则')){
//         clickClockIn()
//         // global.robotStop()
//     }
//     sleep(1000)
//     var time = 0
//     while(!hasText('工作台') && time < 5){
//         back()
//         log('未找到工作台')
//         sleep(2000)
//         time++
//     }
//     click('工作台')
//     sleep(1000)
//     if(hasText('假勤')){
//         click('假勤')
//     }else{
//         swipeUp()
//         sleep(1000)
//         click('假勤')
//     }
//     sleep(3000)
//     clickClockIn()
// }

// var interval = setInterval(function(){
//     var date = new Date()
//     if(date.getHours() == 14 && date.getMinutes() == 17){
//         clockIn()
//     }
//     if(isClockIn){
//         log('已打卡，清除自执行')
//         clearInterval(interval) 
//     }
// },10 * 1000)

