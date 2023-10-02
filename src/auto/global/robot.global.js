// 全局方法封装
function showLog () {
  app.startActivity("console")
}
global.showLog = showLog


// if(!){
//   toastLog('获取截图权限失败');
//   exit()
// }

events.broadcast.on('callJs', function (str) {
  callJs(str)
});

// 执行js 方法
function jsCall (str) {
  events.broadcast.emit('callJs', str);
}
global.jsCall = jsCall

// 给js 变量赋值
function jsVal (key, val) {
  val = typeof val === 'object' ? `JSON.parse('${JSON.stringify(val)}')` : `"${val}"`
  jsCall(`${key}=${val}`)
}

global.jsVal = jsVal

// 将脚本和参数挂在global.curRobot, 然后可以在robot.menu.js 悬浮菜单点击开始执行
global.runRobot = function runRobot (params) {
  toastLog('机器人已加载, 请打开App对应页面, 点击开始!')
  global.curRobot = function () {
    runRobotNow(params)
  }
}

// 直接执行脚本
global.runRobotNow = function runRobotNow (params) {
  global.curRobot = function () {
    runRobotNow(params)
  }

  global.robotStop()
  global.robotThread = threads.start(function () {
    log(params)
    global.WEB_PARAMS = params
    eval(params.robot)
  })
}

// 停止脚本
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


//上滑
global.swipeUp = function () {
  var a = device.width;
  var b = device.height;
  swipe(a * 0.5, b * 0.8, a * 0.5, b * 0.2, 500);
}

// 横屏时中心位置上滑
global.swipeHorizontalUp = function () {
  var h = device.width;
  var w = device.height;
  // console.log(a * 0.5, b * 0.5, a * 0.2, b * 0.5)
  swipe(w * 0.5,h * 0.5, w * 0.5, h * 0.2 , Math.floor(Math.random() * 1200));
}

// 修改web
// let idx = 0
// setInterval(() => {
//   jsVal('$store.count', ++idx)
// }, 1000);