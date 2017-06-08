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
        <mu-list-item :title="order.time" describeText="放映时间">
        </mu-list-item>

        <mu-list-item :title="order.num.toString()" describeText="总票数">
        </mu-list-item>
        <mu-list-item :title="order.leaveNum.toString()" describeText="剩余票数">
        </mu-list-item>
        <mu-list-item>
          <mu-chip backgroundColor="teal300" class="chip">
            <mu-avatar  backgroundColor="teal400" :size="32" :src="order.image"/>{{ order.username }}
          </mu-chip>
          <mu-chip class="chip" backgroundColor="teal100" v-for="user,index in order.friends" :key="index">
            <mu-avatar backgroundColor="teal200" :size="32" :src="user.image"/>{{ user.username }}
          </mu-chip>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import { Yueyin, HTTPErrHandler } from '../../service'
  import bus from '../../service/bus'

  export default {
    data() {
      return {
        order: {
          num: 0,
          date: '',
          time: '',
          createdAt: '',
          leaveNum: 0
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
        Yueyin.fetchOne(this, this.id)
          .then(res => {
            this.order = res.body.data

            const date = new Date(this.order.showTime).toISOString()

            this.order.date = date.slice(0, 10)
            this.order.time = date.substr(11, 5)
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

    }
  }
</script>

<style scoped>
  .chip {
    margin-left: 5px;
  }
</style>
