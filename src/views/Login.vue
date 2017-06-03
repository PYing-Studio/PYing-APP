<template>
  <div class="login">
    <h3>登录</h3>
    <mu-text-field label="用户名" labelFloat fullWidth v-model="l_username"/>
    <br/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="l_password"/>
    <br/>
    <mu-raised-button label="登录" class="login-btn" @click="login"/>
    <div>
      <button v-on:click="useRegister">没有账号？马上注册</button>
    </div>
  </div>
</template>

<script>
  import { User, HTTPErrHandler } from '../service'

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
      }
    }
  }
</script>


<style scoped>
  .login {
    text-align: center;
    margin: 0 1em;
    padding-top: 100px;
  }

  .login-btn {
    background-color: gray;
    color: white;
    text-align: match-parent;
  }

</style>
