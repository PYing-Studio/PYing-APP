<template>
  <div class="main">
    <el-carousel height="200px" arrow="always">
      <el-carousel-item v-for="item in carouselItems" :key="item">
        <img :src="item" class="carousel-item">
      </el-carousel-item>
    </el-carousel>

    <mu-card v-for="item in movieList" class="movie-card" @click="onClickCard">
      <mu-card-media :title="item.title" :subTitle="'评分:' + item.score">
        <img :src="item.image" />
      </mu-card-media>
      <mu-card-text>
        {{ item.desc }}
      </mu-card-text>
      <mu-card-actions>
        <mu-raised-button label="进一步了解" primary/>
      </mu-card-actions>
    </mu-card>
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
            image: '/static/images/fuck.png',
            title: '速度与激情7',
            score: 9.4,
            desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..'
          },
          {
            image: '/static/images/fuck.png',
            title: '速度与激情8',
            score: 9.4,
            desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..'
          },
          {
            image: '/static/images/fuck.png',
            title: '速度与激情9',
            score: 9.4,
            desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..'
          },
        ]
      }
    },
    methods: {
      onClickCard() {
        alert('kk')
      }
    }
  }
</script>


<style scoped>
  .movie-card {
    margin: 15px 10px 15px 10px;
  }

  .carousel-item {
    height: 200px;
    width: 100%;
  }
</style>
