auto();

if(!requestScreenCapture()){
  toastLog('获取截图权限失败');
  exit()
}

launchApp('梦幻西游')

home();

sleep(2000)

home()

// sleep(1000)

// var img = captureScreen();

// var result = paddle.ocr(img)

// toastLog(result)


var btn = text('梦幻西游').findOne();
btn.click()
