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
            <mu-menu-item title="退出" @click="onRemoveDating(item.id)"/>
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import { Yueyin, HTTPErrHandler } from '../../service'

  export default {
    data () {
      return {
        open: false,
        trigger: null,
        list: [{
          name: '刘洋',
          film: '大话西游',
          time: '2016年9月10号',
          logoSrc: '/static/images/logo.png'
        },
          {
            name: '吴思',
            film: '大话西游',
            time: '2016年9月10号',
            logoSrc: '/static/images/logo.png'
          },
          {
            name: '冯琳',
            film: '大话西游',
            time: '2016年9月10号',
            logoSrc: '/static/images/logo.png'
          }
        ]
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      onBack() {
        this.$router.go(-1)
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
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      onClickDating (id) {
        this.$router.push({name: 'datingRecorderDetail', params: {id}})
      },

      onRemoveDating (id) {
        console.log(id)
        Yueyin.leave(this, id)
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
