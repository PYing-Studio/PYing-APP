<template>
  <div class="about">
    <mu-appbar title="个人中心" class="app-bar">
      <mu-icon-button icon="format_list_bulleted" slot="left"/>
    </mu-appbar>

    <div class="main">
      <div class="avatar">
        <mu-paper class="demo-paper" circle :zDepth="2">
          <img class="uploadedImg" v-if="user.image" :src="user.image">
            <el-upload
              action="/api/user/image"
              name="image"
              :show-file-list="false"
              :on-progress="handleProgress"
              :on-error="handleUploadError"
              :on-success="handleSuccess"
              :before-upload="beforeUpload">
              <el-button v-if="!user.image" size="small" :loading="loading">头像 <i class="el-icon-upload el-icon&#45;&#45;right"></i>
              </el-button>
            </el-upload>
        </mu-paper>
        <p class="center">{{ user.username }}</p>
      </div>

      <mu-list>
        <mu-divider></mu-divider>
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
    </div>

  </div>
</template>

<script>
  import { User, HTTPErrHandler } from '../../service'
  import bus from '../../service/bus'

  export default {
    data() {
      return {
        username: 'unknown',

        loading: false,
        user: {
          email: '',
          image: '',
          phone: '',
          username: ''
        }
      }
    },
    created () {
      this.getUserInfo()
    },
    methods: {
      getUserInfo () {
        User.me(this)
          .then(res => {
            this.user = res.body.data
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },
      handleProgress(event, file, fileList) {
        this.loading = true
      },

      handleUploadError (err, file, fileList) {
        this.notify('上传失败')
      },
      handleSuccess (res, file) {
        this.loading = false
        this.user.image = res.data
        this.notify('上传成功')
        User.update(this, this.user)
          .then(() => {
            this.notify('上传头像成功')
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },

      beforeUpload (file) {
        const isImage = ['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.type) !== -1
        const isLt = file.size / 1024 / 1024 < 5

        if (!isImage) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt) {
          this.$message.error('上传头像图片大小不能超过 5MB!')
        }
        return isImage && isLt
      },

      notify (msg) {
        bus.$emit('notify', msg)
      }
    }
  }
</script>

<style scoped>

  .center {
    text-align: center;
  }

  .avatar {
    height: 200px;
    /*background-color: #e0f7fa;*/
    padding-top: 40px;
  }

  .uploadedImg {
    height: 100%;
    width: 100%;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
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
    margin-top: 1em;
  }
</style>
