<template>
  <div id="main">
    <mu-select-field v-model="cinema" :labelFocusClass="['label-foucs']" label="选择您附近的影院">
      <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
    </mu-select-field>

    <mu-date-picker hintText="请选择观影日期" :shouldDisableDate="disableYesterday"/>

    <mu-select-field v-model="time" :labelFocusClass="['label-foucs']" label="请选择观影时间">
      <mu-menu-item v-for="text,index in timeList" :key="index" :value="index" :title="text" />
    </mu-select-field>

    <mu-text-field label="数量" hintText="请选择票数" type="number"/>

    <mu-select-field v-model="payWay" :labelFocusClass="['label-foucs']" label="请选择支付方式">
      <mu-menu-item v-for="text,index in payWays" :key="index" :value="index" :title="text" />
    </mu-select-field>

    <br/>
    <mu-raised-button label="购票" primary/>
  </div>
</template>

<script>

  export default {

    data () {
      return {
        payWay: 'wechat',
        payWays: ['微信', '支付宝'],
        cinema: '',
        list: ['阴阳师', '影之刃', '天下HD', '穿越火线', '英雄联盟', '王者荣耀'],
        time: '',
        timeList: ['08:00', '09:00']
      }
    },
    methods: {
      disableYesterday (date) {
        return date < new Date()
      }
    }
  }
</script>


<style scoped>
  #main {
    text-align: center;
    padding-top: 100px;
  }
</style>
