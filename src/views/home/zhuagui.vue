<template>
  <div>
    <van-nav-bar
      title="捉鬼任务"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @failed="onFailed" @submit="handleSubmit">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="times"
          name="times"
          label="捉鬼次数"
          placeholder="请输入捉鬼次数"
          type="number"
          :rules="[{ required:true, message: '请输入捉鬼次数' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交执行
        </van-button>
      </div>
    </van-form>
  </div>
</template>



<script>
  export default{
    data(){
      return {
        times:10
      }
    },

    methods:{
      onFailed(info){
        console.log(info);
      },
      handleSubmit(values){
        console.log(values);
        auto.invoke('runRobot',[{robot:require('@/auto/robot/robot.five'),params:values}],()=>{
          console.log('完成回调')
        })
      },
      onClickLeft(){
        this.$router.back()
      }
    }
  }
</script>