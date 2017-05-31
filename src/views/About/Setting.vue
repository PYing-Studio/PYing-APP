<template>
  <div class="about-setting">
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
    <mu-raised-button class="logout" label="退出登录" secondary to="/login" />
  </div>
</template>

<script>

</script>

<style scoped>
.about-setting {
  text-align: center;
}

.settingList {
  text-align: left;
}

.logout {
  margin: 12px;
}
</style>
