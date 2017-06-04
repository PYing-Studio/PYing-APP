<template>
  <div>
    <mu-appbar title="约影" class="app-bar">
      <mu-icon-button icon="forum" slot="left" @click="onBack"/>
    </mu-appbar>
    <div class="recorderList">
      <mu-list>
        <mu-sub-header class="subHeader">约影列表:</mu-sub-header>
        <mu-list-item v-for="item, index in list" :title=item.name  :key="index">
          <mu-avatar :src=item.logoSrc slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 96, 100, .87)">{{item.film}} - </span>
            {{item.cinema}}
          </span>
          <div>
            <span slot="describe">
            {{item.remain}}
          </span>
          </div>
          <mu-icon-menu slot="right" icon="add">
          </mu-icon-menu>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        open: false,
        trigger: null,
        list: [{
          name: '吴思',
          film: '大话西游',
          cinema: '珠江国际影城',
          remain: '2016年9月10号 剩余 1 张',
          logoSrc: '/static/images/logo.png'
        },
          {
            name: '吴思',
            film: '大话西游',
            cinema: '珠江国际影城',
            remain: '2016年9月10号 剩余 1 张',
            logoSrc: '/static/images/logo.png'
          },
          {
            name: '吴思',
            film: '大话西游',
            cinema: '珠江国际影城',
            remain: '2016年9月10号 剩余 1 张',
            logoSrc: '/static/images/logo.png'
          }
        ]
      }
    },
    mounted () {
      this.trigger = this.$refs.button.$el
    },
    methods: {
      toggle () {
        this.open = !this.open
      },
      handleClose (e) {
        this.open = false
      },
      onBack() {
        this.$router.go(-1)
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
