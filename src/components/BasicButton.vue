<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    class="basic-button text-none"
    outlined
    tile
    color="white"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "BasicButton",
};
</script>

<style scoped>
.basic-button {
  padding: 6px 36px !important;
  font-weight: bold;
  font-size: max(2vw, 26px) !important;
  line-height: unset;
  letter-spacing: 0;
  height: unset !important;
  border: 2px solid #ffeebc;
}

.basic-button >>> .icon-right {
  margin-left: 16px;
}
</style>
