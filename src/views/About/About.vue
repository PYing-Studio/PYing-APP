<template>
  <div class="about">
    <mu-appbar title="个人中心" class="app-bar">
      <mu-icon-button icon="format_list_bulleted" slot="left"/>
    </mu-appbar>

    <div class="main">
      <div class="avatar">
        <!--<mu-avatar backgroundColor="white" class="usrImg" :zDepth="5" size="120" src="/static/images/logo.png" />-->
        <mu-paper class="demo-paper" circle :zDepth="2">
          <mu-avatar backgroundColor="white" class="userImg" :size="80" src="/static/images/logo.png"/>
        </mu-paper>
      </div>
      <mu-list>
        <mu-list-item title="我的订单" to="/about/order">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-list-item title="我的收藏" to="/about/star">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-list-item title="约影记录" to="/about/recorder">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item title="设置" to="/about/setting">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
      </mu-list>
      <mu-raised-button label="登录" @click="login" secondary></mu-raised-button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onAdd() {
        this.$router.push('/signup')
      },
      login () {
        this.$router.push('/login')
        const form = {
          username: 'kk',
          password: 'kk',
          phone: '13400000000',
          nickname: 'kkk',
          email: 'kk'
        }
        User.register(this, form)
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      }
    }
  }
</script>


<style scoped>
  .about {
  }

  .avatar {
    text-align: center;
    height: 200px;
    background-color: #e0f7fa;
  }

  .userImg {
    margin-top: 12px;
  }

  .demo-paper {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 20px;
    text-align: center;
  }

  .userHome {
  }
</style>
