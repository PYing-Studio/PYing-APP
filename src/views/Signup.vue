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
  import bus from '../service/bus'

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

        if (this.username === '') {
          return this.notify('用户名为空')
        }

        if (this.password === '') {
          return this.notify('密码为空')
        }

        if (this.password !== this.confirmPassword) {
          return this.notify('密码输入不一致')
        }

        if (this.email === '') {
          return this.notify('邮箱为空')
        }

        if (this.phone === '') {
          return this.notify('手机号为空')
        }

        User.register(this, form)
          .then(this.$router.push('/login'))
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },
      onBack() {
        this.$router.go(-1)
      },
      notify (msg) {
        bus.$emit('notify', msg)
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

  .regBtn {
    margin-top: 100px;
  }
</style>
