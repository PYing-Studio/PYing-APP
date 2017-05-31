<template>
  <div id="main">

      <video width="100%" controls="controls" autoplay="autoplay">
        <source src="http://maoyan.meituan.net/movie/videos/910x480573fc2a8b4e24f3489e3e939e76cb8b4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <mu-card id="movie-card">
        <mu-card-title :title="title" :subTitle="'评分:' + sc"/>
        <mu-card-text>
          <p>导演: 乔阿吉姆·罗恩尼 艾斯彭·山德伯格</p>
          <p>类型: 2D/3D/IMAX 3D/中国巨幕/全景声</p>
          {{ desc }}
        </mu-card-text>
      </mu-card>

      <mu-raised-button class="full-btn" label="购票"  primary/>

  </div>
</template>

<script>

  export default {

    data () {
      return {
        title: '加勒比海盗',
        sc: 9.7,
        img: 'http://p1.meituan.net/w.h/movie/d9a07cb3a7fa79ef955992dfd20c52ca11493.jpg',
        desc: '故事将延续上一部剧情，多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，众人的生活渐趋平淡，而查理兹·塞隆饰演的神秘女子Cipher的出现却打乱了所有平静，她引诱多米尼克走上犯罪道路，令整个队伍卷入信任与背叛的危机，生死患难..',
      }
    },
    methods: {
      buy() {

      }
    }
  }
</script>

<style scoped>
  #main {
    text-align: center;
  }

  .full-btn {
    width: 80%;
    text-align: center;
    margin-top: 20px;
  }

  #movie-card {
    margin-top: 10px;
  }
</style>
