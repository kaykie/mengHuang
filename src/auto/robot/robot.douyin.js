auto();
launchApp("抖音"); //请手动打开试试
sleep(3000);

console.log(global.WEB_PARAMS)
var Max = 10;
for (var i = 0; i < Max; i++) {
  swipeUp();

  sleep(2000);
  if (text('点击进入直播间').exists()) {
    continue;
  }
  like();
  sleep(0100);
}

//点赞
function like () {
  var likeBtn = descContains('喜欢').visibleToUser().findOnce()
  return likeBtn && likeBtn.click()
}