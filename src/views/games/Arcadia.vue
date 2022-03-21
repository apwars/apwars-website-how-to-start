<template>
  <div class="game container">
    <div class="header">Steps to follow</div>
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
          videoUrl: "https://www.youtube.com/embed/KYU_5ve-f4o",
          texts: [
            "The first step to conquering anything in the medieval metaverse is purchasing the game's utility tokens.With wLAND, you can acquire land, properties, foundations and be a master in the world of Arcadia.",
            "Then, it is necessary to ask for help from Otto, a guardian that will facilitate your journey in the game. Once that's done, bring your tokens to the medieval metaverse through the APWars Bridge. It's quite a journey!",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "2",
          title: "Land and Village",
          videoUrl: "https://www.youtube.com/embed/ABoERaFNrJ8",
          texts: [
            "To build foundations, you will need to have a land. That is your first step to being a conqueror and building your strategies in the world of Arcadia is to have a land.",
            "Also, in the world of Arcadia, you will need to own a village to be able to play. Having villages allow you to expand your gameplay and also participate in-game items trade or negotiations.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "3",
          title: "Worker Packs and other acquisitions",
          videoUrl: "https://www.youtube.com/embed/0j727BzuO7U",
          texts: [
            "For all buildings to be built, you will need workers! So you will need workers or a worker pack to start your journey and start the process to get your empire.",
            "Also, to keep your land clean, you can acquire a magical cleaner, and to start your great domain as a conqueror, you can have a great hall, which will be a foundation that is the gateway to all the others you can build.",
            "Watch the video to understand how to do each simple step.",
          ],
        },
        {
          index: "4",
          title: "Buildings and Looting",
          videoUrl: "https://www.youtube.com/embed/3fTfKLIRg5c",
          texts: [
            "This just got real! Now you must protect your land. How about building a wall to protect your resources? After all, if you can loot, so can another player, and that could be on your properties!",
            "It's important to mention that to bring your Bridge resources (off-chain to on-chain and vice versa), you must build a Warehouse. Be sure to follow your progress on the Arcadia leaderboard. It looks like you're about to be a great owner!",
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
