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
        <mu-list-item class="setting" title="设置" to="/about/setting">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
      </mu-list>
      <div class="about_login">
        <mu-raised-button label="登录" @click="login" primary></mu-raised-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      login () {
        this.$router.push('/login')
      }
    }
  }
</script>


<style scoped>
  .about {
  }

  .about_login {
    text-align: center;
    padding-top: 100px;
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

  .setting {
    margin-top: 2em;
  }
</style>
