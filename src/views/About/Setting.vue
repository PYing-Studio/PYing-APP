<template>
  <div class="about-setting">
    <mu-appbar title="设置" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>
    <div class="setting-sheet">

        <mu-list :value="theme" @change="changeTheme">
          <mu-list-item title="主题颜色" toggleNested :open="false">
            <mu-icon slot="left" value="color_lens"/>
            <mu-list-item slot="nested" title="light" value="light">
              <mu-icon slot="left" value="colorize" color="rgb(126, 87, 194)"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="dark" value="dark">
              <mu-icon slot="left" value="colorize" color="rgb(25, 118, 210)"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="carbon" value="carbon">
              <mu-icon slot="left" value="colorize" color="rgb(71, 74, 79)"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="teal" value="teal">
              <mu-icon slot="left" value="colorize" color="rgb(0, 150, 136)"/>
            </mu-list-item>
          </mu-list-item>

          <mu-list-item title="关于开发者" toggleNested :open="false">
            <mu-list-item slot="nested" title="电政 冯爽(Jane)" describeText="As You Like It">
              <mu-avatar src="/static/images/contributors/fs.jpg" slot="leftAvatar"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="计应 陈向妍(Sybil)" describeText="对产品的要求要比“一般”做得好">
              <mu-avatar src="/static/images/contributors/cxy.jpg" slot="leftAvatar"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="计应 林子博(Znbob)" describeText="身体是打码的本钱, 码不打完要身体何用">
              <mu-avatar src="/static/images/contributors/znbobo.jpg" slot="leftAvatar"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="计应 李敏惠(liminhui)" describeText="用户的满意是我们最大的追求">
              <mu-avatar src="/static/images/contributors/liminhui.jpg" slot="leftAvatar"/>
            </mu-list-item>
            <mu-icon slot="left" value="card_membership"/>
            <mu-list-item slot="nested" title="计应 张双涛(zhangsht)" describeText="稳住, 我们能赢">
              <mu-avatar src="/static/images/contributors/zhangsht.jpg" slot="leftAvatar"/>
            </mu-list-item>
            <mu-list-item slot="nested" title="计应 庄清惠(zhuangqh)" describeText="我方水晶正在被攻击">
              <mu-avatar src="/static/images/contributors/zhuangqh.png" slot="leftAvatar"/>
            </mu-list-item>
          </mu-list-item>

          <mu-list-item title="版本号" describeText="v1.0.0">
            <mu-icon slot="left" value="apps"/>
          </mu-list-item>

        </mu-list>

    </div>
    <div class="logout">
      <mu-raised-button label="退出登录" primary @click="logout"/>
    </div>
  </div>
</template>

<script>
  import light from '!raw-loader!muse-ui/dist/theme-default.css'
  import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
  import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
  import teal from '!raw-loader!muse-ui/dist/theme-teal.css'
  import { User, HTTPErrHandler } from '../../service'

  export default {
    data () {
      return {
        theme: 'teal',
        themes: {
          light,
          dark,
          carbon,
          teal
        }
      }
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      },
      changeTheme (theme) {
        // color in chrome navigation bar
        this.changeChromeBarColor(theme)

        this.theme = theme
        const styleEl = this.getThemeStyle()
        styleEl.innerHTML = this.themes[theme] || ''
      },
      getThemeStyle () {
        const themeId = 'muse-theme'
        let styleEl = document.getElementById(themeId)
        if (styleEl) return styleEl
        styleEl = document.createElement('style')
        styleEl.id = themeId
        document.body.appendChild(styleEl)
        return styleEl
      },

      logout () {
        User.logout(this)
          .then(() => {
            this.$router.replace('/')
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      changeChromeBarColor (theme) {
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
    }
  }
</script>

<style scoped>
  .about-setting {
  }

  .logout {
    margin: 100px 0;
    text-align: center;
  }

  .setting {
  }

  .setting-sheet {
    padding-top: 4em;
  }
</style>
