<template>
  <div>
    <mu-appbar title="约影记录" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>
    <mu-list>
      <mu-sub-header>约影记录</mu-sub-header>
      <mu-list-item title="这个周末一起吃饭么?">
        <mu-avatar src="/static/images/logo.png" slot="leftAvatar"/>
        <span slot="describe">
        <span style="color: rgba(0, 96, 100, .87)">大话西游 -</span>
          时间: 2016年9月9号
      </span>
        <mu-icon-menu slot="right" icon="delete">
        </mu-icon-menu>
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="这个周末一起吃饭么?">
        <mu-avatar src="/static/images/logo.png" slot="leftAvatar"/>
        <span slot="describe">
        <span style="color: rgba(0, 96, 100, .87)">大话西游 -</span>
          时间: 2016年9月9号
      </span>
        <mu-icon-menu slot="right" icon="delete">
        </mu-icon-menu>
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="这个周末一起吃饭么?">
        <mu-avatar src="/static/images/logo.png" slot="leftAvatar"/>
        <span slot="describe">
        <span style="color: rgba(0, 96, 100, .87)">大话西游 -</span>
          时间: 2016年9月9号
      </span>
        <mu-icon-menu slot="right" icon="delete">
        </mu-icon-menu>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        open: false,
        trigger: null
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

</style>
