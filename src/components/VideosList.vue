<template>
  <div>
    <v-row v-for="video in videos" :key="video.index" align="center">
      <v-col cols="12" md="6">
        <div class="video-title">{{ video.index }} - {{ video.title }}</div>
        <div v-for="(text, index) in video.texts" :key="index" class="text">
          {{ text }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="320"
          :src="video.videoUrl"
          frameborder="0"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    videos: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.video-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
}

.text {
  margin: 12px 0;
  color: #fff;
}
</style>
