<template>
  <div id="main">
    <mu-appbar title="订单详情" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>

    <div class="main">
      <mu-select-field v-model="cinemaId" :labelFocusClass="['label-foucs']" label="选择您附近的影院">
        <mu-menu-item v-for="item,index in cinemaList" :key="index" :value="item.id" :title="item.value" />
      </mu-select-field>

      <mu-date-picker v-model="date" hintText="请选择观影日期" :shouldDisableDate="disableYesterday"/>

      <mu-select-field v-model="showTime" :labelFocusClass="['label-foucs']" label="请选择观影时间">
        <mu-menu-item v-for="text,index in timeList" :key="index" :value="text" :title="text" />
      </mu-select-field>

      <mu-text-field v-model="seatNum" label="数量" hintText="请选择票数" type="number"/>

      <br/>
      <mu-raised-button label="购票" @click="submit" primary/>
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
        timeList: ['08:00', '09:00'],

        showTime: '',
        cinemaId: '',
        movieId: '',
        seatNum: 0,
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
  }

</style>
