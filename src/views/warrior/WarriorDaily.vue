<template>
  <div class="warrior-daily container">
    <div class="subtitle">
      <div>How about telling me a little more?</div>
      <div>Are you a competitive war player or land conqueror type?</div>
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
          name: "tmj",
          icon: require("@/assets/games/tmj.png"),
          label: "Start with TMJ",
          description:
            "TMJ is a beat ‘em up and thrilling game where you can prove your skills, beat big monsters, and reach the glory to earn lots of rewards.",
          to: "/the-monstrous-journey",
        },
        {
          name: "arcadia",
          icon: require("@/assets/games/arcadia.png"),
          label: "Start with Arcadia",
          description:
            "If your gameplay style is one of strategy, dominance, and conquering territory, start at the wonderful world of Arcadia.",
          to: "/arcadia",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.warrior-daily {
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 24px;

  .icon {
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
    }
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
