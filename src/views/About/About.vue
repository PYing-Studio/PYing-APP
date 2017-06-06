<template>
  <div class="about">
    <mu-appbar title="个人中心" class="app-bar">
      <mu-icon-button icon="format_list_bulleted" slot="left"/>
    </mu-appbar>

    <div class="main">
      <div class="avatar">
        <mu-paper class="demo-paper" circle :zDepth="2">
          <div class="userImg">
            <el-upload
              class="upload-demo"
              action="http://chuantu.biz/upload.php"
              :show-file-list="false"
              :on-progress="handleProgress"
              :on-success="handleSuccess">
              <img class="uploadedImg" v-if="imageUrl" :src="imageUrl">
              <el-button v-else size="small" :loading="loading">头像 <i class="el-icon-upload el-icon&#45;&#45;right"></i>
              </el-button>
            </el-upload>
          </div>
        </mu-paper>
      </div>

      <mu-list>
        <mu-list-item title="我的订单" to="/about/order">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <!--<mu-list-item title="我的收藏" to="/about/star">-->
          <!--<mu-icon slot="right" value="chevron_right"/>-->
        <!--</mu-list-item>-->
        <mu-list-item title="约影记录" to="/about/dating">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item class="setting" title="设置" to="/about/setting">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
      </mu-list>
      <div class="about_login">
        <mu-raised-button label="登录" @click="login" primary></mu-raised-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        userImgExisted: true,
        loading: false,
        imageUrl: '/static/images/fuck.png'
      }
    },
    methods: {
      login () {
        this.$router.push('/login')
      },
      handleProgress(event, file, fileList) {
        this.loading = true;
      },
      handleSuccess(response, file) {
        this.userImgExisted = false;
        this.imageUrl = URL.createObjectURL(file.raw);
      }
    }
  }
</script>

<style scoped>
  .about {
  }

  .about_login {
    text-align: center;
    padding-top: 100px;
  }

  .avatar {
    height: 200px;
    background-color: #e0f7fa;
    padding-top: 40px;
  }

  .userImg {
  }

  .uploadedImg {
    height: 70px;
    width: 70px;
    vertical-align: middle;
    text-align: center;
  }

  .demo-paper {
    height: 100px;
    width: 100px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #00aa8d;
  }

  .setting {
    margin-top: 2em;
  }
</style>
