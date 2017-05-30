<template>
  <div class="about">
    <div class="avatar">
      <mu-avatar  backgroundColor="lightBlue50"
                  src="http://qzonestyle.gtimg.cn/aoi/sola/20170214175951_TA6qW1X7ob.png"/>
        <p>lisa</p>
    </div>
    <div class="userHome">
      <mu-list-item title="我的订单" to="/about/order">
        <mu-icon slot="right" value="info"/>
      </mu-list-item>
      <mu-list-item title="我的收藏" to="/about/star">
        <mu-icon slot="right" value="info"/>
      </mu-list-item>
      <mu-list-item title="约影记录">
        <mu-icon slot="right" value="info"/>
      </mu-list-item>
      <div class="setting">
        <mu-list-item title="设置" to="/about/setting">
          <mu-icon slot="right" value="info"/>
        </mu-list-item>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
        myOrder() {
          //alert("test")
          //const router = this.$router;
          //router.go({path: '/login'});
        }
    }
  }
</script>


<style scoped>
  .about {
  }
  .avatar {
    text-align: center;
    background-color: orangered;
  }

  .userHome {
  }
</style>
