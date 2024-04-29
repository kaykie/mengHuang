auto();


var params = global.WEB_PARAMS.params
var imgs = params.imgs;

var prop = 'imagesInfo'
var storage = storages.create(prop);

var storageObj = JSON.parse(storage.get('imagesList') || '{}');
var imgsData = storageObj.imgs || [];

var savePath = '/sdcard/mh/templateImages/'

files.ensureDir(savePath)


// 如果是第一次进来 并且 图片数量不一致 需要重新同步一下数据
if(imgsData.length === 0 || imgsData.length !== imgs.length){

  var prefixUrl = 'https://www.xiaye0.com/mh/templateImages/images/'
  
  for(var i = 0;i<imgs.length;i++){
    var img = imgs[i];
    if(imgsData.find(item => item === img)){
      continue
    }
    var url = prefixUrl + img;
    var loadImg = images.load(url);
    if(loadImg){
      images.save(loadImg,savePath + img)
      imgsData.push(img)
    }
  }
  var data = {
    imgs: imgsData
  }
  storage.put('imagesList', JSON.stringify(data));
}




var url = "https://www.xiaye0.com/mh/templateImages/util.js";
var res = http.get(url);
if (res.statusCode != 200) {
    toast("请求失败");
}else{
  files.writeBytes(savePath + 'util.js', res.body.bytes());
}
