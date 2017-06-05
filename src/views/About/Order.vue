<template>
  <div>
    <mu-appbar title="我的订单" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>

    <div class="main">
      <mu-list>
        <mu-list-item v-for="item, index in list"
                      :key="index"
                      :title="item.movieName"
                      :describeText="item.showTime">
          <mu-avatar icon="theaters" slot="leftAvatar"/>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="操作" @click="onClickOrder(item.id)"/>
            <mu-menu-item title="删除" @click="onRemoveOrder(item.id)"/>
          </mu-icon-menu>
        </mu-list-item>
      </mu-list>
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
            this.list.forEach(item => {
              item.showTime = new Date(item.showTime).toLocaleString()
            })
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      onRemoveOrder (id) {
        Order.remove(this, id)
          .then(this.fetch)
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      onClickOrder (id) {
        this.$router.push({name: 'orderDetail', params: { id }})
      }
    }
  }
</script>

<style scoped>
</style>
