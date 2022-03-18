<template>
  <div class="main">
    <a class="logo" href="https://www.apwars.farm/">
      <img src="~@/assets/images/logo.png" />
    </a>
    <div class="main-title">HOW TO START?</div>
    <div>
      <basic-button class="start-here-btn" @click="onClickButton">
        <div>Quick Start</div>
        <img class="icon-right" src="~@/assets/icons/right-arrow.png" />
      </basic-button>
    </div>
  </div>
</template>

<script>
import BasicButton from "@/components/BasicButton";

export default {
  components: {
    BasicButton,
  },

  methods: {
    onClickButton() {
      this.$router.push("/select-game");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  display: block;

  img {
    height: 90px;
  }
}

.main-title {
  margin: 64px 0;
  font-size: max(5vw, 80px);
  font-weight: bold;
  text-align: center;
  color: #ffe600;
}

.start-here-btn {
  img {
    height: 50;
    width: unset;
  }
}
</style>
