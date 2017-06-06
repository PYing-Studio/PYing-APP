<template>
  <div>
    <mu-appbar title="约影记录" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>
    <div class="recorderList">
      <mu-list>
        <mu-list-item v-for="item, index in list" :title="'发起者: ' + item.username"  :key="index">
          <mu-avatar :src=item.logoSrc slot="leftAvatar"/>

          <span slot="describe">
            <span style="color: rgba(0, 96, 100, .87)">{{item.movieName}} - </span>
            {{item.cinemaName}}
          </span>

          <div>
            <span slot="describe">
              {{ item.showTime }} 共{{ item.num }}张 剩余{{ item.leaveNum }}张
            </span>
          </div>

          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="详情" @click="onClickDating(item.id)"/>
            <mu-menu-item v-if="item.username === user.username" title="删除" @click="onCancelDating(item.id)"/>
            <mu-menu-item title="退出" @click="onRemoveDating(item.id)"/>
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import { User, Yueyin, HTTPErrHandler } from '../../service'

  export default {
    data () {
      return {
        open: false,
        trigger: null,
        list: [],
        user: {}
      }
    },
    created () {
      this.getUserInfo()
        .then(this.fetch)
        .catch(err => {
          HTTPErrHandler(this, err)
        })
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      },

      getUserInfo () {
        return User.me(this)
          .then(res => {
            this.user = res.body.data
          })
      },

      fetch () {
        Yueyin.fetch(this)
          .then(res => {
            const list = res.body.data
            list.forEach(item => {
              item.showTime = new Date(item.showTime).toLocaleDateString()
            })

            this.list = list
          })
      },

      onClickDating (id) {
        this.$router.push({name: 'datingRecorderDetail', params: {id}})
      },

      onRemoveDating (id) {
        Yueyin.leave(this, id)
          .then(this.fetch)
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      onCancelDating (id) {
        Yueyin.cancel(this, id)
          .then(this.fetch)
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      }
    }
  }
</script>

<style scoped>
  .recorderList {
    padding: 4em 0.5em;
  }

  .subHeader {
    font-weight: bold;
    font-size: large;
  }
</style>
