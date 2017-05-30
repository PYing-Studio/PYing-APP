<template>
  <div id="app">
    <mu-appbar title="热映电影" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>

    <router-view class="main"></router-view>

    <mu-paper id="navigation">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/" title="首页" icon="restore"/>
        <mu-bottom-nav-item value="/date" title="约影" icon="favorite"/>
        <mu-bottom-nav-item value="/about" title="我" icon="location_on"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        bottomNav: '/'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
        this.$router.push(val)
      },
      onBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  #navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .main {
    padding-top: 56px;
    padding-bottom: 80px;
  }

  .app-bar {
    position: fixed;
  }
</style>
