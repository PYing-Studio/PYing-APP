<template>
  <div>
    <mu-appbar title="登录">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>

    <div class="main input-wrapper">
      <mu-text-field label="用户名" labelFloat fullWidth v-model="l_username"/>
      <br/>
      <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="l_password"/>
      <br/>
      <div class="submit-btn">
        <mu-raised-button label="登录" primary @click="login"/>
      </div>
      <div class="user-reg">
        <mu-flat-button label="没有账号?" icon="add_circle_outline" labelPosition="before"
                        color="#00aa8d" @click="useRegister"/>
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
        l_username: '',
        l_password: '',
      }
    },
    methods: {
      useRegister() {
        this.$router.push('/signup')
      },
      login () {
        const form = {
          username: this.l_username,
          password: this.l_password,
        }

        if (this.l_username === '') {
            return this.notify('请填写用户名')
        }

        if (this.l_password === '') {
          return this.notify('请填写密码')
        }
        User.login(this, form)
          .then(() => {
            this.notify('登录成功')
            this.$router.push('/')
          })
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
  .user-reg {
    text-align: right;
  }

  .submit-btn {
    margin-top: 100px;
  }
</style>
