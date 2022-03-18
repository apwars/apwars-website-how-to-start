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
          videoUrl: "https://www.youtube.com/embed/4TzXIYe1HXo",
          texts: [
            "The first step to conquering anything in the medieval metaverse is purchasing the game's utility tokens. With them, you can acquire soldiers, packs, and also pay for services. That is, utility tokens do have a lot of utility.",
            "Then, it is necessary to ask for help from Otto, a guardian that will facilitate your journey in the game. Once that's done, bring your tokens to the medieval metaverse through the APWars Bridge. It's quite a journey!",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "2",
          title: "Pack and Soldier",
          videoUrl: "https://www.youtube.com/embed/Mhx3C0yOcIU",
          texts: [
            "With your Soldier unlocked and your fighting spirit for war, you need good warriors, don't you? So you need to buy a unit pack to go to war. ",
            "By purchasing the pack, you will be ready to go to war with warriors, archers, armoured warriors, crossbowmen, wizards, and horsemen.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "3",
          title: "Unlock, Enlist and Recharge",
          videoUrl: "",
          texts: [
            "Now it's time for action! To start playing, you need to unlock a Soldier. Once you unlock your soldier, you can enlist in the war weekly to receive rewards. Don't forget that even the faction that loses the war earns rewards!",
            "After the battle, you'll need to recharge your courage bar to maintain your frequency. Keeping the courage bar full and using refills guarantees more participation in wars and, consequently, more rewards.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "4",
          title: "Claim Rewards",
          videoUrl: "",
          texts: [
            "After the war, you will have a period to claim your rewards. You can make the claim in the war tab. You can use your rewards to participate in the next war and earn even more rewards or sell your winnings. Rewards can be used immediately!",
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
