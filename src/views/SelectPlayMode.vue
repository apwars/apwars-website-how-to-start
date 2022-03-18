<template>
  <div class="main">
    <div class="logo">
      <img src="~@/assets/images/logo.png" />
    </div>
    <div class="main-title">HOW TO START?</div>
    <div class="subtitle">
      <div>A medieval metaverse made for you to play your way!</div>
      <div>Choose how you want to start being a reward conqueror.</div>
    </div>
    <v-row class="options">
      <v-col v-for="option in options" :key="option.name" class="option">
        <div class="icon">
          <img :src="option.icon" />
        </div>
        <div class="action">
          <basic-button
            class="start-here-btn"
            block
            @click="$router.push(option.to)"
          >
            <div>{{ option.label }}</div>
            <img class="icon-right" src="~@/assets/icons/right-arrow.png" />
          </basic-button>
        </div>
        <div class="description">{{ option.description }}</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BasicButton from "@/components/BasicButton";

export default {
  components: {
    BasicButton,
  },

  data() {
    return {
      options: [
        {
          name: "warrior",
          icon: require("@/assets/icons/warrior.png"),
          label: "Warrior",
          description:
            "Play every day to get rewards and master the medieval metaverse",
          to: "/warrior",
        },
        {
          name: "merchant",
          icon: require("@/assets/icons/merchant.png"),
          label: "Merchant",
          description:
            "Participate in the game economy and conquer rewards to sell to other players",
          to: "/merchant",
        },
      ],
    };
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
  margin: 0 auto;
  max-width: 100%;
  width: 1180px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  img {
    height: 90px;
  }
}

.main-title {
  margin-top: 64px;
  font-size: 64px;
  font-weight: bold;
  text-align: center;
  color: #ffe600;
}

.subtitle {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

.options {
  padding-top: 80px;
  justify-content: space-around;
  flex-grow: 0;
}

.option {
  padding: 24px 48px;

  .icon {
    display: flex;
    justify-content: center;
  }

  .action {
    padding: 24px 0;
  }

  .description {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
}
</style>
