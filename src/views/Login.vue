<template>
  <div class="login">
    <h3>登录</h3>
    <mu-text-field label="用户名" labelFloat fullWidth v-model="l_username"/>
    <br/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="l_password"/>
    <br/>
    <div class="loginBtn">
      <mu-raised-button label="登录"  primary  @click="login"/>
    </div>
    <div class="userReg">
      <mu-flat-button label="没有账号?" icon="add_circle_outline" labelPosition="before"
                       color="#00aa8d" @click="useRegister"/>
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

  .userReg {
    text-align: right;
  }

  .loginBtn {
    margin-top: 100px;
  }

</style>
