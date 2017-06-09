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
  import light from '!raw-loader!muse-ui/dist/theme-default.css'
  import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
  import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
  import teal from '!raw-loader!muse-ui/dist/theme-teal.css'
  import bus from './service/bus'

  function getThemeStyle () {
    const themeId = 'muse-theme'
    let styleEl = document.getElementById(themeId)
    if (styleEl) return styleEl
    styleEl = document.createElement('style')
    styleEl.id = themeId
    document.body.appendChild(styleEl)
    return styleEl
  }

  function changeChromeBarColor (theme) {
    let color = ''
    switch (theme) {
      case 'light':
        color = '#7E57C2'
        break
      case 'dark':
        color = '#1976D2'
        break
      case 'carbon':
        color = '#474A4F'
        break
      case 'teal':
        color = '#009688'
        break
      default:
        color = '#009688'
    }
    document.head.querySelector('meta[name=theme-color]').content = color
  }

  export default {
    name: 'app',
    data() {
      return {
        bottomNav: '/',
        snackBar: false,
        snackBarMsg: '',
        themes: {
          light,
          dark,
          carbon,
          teal
        }
      }
    },
    created () {
      bus.$on('notify', this.showSnackBar)
      bus.$on('change-theme', this.changeTheme)

      this.syncTheme()
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
        this.$router.push(val)
      },
      onBack() {
        this.$router.go(-1)
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
      },

      changeTheme (theme) {
        // color in chrome navigation bar
        changeChromeBarColor(theme)

        const styleEl = getThemeStyle()
        styleEl.innerHTML = this.themes[theme] || ''

        // save current theme
        localStorage['theme'] = theme
      },

      syncTheme () {
        if (localStorage['theme']) {
          this.changeTheme(localStorage['theme'])
        }
      },

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
