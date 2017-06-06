<template>
  <div>
    <mu-appbar title="约影" class="app-bar">
      <mu-icon-button icon="forum" slot="left" @click="onBack"/>
    </mu-appbar>
    <div class="recorderList">
      <mu-list>
        <mu-list-item v-for="item, index in list" :title="item.username"  :key="index">
          <mu-avatar :src=item.logoSrc slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 96, 100, .87)">{{item.movieName}} - </span>
            {{item.cinemaName}}
          </span>
          <div>
            <span slot="describe">
              {{ getDateString(item.showTime) }} 共{{ item.num }}张 剩余{{ item.leaveNum }}张
            </span>
          </div>
          <mu-icon-menu slot="right" icon="add" @open="attendDating(item.id)">
          </mu-icon-menu>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import { Yueyin, HTTPErrHandler } from '../service'

  export default {
    data () {
      return {
        open: false,
        trigger: null,
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

      getDateString (timestamp) {
        return new Date(timestamp).toLocaleDateString()
      },

      fetch () {
        Yueyin.fetchAll(this)
          .then(res => {
            this.list = res.body.data
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      attendDating (id) {
        Yueyin.attend(this, id)
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
