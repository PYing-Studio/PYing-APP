<template>
  <div class="userInfo">
    <mu-text-field label="用户名" labelFloat fullWidth /><br/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth /><br/>
    <mu-text-field label="确认密码" type="password" labelFloat fullWidth /><br/>
    <mu-text-field label="邮箱" labelFloat fullWidth /><br/>
    <mu-text-field label="手机号" labelFloat fullWidth /><br/>
    <mu-raised-button label="注册" class="register" @click="userRegistered"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      userRegistered() {
          this.$router.push('/')
      },
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
