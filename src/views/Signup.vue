<template>
  <div class="userInfo">
    <h3>注册</h3>
    <mu-text-field label="用户名" labelFloat fullWidth v-model="username"/>
    <br/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="password"/>
    <br/>
    <mu-text-field label="确认密码" type="password" labelFloat fullWidth v-model="confirmPassword"/>
    <br/>
    <mu-text-field label="邮箱" type="email" labelFloat fullWidth v-model="email"/>
    <br/>
    <mu-text-field label="手机号" type="number" labelFloat fullWidth v-model="phone"/>
    <br/>
    <mu-raised-button label="注册" class="register" @click="userRegistered"/>
  </div>
</template>

<script>
  import {User, HTTPErrHandler} from '../service'
  export default {
    data () {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
      }
    },
    methods: {
      userRegistered() {
        const form = {
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.email,
          nickname: 'kk'
        }
        User.register(this, form)
          .then(this.$router.push('/login'))
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      }
    }
  }
</script>


<style scoped>

  .userInfo {
    margin: 0 1em;
    padding-top: 100px;
    text-align: center;
  }

  .register {
    background-color: lightgreen;
    color: white;
    text-align: center;
  }

</style>
