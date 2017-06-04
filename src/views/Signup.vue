<template>
  <div class="userInfo">
    <mu-appbar title="约影">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>

    <div class="registerInput">
      <h2>注册</h2>
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
      <div class="regBtn">
        <mu-raised-button label="注册" primary @click="userRegistered"></mu-raised-button>
      </div>
    </div>
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
          nickname: ''
        }
        User.register(this, form)
          .then(this.$router.push('/login'))
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

  .userInfo {
    text-align: center;
  }

  .registerInput {
    margin: 1em 0.8em;
  }

  .register {
    background-color: lightgreen;
    color: white;
    text-align: center;
  }

  .regBtn {
    margin-top: 100px;
  }

</style>
