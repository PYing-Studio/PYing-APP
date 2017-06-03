<template>
  <div id="main">
    <mu-appbar title="选择订单" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>

    <div class="main">
      <mu-select-field v-model="cinemaId" :labelFocusClass="['label-foucs']"
                       label="选择您附近的影院" fullWidth>
        <mu-menu-item v-for="item,index in cinemaList" :key="index" :value="item.id"
                      :title="item.value"/>
      </mu-select-field>
      <mu-date-picker v-model="date" hintText="请选择观影日期" fullWidth
                      :shouldDisableDate="disableYesterday"/>
      <mu-select-field v-model="showTimeID" fullWidth
                       :labelFocusClass="['label-foucs']" label="请选择观影时间">
        <mu-menu-item v-for="item,index in timeList" :key="index" :value="item.id" :title="item.value" />
      </mu-select-field>
      <mu-text-field v-model="seatNum" label="请填写票数" labelFloat fullWidth type="number"/>
      <div class="buyTickets">
        <mu-raised-button label="提交订单" @click="submit" primary/>
      </div>
    </div>

  </div>
</template>

<script>
  import bus from '../../service/bus'
  import { Order, HTTPErrHandler } from '../../service'

  export default {

    data () {
      return {
        cinemaList: [
          {id: '001', value: '阴阳师'},
          {id: '002', value: '影之刃'},
          {id: '003', value: '天下HD'}
        ],
        timeList: [{id: '001', value: '8:00~9:00'},
          {id: '002', value: '9:00~10:00'},
          {id: '003', value: '10:00~11:00'}],

        showTimeID: '001',
        cinemaId: '001',
        movieId: '',
        seatNum: '',
        seat: '',
        date: ''

      }
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      },

      disableYesterday (date) {
        return date < new Date()
      },
      submit () {
        const form = {
          showTime: this.date + ' ' + this.showTime,
          seatNum: this.seatNum,
          cinemaId: this.cinemaId,
          seat: this.seat,
          movieId: this.$route.params.id
        }

        if (this.cinemaId === '') {
          return this.notify('请选择影院')
        }
        if (this.date === '' || this.showTime === '') {
          return this.notify('请选择时间')
        }
        if (this.seatNum === 0) {
          return this.notify('请选择数量')
        }

        Order.create(this, form)
          .then(() => {
            this.notify('提交订单成功')
            this.$router.replace('/')
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      },
      notify (msg) {
        bus.$emit('notify', msg)
      }
    }
  }
</script>


<style scoped>
  .main {
    text-align: center;
    padding-top: 100px;
    margin: 2em 1em 0 1em;
  }

  .buyTickets {
    margin-top: 100px;
  }

</style>
