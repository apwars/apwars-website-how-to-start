<template>
  <div class="warrior-mode container">
    <div class="subtitle">
      <div>Tell me about your gameplay style, Warrior!</div>
      <div>You are a player who can conquer and play...</div>
    </div>
    <v-row class="actions">
      <v-col class="action">
        <basic-button block @click="$router.push('/warrior/daily')">
          <div>Daily</div>
        </basic-button>
      </v-col>
      <v-col class="action">
        <basic-button block @click="$router.push('/warrior/weekly')">
          <div>Weekly</div>
        </basic-button>
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
};
</script>

<style lang="scss" scoped>
.warrior-mode {
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

.actions {
  display: flex;
  margin-top: 36px;
  justify-content: space-around;
  flex-grow: 0;
}

.action {
  padding: 48px;
}
</style>
