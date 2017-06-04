<template>
  <div>
    <mu-appbar title="订单详情" class="app-bar">
    <mu-icon-button icon="local_grocery_store" slot="left"/>
    </mu-appbar>
    <div>
      <mu-list>
        <mu-list-item title=""  describeText="总是中断">
          <mu-icon slot="right" value="chevron_right"/>
        </mu-list-item>
        <mu-list-item title="2017年9月9号" describeText="放映日期">
        </mu-list-item>
        <mu-list-item title="8:00 ~ 9:00" describeText="观影日期">
        </mu-list-item>
        <mu-list-item title="珠江新城IMAX影城" describeText="选择影院">
        </mu-list-item>
        <mu-list-item title="2 张" describeText="购买票数">
        </mu-list-item>
      </mu-list>
      <div class="payBtn">
        <mu-raised-button v-if="payed" label="支付" primary @click="login"/>
        <mu-raised-button v-else label="发出邀请" primary @click="login"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          payed: true
        }
    },
  created () {
    this.payed = this.$route.params.payed
  },
  methods: {

  }
}
</script>

<style scoped>
.payBtn {
  text-align: center;
  margin-top: 80px;
}
</style>
