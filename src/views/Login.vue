<template>
  <div class="login">
    <h3>登录</h3>
    <mu-text-field label="用户名" labelFloat fullWidth type="text" v-model="username"/><br/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="password"/><br/>
    <mu-raised-button label="登录" class="login-btn" @click="login"/>
    <div>
      <button v-on:click="useRegister">没有账号？马上注册</button>
    </div>
  </div>
</template>

<script>
  /*import { User, HTTPErrHandler } from '../service'

  export default {
    data () {
      return {
        inputErrorText: '',
        password: '',
        username: ''
      }
    },
    methods: {
      handleInputOverflow (isOverflow) {
        this.inputErrorText = isOverflow ? '格式错误！！！！' : ''
      },
      useRegister() {
          this.$router.push('/signup')
      },
      login () {
        const form = {
          username: this.username,
          password: this.password,
        }
        User.login(this, form)
          .then(this.$router.push('/'))
          .catch(err => {

            HTTPErrHandler(this, err)
          })
      }
    }
  }*/
</script>


<style scoped>
  .login {
    text-align: center;
    margin: 1em;
  }

  .login-btn {
    background-color: gray;
    color: white;
    text-align: match-parent;
  }

</style>
