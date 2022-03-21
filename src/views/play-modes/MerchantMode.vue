<template>
  <div class="merchant-mode container">
    <div class="subtitle">
      <div>You can choose to be a Loyal Merchant.</div>
      <div>
        Loyal Merchants have access to reward systems and unique avatars.
      </div>
      <div>Have you ever thought about your highlight in the game?</div>
    </div>
    <v-row class="actions">
      <div class="action">
        <basic-button @click="$router.push('/liquidity')">
          <div>Provide Liquidity</div>
        </basic-button>
      </div>
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
.merchant-mode {
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
  margin: 36px 0;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
}
</style>
