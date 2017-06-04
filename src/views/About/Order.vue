<template>
  <div class="orderListContainer">
    <mu-appbar title="我的订单" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>
     <div class="orderList">
       <mu-grid-list  :cols="1">
         <mu-grid-tile v-for="item, index in list" :key="index">
           <img src="/static/images/logo.png"/>
           <span slot="title">{{item.movieName}}</span>
           <span slot="subTitle"> <b>{{item.playTime}}</b></span>
           <mu-icon-button icon="star_border" slot="action"/>
         </mu-grid-tile>
       </mu-grid-list>
     </div>
  </div>
</template>

<script>
  import { Order, Movie, HTTPErrHandler } from '../../service'

  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      },

      fetch() {
        Order.fetch(this)
          .then(res => {
            this.list = res.body.data
            console.log(this.list)
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
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
    margin-top: 1em;
    padding: 3em 1em 0 1em;
  }

  .orderTitle {
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    margin: auto 16px;
  }

  .app-bar {
  }

</style>
