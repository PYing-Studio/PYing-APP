<template>
  <div>
    <mu-appbar title="热映电影" class="app-bar">
      <mu-icon-button icon="home" slot="left"/>
    </mu-appbar>

    <div class="main">
      <el-carousel height="200px" arrow="always">
        <el-carousel-item v-for="item in carouselItems" :key="item">
          <img :src="item" class="carousel-item">
        </el-carousel-item>
      </el-carousel>

      <div  v-for="item in movieList" :key="item.title" @click="onClickMovie(item.id)">
        <mu-row class="movie-list" gutter>
          <mu-col width="30" tablet="50" desktop="33">
            <img class="cover" :src="item.img">
          </mu-col>
          <mu-col width="70" tablet="50" desktop="33">
            <p class="movie-title">{{ item.name }}</p>
            <p>{{ item.cat }}</p>
            <p>主演: {{ item.star }}</p>
            <p>评分: {{ item.sc }}</p>
          </mu-col>
        </mu-row>
        <mu-divider/>
      </div>
    </div>

  </div>
</template>

<script>
  import { Movie, HTTPErrHandler } from '../../service'

  export default {

    data () {
      return {
        carouselItems: [
          "/static/images/《加勒比海盗5：死无对证》.jpg",
          "/static/images/《迷失Z城》.jpg",
          "/static/images/《神奇女侠》.jpg",
          "/static/images/《异星觉醒》.jpg"
        ],
        movieList: [

        ],
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      onClickMovie (id) {
        this.$router.push({name: 'Detail', params: { id}})
      },
      fetch () {
        Movie.fetch(this, 0, 10)
          .then(res => {
            this.movieList = res.body.data
          })
          .catch(err => {
            HTTPErrHandler(this, err)
          })
      }
    }
  }
</script>


<style scoped>
  .movie-list {
    padding: 0 10px 0 10px;
  }

  .movie-title {
    font-size: 18px;
    font-weight: bold;
  }

  .cover {
    width: 100%;
    height: 100%;
    padding: 10px 0 10px 0;
  }

  .carousel-item {
    height: 200px;
    width: 100%;
  }
</style>
