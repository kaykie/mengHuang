<template>
<div class="home">
  <div class="list">
    <div :class="'item ' + item.class" v-for="item in list" @click="goPage(item)">
      {{ item.title }}
    </div>
  </div>
  <div v-if="isDev">
    <van-button class="item" type="primary" block @click="handleTest">测试按钮</van-button>
  </div>
</div>
</template>
<script>
import store from '@/store';
import {Dialog} from 'vant'
import readImages from './modules/readImages'
export default {
  data () {
    return {
      version:'0.3.0',
      isShowDialog:false,
      store,
      list: [
        {
          route: 'fiveBen',
          class: 'bg-mauve',
          title: '自动3、5本',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'zhuagui',
          class: 'bg-cyan',
          title: '自动捉鬼',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'mengPai',
          class: 'bg-black',
          title: '门派',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'yueBing',
          class: 'bg-orange',
          title: '抢月饼',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'zhaoHuangLing',
          class: 'bg-purple',
          title: '周三召唤灵',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'paTa',
          class: 'bg-purple',
          title: '周五爬塔',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'qiang',
          class: 'bg-cyan',
          title: '抢铅',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'waTu',
          class: 'bg-pink',
          title: '挖普通图',
          icon: 'van-icon-chat-o'
        },
        {
          route: 'xingGuang',
          class: 'bg-blue',
          title: '星官、地煞倒计时',
          icon: 'van-icon-chat-o'
        }
      ],
      isDev:true
    }
  },
  components:{
    Dialog
  },
  mixins:[readImages],
  mounted () { 
    const versionInfo = JSON.parse(localStorage.getItem('versionInfo') || '{}');
    if(versionInfo.version !== this.version){
      this.isShowDialog = true
      Dialog.alert({
        title: `${this.version}功能`,
        message: '1. 更新副本后自动抓鬼功能 \n2.更新门派闯关说明文字 \n3.优化副本功能\n4.优化门派进入战斗功能\n\n 此次更新需要更新安装包，否则无法进入副本后抓鬼程序(之前功能不会受影响)，安装包版本:0.3.0.\n下载地址：https://gitee.com/kaykie/menghuang/releases/tag/0.3.0',
        theme: 'round-button',
      }).then(() => {
        // on close
        localStorage.setItem('versionInfo',JSON.stringify({version:this.version}))
      });
    }
    this.isDev = process.env.NODE_ENV === 'development'
  },
  methods: {
    goPage (item) {
      this.$router.push({ name: item.route })
    },
    handleTest(){
      console.log('点击测试脚本')
      auto.invoke(
        'runRobotNow',
        [{ robot: require('@/auto/robot/robot.test') }],
        () => {
          // log('ajFun1 回调:', typeof r, r)
        },
      )
    },
    handleYueBing(){
      console.log('抢月饼')
      auto.invoke(
        'runRobot',
        [{ robot: require('@/auto/robot/robot.yueBing') }],
        () => {
          // log('ajFun1 回调:', typeof r, r)
        },
      )
    }
  },
}
</script>

<style lang="less">
.home{
  .img{
    width: 200px;
  }

}
  .van-dialog__message{
    text-align: left;
  }
  .list{
    display:flex;
    flex-wrap:wrap;
    &::after{
      content: '';
      position: absolute;
      z-index: -1;
      background-color: inherit;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: -10%;
      border-radius: 5px;
      opacity :0.2;
      -webkit-transform: scale(0.9, 0.9);
      transform :scale(0.9, 0.9);
    }
  }
    
    .item{
      flex: 0 0 45%;
      height: 90px;
      margin: 10px 2.5%;
      border-radius: 6px;
      padding: 15px;
      background-image: url('~@/assets/img/gray-float.png');
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 1;
    }
      
    .title{
      font-size:16px;
    }
    .name{
      font-size: 14px;
      text-transform: Capitalize;
      margin-top: 10px;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        display: block;
        width: 50px;
        height: 1px;
        background: #fff;
        bottom: 0;
        right: 20px;
        opacity: 0.3;
      }
      &::before{
        content: '';
        position: absolute;
        display: block;
        width: 20px;
        height: 3px;
        background: #fff;
        bottom: 0;
        right: 0;
        opacity: 0.5;
      }
          
    }
    
  .bg-red{
    background-color: #e54d42;
    color: #ffffff;
  }
    
  .bg-orange{
    background-color: #f37b1d;
    color: #ffffff;
  }
    
  .bg-yellow{
    background-color: #fbbd08;
    color: #333333;
  }
    
  .bg-olive{
    background-color: #8dc63f;
    color: #ffffff;
  }
    
  .bg-green{
    background-color: #39b54a;
    color: #ffffff;
  }
   
  .bg-cyan{
    background-color: #1cbbb4;
    color: #ffffff;
  }
    
  .bg-blue{
    background-color: #0081ff;
    color: #ffffff;
  }
    
  .bg-purple{
    background-color: #6739b6;
    color: #ffffff;
  }
    
  .bg-mauve{
    background-color: #9c26b0;
    color: #ffffff;
  }
    
  .bg-pink{
    background-color: #e03997;
    color: #ffffff;
  }
    
  .bg-brown{
    background-color: #a5673f;
    color: #ffffff;
  }
    
  .bg-gray{
    background-color: #f0f0f0;
    color: #333333;
  }
    
  .bg-black{
    background-color: #333333;
    color: #ffffff;
  }
    
  .bg-white{
    background-color: #ffffff;
    color: #666666;
  }
    
</style>
