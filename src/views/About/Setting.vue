<template>
  <div class="about-setting">
    <mu-appbar title="设置" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>
    <mobile-tear-sheet class="settingList">
      <mu-list>
        <mu-list-item title="清空缓存">
          <mu-icon slot="right" value="chevron_right" />
        </mu-list-item>
        <mu-list-item title="意见反馈">
          <mu-icon slot="right" value="chevron_right" />
        </mu-list-item>
        <mu-list-item title="关于">
          <mu-icon slot="right" value="chevron_right" />
        </mu-list-item>
      </mu-list>
    </mobile-tear-sheet>
    <mu-raised-button class="logout" label="退出登录" primary="" to="/login" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.about-setting {
  text-align: center;
}

.settingList {
  text-align: left;
}

.logout {
  margin: 100px 0;
}
</style>
