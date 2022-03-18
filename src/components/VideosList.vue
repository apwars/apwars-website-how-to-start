<template>
  <div>
    <v-row v-for="video in videos" :key="video.index">
      <v-col cols="6">
        <div class="video-title">{{ video.index }} - {{ video.title }}</div>
        <div v-for="(text, index) in video.texts" :key="index" class="text">
          {{ text }}
        </div>
      </v-col>
      <v-col cols="6"></v-col>
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
  color: #fff;
}
</style>
