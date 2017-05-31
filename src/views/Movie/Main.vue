<template>
  <div>
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
          <p class="movie-title">加勒比海盗5：死无对证</p>
          <p>喜剧,动作,奇幻</p>
          <p>主演:约翰尼德普，哈维尔 巴登，布...</p>
          <p>评分: 8.9</p>
        </mu-col>
      </mu-row>
      <mu-divider/>
    </div>

  </div>
</template>

<script>

  export default {

    data () {
      return {
        carouselItems: [
          "/static/images/fuck.png",
          "/static/images/fuck.png",
          "/static/images/fuck.png",
          "/static/images/fuck.png"
        ],
        movieList: [
          {
            img: 'http://p0.meituan.net/165.220/movie/ee5e691b425292f455c3eac5c628cfc7904509.png',
            title: '速度与激情7',
            score: 9.4,
            desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..',
            id: 1
          },
          {
            img: 'http://p0.meituan.net/165.220/movie/aeb864fa21d578d845b9cefc056e40cb2874891.jpg',
            title: '速度与激情8',
            score: 9.4,
            desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..',
            id: 2
          },
          {
            img: 'http://p0.meituan.net/165.220/movie/f8518634d7357eca5496b7e7d690dca5760722.jpg',
            title: '速度与激情9',
            score: 9.4,
            desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..',
            id: 3
          },
        ]
      }
    },
    methods: {
      onClickMovie (id) {
        this.$router.push({name: 'Detail', params: { id }})
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
