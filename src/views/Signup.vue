<template>
  <div class="userInfo">
    <h3>注册</h3>
    <mu-text-field label="用户名" labelFloat fullWidth v-model="userName"/>
    <br/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="password"/>
    <br/>
    <mu-text-field label="确认密码" type="password" labelFloat fullWidth v-model=""/>
    <br/>
    <mu-text-field label="邮箱" labelFloat fullWidth v-model="email"/>
    <br/>
    <mu-text-field label="手机号" labelFloat fullWidth v-model="phone"/>
    <br/>
    <mu-raised-button label="注册" class="register" @click="userRegistered"/>
  </div>
</template>

<script>
  import {User, HTTPErrHandler} from '../service'
  export default {
    data () {
      return {
        userName: '',
        password: '',
        email: '',
        phone: '',
        nickname: '',
      }
    },
    methods: {
      userRegistered() {
        const form = {
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.phone,
          nickname: ''
        }

        User.register(this, form)
      }
    }
  }
</script>


<style scoped>

  .userInfo {
    margin: 1em;
    text-align: center;
  }

  .register {
    background-color: lightgreen;
    color: white;
    text-align: center;
  }

</style>
