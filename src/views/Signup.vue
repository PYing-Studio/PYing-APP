<template>
  <div>
    <mu-appbar title="注册">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack"/>
    </mu-appbar>

    <div class="main input-wrapper">
      <mu-text-field label="用户名(4~16位, 字母、数字、下划线组成)" labelFloat fullWidth v-model="username"/>
      <br/>
      <mu-text-field label="密码(4~20位, 数字和字母组合)" type="password" labelFloat fullWidth v-model="password"/>
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
        } else if (!/^[a-zA-z]\w{3,15}$/.test(this.username)) {
          return this.notify('用户名格式错误')
        }

        if (this.password === '') {
          return this.notify('密码为空')
        } else if (!/^.*?[\d]+.*$/.test(this.password) || !/^.*?[A-Za-z]/.test(this.password)
          ) {
          return this.notify('密码格式不正确')
        }

        if (this.password !== this.confirmPassword) {
          return this.notify('密码输入不一致')
        }

        if (this.email === '') {
          return this.notify('邮箱为空')
        } else {
          var reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
          if (!reg.test(this.email)) {
            return this.notify('请输入符合规范的邮箱账号！')
          }
        }

        if (this.phone === '') {
          return this.notify('手机号为空')
        } else {
          var reg = /^[1][0-9]{10}$/
           if (!reg.test(this.phone)) {
             return this.notify('请输入正确的手机号')
           }
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
</style>
