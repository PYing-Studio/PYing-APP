<template>
  <div class="login">
    <mu-appbar title="约影">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>
    <div class="loginInput">
      <h2>登录</h2>
      <mu-text-field label="用户名" labelFloat fullWidth v-model="l_username"/>
      <br/>
      <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="l_password"/>
      <br/>
      <div class="loginBtn">
        <mu-raised-button label="登录" primary @click="login"/>
      </div>
      <div class="userReg">
        <mu-flat-button label="没有账号?" icon="add_circle_outline" labelPosition="before"
                        color="#00aa8d" @click="useRegister"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {User, HTTPErrHandler} from '../service'

  export default {
    data () {
      return {
        l_username: '',
        l_password: '',
      }
    },
    methods: {
      useRegister() {
        this.$router.push('/signup')
      },
      login () {
        this.$router.push('/')
        const form = {
          username: this.l_username,
          password: this.l_password,
        }
        User.login(this, form)
          .then(this.$router.push('/'))
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },
      onBack() {
        this.$router.go(-1)
      }
    }
  }
</script>


<style scoped>
  .login {
    text-align: center;
  }

  .loginInput {
    margin: 1em 0.8em;
  }

  .userReg {
    text-align: right;
  }

  .loginBtn {
    margin-top: 100px;
  }

  .app-bar {
    margin-bottom: 100px;
  }

</style>
