<template>
  <div>
    <mu-appbar title="订单详情" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>

    <div class="main">
      <mu-list>
        <mu-list-item :title="order.movieName" describeText="电影名称">
        </mu-list-item>
        <mu-list-item :title="order.cinemaName" describeText="影院名称">
        </mu-list-item>
        <mu-list-item :title="order.date" describeText="放映日期">
        </mu-list-item>
        <mu-list-item :title="order.time" describeText="观影日期">
        </mu-list-item>

        <mu-list-item :title="order.num.toString()" describeText="购买票数">
        </mu-list-item>
        <mu-list-item :title="order.createdAt" describeText="订单创建时间">
        </mu-list-item>
        <mu-list-item :title="getStatus(order.num)" describeText="订单状态">
        </mu-list-item>
      </mu-list>
      <div class="payBtn">
        <mu-raised-button v-if="order.status === 2" label="支付" primary @click="payOrder"/>
        <mu-raised-button v-if="order.status === 1" label="发出邀请" primary @click="createDating"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { Order, HTTPErrHandler } from '../../service'

  function getDate (date) {

  }

  export default {
    data() {
      return {
        order: {
          num: 0,
          date: '',
          time: '',
          createdAt: ''
        },
        payed: true,
        id: this.$route.params.id
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      onBack () {
        this.$router.go(-1)
      },

      fetch () {
        Order.fetchOne(this, this.id)
          .then(res => {
            this.order = res.body.data

            const date = new Date(this.order.showTime)
            const createDate = new Date(this.order.makeTime)

            this.order.date = date.toLocaleString().substr(0, 10)
            this.order.time = date.toLocaleString().substr(10)
            this.order.createdAt = createDate.toLocaleString()
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      getStatus (statusNum) {
        switch (statusNum) {
          case 0:
            return '取消清单'
          case 1:
            return '交易成功'
          case 2:
            return '等待支付'
          case 3:
            return '超过支付时间'
          default:
            return '未知'
        }
      },

      payOrder () {
        Order.pay(this, this.id)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      createDating () {

      }
    }
  }
</script>

<style scoped>
  .payBtn {
    text-align: center;
    margin-top: 20px;
  }
</style>
