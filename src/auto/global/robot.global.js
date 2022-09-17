// 全局方法封装
function showLog () {
  app.startActivity("console")
}
global.showLog = showLog



events.broadcast.on('callJs', function (str) {
  callJs(str)
});

function jsCall (str) {
  events.broadcast.emit('callJs', str);
}
global.jsCall = jsCall

function jsVal (key, val) {
  val = typeof val === 'object' ? `JSON.parse('${JSON.stringify(val)}')` : `"${val}"`
  jsCall(`${key}=${val}`)
}

global.jsVal = jsVal


global.runRobot = function runRobot (params) {
  toastLog('机器人已加载, 请打开App对应页面, 点击开始!')
  global.curRobot = function () {
    runRobotNow(params)
  }
}

global.runRobotNow = function runRobotNow (params) {
  global.curRobot = function () {
    runRobotNow(params)
  }

  global.robotStop()
  global.robotThread = threads.start(function () {
    global.WEB_PARAMS = params
    eval(params.robot)
  })
}

global.robotStop = function robotStop () {
  global.robotThread && global.robotThread.interrupt()
}

if (!global.backThread) {
  global.backThread = threads.start(() => {
    var timer
    var count = 0
    ui.emitter.on("back_pressed", e => {
      if (ui.web.canGoBack()) {
        ui.web.goBack(); //后退
        e.consumed = true;
        return
      }
      toast("连续按两次返回键退出")

      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        count = 0
      }, 500)
      if (++count >= 2) {
        threads.shutDownAll()
        e.consumed = false
        exit()
      }
      e.consumed = true;
    })
  })
}


/*
**脚本编写:魚離ヤ吥開氺
**脚本作用:仿真随机滑动
**测试系统:安卓8.1
**测试版本:4.1.1 Alpha2
使用说明: 
复制粘贴两个关键函数到自己脚本
sml_move()调用即可
*/
//长距离测试
global.swipeUp = function () {
  var a = device.width;
  var b = device.height;
  swipe(a * 0.5, b * 0.8, a * 0.5, b * 0.2, 500);
}

// 修改web
let idx = 0
setInterval(() => {
  jsVal('$store.count', ++idx)
}, 1000);