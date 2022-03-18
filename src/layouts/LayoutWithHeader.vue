<template>
  <div class="how-to-play">
    <div class="header container d-none d-md-flex">
      <div class="left">
        <div v-if="$route.meta.mode === 'warrior'" class="mode-info">
          <img src="~@/assets/icons/warrior.png" />
          <div class="label">Warrior</div>
        </div>
        <div v-else class="mode-info">
          <img src="~@/assets/icons/merchant.png" />
          <div class="label">Merchant</div>
        </div>
        <v-breadcrumbs :items="$route.meta.breadcrumbs" divider=">" />
      </div>
      <div class="main-title">{{ $route.meta.title }}</div>
      <a class="logo" href="https://www.apwars.farm/">
        <img src="~@/assets/images/logo.png" />
      </a>
    </div>
    <div class="mobile-header d-block d-md-none">
      <a class="logo" href="https://www.apwars.farm/">
        <img src="~@/assets/images/logo.png" />
      </a>
      <v-breadcrumbs :items="$route.meta.breadcrumbs" divider=">" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      breadcrumbs: [
        {
          text: "How to Play",
          to: "/select-game",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.how-to-play {
  background-image: url("@/assets/images/background.png");
  background-color: #111111;
  background-size: 100% auto;
  background-position: top center;
  min-height: 100%;
  width: 100%;
}

.header {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    flex-basis: 0;
    flex-grow: 1;

    .mode-info {
      display: flex;
      align-items: center;

      img {
        height: 40px;
      }

      .label {
        margin-left: 12px;
        font-size: 36px;
        font-weight: bold;
        color: #ffe600;
      }
    }
  }

  .main-title {
    flex-basis: 0;
    flex-grow: 1;
    color: #ffe600;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
  }

  .logo {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    justify-content: flex-end;

    img {
      height: 68px;
    }
  }
}

.mobile-header {
  padding: 24px;

  .logo {
    display: flex;
    padding-bottom: 6px;

    img {
      height: 68px;
    }
  }
}
</style>
