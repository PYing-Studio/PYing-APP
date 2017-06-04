<template>
  <div>
    <mu-appbar title="电影详情" class="app-bar">
      <mu-icon-button icon="arrow_back" slot="left" @click="onBack" />
    </mu-appbar>

    <div class="main">
      <video-player  ref="videoPlayer"
                     :options="playerOptions">
      </video-player>

      <mu-card id="movie-card">
        <mu-card-title :title="movie.name" :subTitle="'评分:' + movie.sc"/>
        <mu-card-text>
          <p>导演: {{ movie.dir }}</p>
          <p>类型: {{ movie.cat }}</p>
          {{ movie.dra }}
        </mu-card-text>
      </mu-card>

      <mu-raised-button class="full-btn" label="购票" @click="buy" primary/>
    </div>

  </div>
</template>

<script>
  import { videoPlayer } from 'vue-video-player'
  import { Movie, HTTPErrHandler } from '../../service'

  export default {
    components: {
      videoPlayer
    },
    data () {
      return {
        playerOptions: {
          height: 230,
          // component options
          start: 0,
          playsinline: false,
          // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: 'http://maoyan.meituan.net/movie/videos/854x4806430a77dc1b64706a0e54b60cebbff80.mp4'
          }],
          poster: "http://p0.meituan.net/165.220/movie/771d86af04b8d2ac9ee3999ba0815c79902502.jpg",
        },

        movie: {}
      }
    },
    created () {
      Movie.fetchOne(this, this.$route.params.id)
        .then(res => {
          this.movie = res.body.data

          this.playerOptions.poster = this.movie.img
          this.playerOptions.sources[0].src = this.movie.vd
        })
        .catch(err => {
          HTTPErrHandler(this, err)
        })
    },
    methods: {
      onBack() {
        this.$router.go(-1)
      },

      buy() {
        this.$router.push({name: 'NewOrder', params: { id: this.movie.id }, query: {movie: this.movie.name}})
      }
    }
  }
</script>

<style scoped>
  .main {
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
