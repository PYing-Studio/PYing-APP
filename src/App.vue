<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <mu-snackbar v-if="snackBar" :message="snackBarMsg" action="关闭" @actionClick="hideSnackbar"
                 @close="hideSnackbar"/>
    <mu-paper id="navigation">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="/" title="首页" icon="home"/>
        <mu-bottom-nav-item value="/date" title="约影" icon="group"/>
        <mu-bottom-nav-item value="/about" title="我" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  import bus from './service/bus'

  export default {
    name: 'app',
    data() {
      return {
        bottomNav: '/',
        snackBar: false,
        snackBarMsg: ''
      }
    },
    created () {
      bus.$on('change-title', this.onChangeTitle)
      bus.$on('notify', this.showSnackBar)
    },
    beforeDestroy() {
      bus.$off('add-todo', this.onChangeTitle);
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
        this.$router.push(val)
      },
      onBack() {
        this.$router.go(-1)
      },

      onChangeTitle (param) {
        this.navTitle = param
      },

      hideSnackbar () {
        this.snackBar = false
      },
      showSnackBar (msg) {
        if (typeof msg === 'string') {
          this.snackBarMsg = msg
        } else {
          this.snackBarMsg = '发生了什么错误'
        }

        this.snackBar = true
        setTimeout(() => this.snackBar = false, 2000)
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
    z-index: 20;
  }

  .mu-snackbar {
    margin-bottom: 56px;
  }

  .mu-dropDown-menu {
    text-align: left !important;
  }

  .slide-fade-enter-active {
    transition: all .3s ease-in-out;
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }

  .input-wrapper {
    margin: 0 0.8em;
    text-align: center;
  }
</style>
