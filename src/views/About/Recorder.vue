<template>
  <div>
    <mu-appbar title="约影记录" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>
    <div class="recorderList">
      <mu-list>
        <mu-sub-header class="subHeader">约影记录:</mu-sub-header>
        <mu-list-item v-for="item, index in list" :title=item.name  :key="index">
          <mu-avatar :src=item.logoSrc slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 96, 100, .87)">{{item.film}} - </span>
            {{item.time}}
          </span>
          <mu-icon-menu slot="right" icon="delete">
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
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
