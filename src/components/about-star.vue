<template>
  <div class="starListContainer">
    <mu-grid-list class="starList" cols="1">
      <mu-sub-header class="starTitle">我的收藏</mu-sub-header>
      <mu-grid-tile v-for="item, index in list" :key="index">
        <img src="../assets/logo.png"/>
        <span slot="title">{{item.title}}</span>
        <span slot="subTitle"> <b>{{item.playTime}}</b></span>
        <mu-icon-button icon="delete" slot="action"/>
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          image: '../assets/logo.png',
          title: '大话西游',
          playTime: '观看时间:2016-09-01, 和王尼玛一块'
        },
          {
            image: '../assets/logo.png',
            title: '爱情转移',
            playTime: '观看时间: 2016-09-01'
          }
        ]
      }
    }
  }
</script>


<style scoped>
  .starListContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .starList {
    overflow-y: auto;
  }

  .starTitle {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: auto 16px;
  }
</style>
