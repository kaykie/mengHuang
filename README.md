# VUE & AUTOJS (PS. 像开发Vue前端一样开发autoJS ! )
### 前端人0分钟上手! 
### 用Vue控制手机上的APP!
### 真正做到实时热更新脚本!!!


> 使用 `vue3 vue_cli vant` 作为 autojs 的界面，可以互相通讯。

>[vant 文档](https://vant-ui.github.io/vant/#/zh-CN/quickstart), [autoX 文档](http://doc.autoxjs.com/#/?id=%E7%BB%BC%E8%BF%B0)

> 当然也可以用 react(Vue3真香) 之类的前端框架

## 适用范围
> auto.js 都能用 (包括 autoX 等等)

## 开发 (前端Vue人直接上手, 老手直接跳转第五步, 嘿嘿嘿)
>一. `npm install`，

>二. `npm run serve`，

>三.在 VSCode 中 打开根目录 `autoWebview.js` 修改 `initUi('http://192.168.31.201:5666/#/')` vue cli 运行的局域网地址

>四.按下核弹按钮 `F5` BOOM

## 打包 
    PS. 更新脚本不用重新打包按装app(真香警告!)

> 一. `npm run build` 建议直接放到服务器

> 二. 打开 autoWebview.js 文件, `initUi('http://192.168.31.201:5666/#/')` 改为服务器静态文件地址 按 Ctrl + Shift + P， 选择 `保存到指定设备(Save On Device)` 命令， autojs 打包App安装, 大功告成!

## 灵感来源

此项目灵感来源于 [autojs_web 项目](https://github.com/xxxxue/autojs_web)
和 [robot 项目](https://github.com/yooge/robot){由于它远程打包服务欠费一直打包失败(本人找了了一天原因:吐血),过了几天才恢复打包,所以就有了本项目(花了几天时间)}



## 未来

`jio本加密`


## 截图

<img src="type/home.jpg" width="160px"> <img src="type/auto.jpg" width="160px"> <img src="type/user.jpg" width="160px">

## 联系方式

> QQ : 451652176 ( 欢迎骚扰. 接定制. 问题咨询 )

>  QQ群 : 314707476 (进来就是沙发)

# 支持作者

如果这个开源项目 可以帮助到你, 你也可以请作者吃一包辣条。(开源不易, 肝了一晚上, 头顶有点凉, 众筹植发!)


![pay.png](type/pay.png)


```src
src                       
├─ assets                 
│  ├─ img                 
│  │  └─ gray-float.png   
│  └─ style               
│     ├─ global.styl      
│     ├─ reset.styl       
│     └─ var.styl         
├─ auto                   jio本文件夹
│  ├─ global              jio本全局方法  命名一定要robot.xxx.js  !
│  │  ├─ robot.global.js  
│  │  └─ robot.menu.js    
│  ├─ robot               jio本文件 命名一定要robot.xxx.js  !
│  │  ├─ robot.douyin.js  
│  │  └─ robot.weixin.js  
│  ├─ JSSDK.js            前端调用jio本SDK入口文件(相当于wxjssdk) window.auto 方法在此
│  └─ tsconfig.json       代码提示
├─ views                  Vue 不解释
│  ├─ Douyin.vue          
│  ├─ Home.vue            
│  ├─ TabRouteView.vue    
│  ├─ User.vue             window.auto 使用方式
│  └─ Weixin.vue          
├─ App.vue                
├─ flexable.js            
├─ main.js                
├─ router.js              
└─ store.js               

```
---
