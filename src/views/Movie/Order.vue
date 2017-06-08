<template>
  <div id="main">
    <mu-appbar title="选择订单" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>

    <div class="main">
      <mu-select-field
        v-model="order.cinemaName"
        :labelFocusClass="['label-foucs']"
        label="选择您附近的影院"
        @change="onSelectCinema"
        fullWidth>
        <mu-menu-item
          v-for="item,index in cinemaList"
          :key="index"
          :value="item"
          :title="item">
        </mu-menu-item>
      </mu-select-field>

      <mu-date-picker
        v-model="date"
        hintText="请选择观影日期"
        fullWidth
        :autoOk="true"
        :shouldDisableDate="dateFilter"
        @change="onSelectDate">
      </mu-date-picker>

      <mu-select-field
        v-model="order.showTimeId"
        :labelFocusClass="['label-foucs']"
        @change="onSelectTime"
        label="请选择观影时间"
        fullWidth>
        <mu-menu-item
          v-for="item,index in timeList"
          :key="index"
          :value="item.id"
          :title="item.value">
        </mu-menu-item>
      </mu-select-field>

      <mu-text-field
        v-model="order.seatNum"
        label="请填写票数"
        labelFloat
        fullWidth
        type="number">
      </mu-text-field>

      <mu-text-field
        v-model="leaveNum"
        :disabled="true"
        label="剩余票数"
        labelFloat
        fullWidth
        type="number">
      </mu-text-field>

      <div class="buyTickets">
        <mu-raised-button label="提交订单" @click="submit" primary/>
      </div>
    </div>

  </div>
</template>

<script>
  import bus from '../../service/bus'
  import { Movie, Order, HTTPErrHandler } from '../../service'

  export default {

    data () {
      return {
        cinemaList: [],
        dateTimeList: [],
        dateList: [],
        timeList: [],
        date: '',
        leaveNum: 0,

        order: {
          showTimeId: 0,
          cinemaName: '',
          movieName: this.$route.query.movie,
          seatNum: 1,
          seat: '',
        },

        id: this.$route.params.id
      }
    },
    created () {
      Movie.fetchWrap(this, '', this.id)
        .then(res => {
          this.rawMovieList = res.body.data
          this.rawMovieList.forEach(item => {
            item.showTime = new Date(item.showTime).toISOString()
            item.date = item.showTime.slice(0, 10)
            item.time = item.showTime.slice(11, 16)
          })
          this.getCinemaList()
        })
        .catch(err => {
          this.notify('该电影暂无可用排期')
        })
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      },

      dateFilter (date) {
        const fixedDate = new Date(date.getTime() + 8*60*60*1000) // +8h
        return this.dateList.indexOf(fixedDate.toISOString().slice(0, 10)) === -1
      },

      getCinemaList () {
        const cinemaSet = new Set()

        this.rawMovieList.forEach(item => {
          cinemaSet.add(item.cinemaName)
        })

        this.cinemaList = [...cinemaSet]
      },

      onSelectCinema (val) {
        this.rawMovieList
          .filter(item => {
            return item.cinemaName === val
          })
          .forEach(item => {
            if (typeof this.dateTimeList[item.date] !== 'object') {
              this.dateTimeList[item.date] = {
                time: [],
                date: item.date
              }
            }

            this.dateTimeList[item.date]['time'].push({
              id: item.id,
              value: item.time
            })
          })

        // unique date
        this.dateList = [...new Set(Object.keys(this.dateTimeList))]

        console.log(this.dateTimeList)
        // reset
        this.date = ''
        this.order.showTimeId = 0
      },

      onSelectDate (val) {
        this.timeList = this.dateTimeList[val].time

        // reset
        this.order.showTimeId = 0
      },

      onSelectTime (showTimeId) {
        for (let item of this.rawMovieList) {
          if (item.id === showTimeId) {
            this.leaveNum = item.leaveNum
          }
        }
      },

      submit () {

        if (this.order.cinemaName === '') {
          this.notify('请选择电影院')
          return
        }

        if (this.order.date === '') {
          this.notify('请选择观影日期')
          return
        }

        if (this.order.showTimeId === '') {
          this.notify('请选择观影时间')
          return
        }

        if (this.order.seatNum <= 0) {
          this.notify('购买数量应大于零')
          return
        }

        if (this.order.seatNum > this.leaveNum) {
          this.notify('购买数量不能多于余票')
          return
        }

        Order.create(this, this.order)
          .then(() => {
            this.notify('提交订单成功')
            this.$router.push({name: 'order'})
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
    margin: 0 1em 0 1em;
  }

  .buyTickets {
    margin-top: 100px;
  }

</style>
