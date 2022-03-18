<template>
  <div class="game container">
    <div class="header">Follow to steps</div>
    <videos-list :videos="videos" />
  </div>
</template>

<script>
import VideosList from "@/components/VideosList";

export default {
  components: {
    VideosList,
  },

  data() {
    return {
      videos: [
        {
          index: "1",
          title: "Token Acquisition",
          videoUrl: "",
          texts: [
            "The first step to participate in medieval metaverse tokenomics is to purchase the game's utility tokens. That is, to acquire the main operating token, which is wGOLD.",
            "Then it is necessary to ask for help from Otto, a guardian who will facilitate your journey in the game. Once that's done, bring your tokens to the medieval metaverse through the APWars Bridge. It's quite a trip!",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "2",
          title: "Loyalty Program ",
          videoUrl: "https://www.youtube.com/embed/Z9rt2rb67Mo",
          texts: [
            "For this merchant participation to be good for you, you must participate in the Loyalty Program. Which means that you must provide liquidity. ",
            "The pair for liquidity provision must be in wGOLD/BUSD.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "3",
          title: "",
          videoUrl: "",
          texts: [
            "By joining the Loyalty Program, you will earn points (War SCARS) that can be exchanged for game items. These game items can be sold in the Black Market later. Good sales, merchant!",
            "Watch the video to understand how to do each simple step.",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.game {
  padding-bottom: 48px;
}

.header {
  font-size: 2.6rem;
  font-weight: bold;
  color: #fff;
  padding: 24px 0 48px;
}
</style>
