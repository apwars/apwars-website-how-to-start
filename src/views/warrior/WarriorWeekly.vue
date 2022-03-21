<template>
  <div class="warrior-weekly container">
    <div class="subtitle">
      <div>Well done! Now we can turn you into a great Warrior.</div>
      <div>Are you ready to battle, rise and conquer?</div>
    </div>
    <v-row class="options">
      <v-col
        sm="12"
        md="6"
        v-for="option in options"
        :key="option.name"
        class="option"
      >
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
          name: "wars",
          icon: require("@/assets/games/wars.png"),
          label: "I'm ready for war!",
          description:
            "Battle epic monsters to conquer instant-use rewards and Louis' precious treasure. It's your game of ability and power!",
          to: "/wars",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.warrior-weekly {
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
