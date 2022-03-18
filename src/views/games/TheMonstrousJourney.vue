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
          title: "Tokens, Guardian and Bridge",
          videoUrl: "http://www.youtube.com/embed/dQw4w9WgXcQ",
          texts: [
            "The first step to conquering anything in the medieval metaverse is purchasing the game's utility tokens. With them, you can acquire soldiers, packs, and also pay for services. That is, utility tokens do have a lot of utility.",
            "Then, it is necessary to ask for help from Otto, a guardian that will facilitate your journey in the game. Once that's done, bring your tokens to the medieval metaverse through the APWars Bridge. It's quite a journey!",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "2",
          title: "Unlock, Play and Recharge",
          videoUrl: "http://www.youtube.com/embed/dQw4w9WgXcQ",
          texts: [
            "Now it's time for action! To start playing, you need to unlock a Soldier. Once you unlock your soldier, you can show off your gameplay skills in TMJ, the most monstrous beat 'em up in the world!",
            "After having fun, you'll need to recharge your courage bar to maintain your frequency. Keeping the courage bar full and using refills guarantees more games and, consequently, more rewards.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "3",
          title: "War SCARS and Rewards",
          videoUrl: "http://www.youtube.com/embed/dQw4w9WgXcQ",
          texts: [
            "Playing TMJ allows you to earn many rewards. By playing, you conquer War SCARS!",
            "And in the Loyalty Shop, you can use your War SCARS to redeem game items. You can trade these game items or use them right away.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "Bonus",
          title: "Join the Battle",
          videoUrl: "http://www.youtube.com/embed/dQw4w9WgXcQ",
          texts: [
            "In addition to giving you War SCARS and allowing you to be a powerful warrior, the mini-game prepares you for wars. That is, it is through TMJ that you evolve to battle well equipped.",
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
