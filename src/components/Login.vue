<template>
  <div class="login">
    <mu-text-field hintText="用户名或手机号"/><br/>
    <mu-text-field hintText="请输入密码"/><br/>
    <mu-raised-button label="登录" class="login-btn" to="/"/>
    <div class="container">
      <mu-flat-button label="忘记密码?" class="flat-btn"/>
      <mu-flat-button label="新用户注册" class="flat-btn"/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputErrorText: ''
      }
    },
    methods: {
      handleInputOverflow (isOverflow) {
        this.inputErrorText = isOverflow ? '格式错误！！！！' : ''
      }
    }
  }
</script>


<style scoped>
  .login {
    text-align: center;
  }

  .container{
    display: flex;
    justify-content: space-between;
  }
  .flat-btn {
    margin: 12px;
  }

  .login-btn {
    background-color: gray;
    color: white;
    text-align: match-parent;
  }

</style>
