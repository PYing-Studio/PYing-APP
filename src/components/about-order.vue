<template>
  <div class="orderListContainer">
    <mu-grid-list class="orderList" cols="1">
      <mu-sub-header class="orderTitle">我的订单</mu-sub-header>
      <mu-grid-tile v-for="item, index in list" :key="index">
        <img src="../assets/logo.png"/>
        <span slot="title">{{item.title}}</span>
        <span slot="subTitle"> <b>{{item.playTime}}</b></span>
        <mu-icon-button icon="star_border" slot="action"/>
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
          title: '速度与激情',
          playTime: '上映时间: 2017-09-01'
        },
          {
            image: '../assets/logo.png',
            title: '魔兽2',
            playTime: '上映时间: 2017-09-01'
          }
        ]
      }
    }
  }
</script>


<style scoped>
  .orderListContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .orderList {
    overflow-y: auto;
  }

  .orderTitle {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: auto 16px;
  }
</style>
