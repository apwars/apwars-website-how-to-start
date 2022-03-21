import Vue from "vue";
import VueRouter from "vue-router";

import BaseLayout from "@/layouts/BaseLayout.vue";
import LayoutWithHeader from "@/layouts/LayoutWithHeader.vue";

import HowToPlay from "@/views/HowToPlay.vue";
import SelectPlayMode from "@/views/SelectPlayMode.vue";
import WarriorMode from "@/views/play-modes/WarriorMode.vue";
import MerchantMode from "@/views/play-modes/MerchantMode.vue";
import WarriorDaily from "@/views/warrior/WarriorDaily.vue";
import WarriorWeekly from "@/views/warrior/WarriorWeekly.vue";
import TheMonstrousJourney from "@/views/games/TheMonstrousJourney.vue";
import Arcadia from "@/views/games/Arcadia.vue";
import Wars from "@/views/games/Wars.vue";
import Liquidity from "@/views/games/Liquidity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HowToPlay,
      },
      {
        path: "/select-game",
        name: "select-game",
        component: SelectPlayMode,
      },
    ],
  },
  {
    path: "",
    component: LayoutWithHeader,
    children: [
      {
        path: "/warrior",
        name: "warrior",
        component: WarriorMode,
        meta: {
          title: "How to Start",
          mode: "warrior",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Warrior",
              exact: true,
              to: "/warrior",
            },
          ],
        },
      },
      {
        path: "/warrior/daily",
        name: "warrior-daily",
        component: WarriorDaily,
        meta: {
          title: "How to Start",
          mode: "warrior",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Warrior",
              exact: true,
              to: "/warrior",
            },
            {
              text: "Daily",
              exact: true,
              to: "/warrior/daily",
            },
          ],
        },
      },
      {
        path: "/warrior/weekly",
        name: "warrior-weekly",
        component: WarriorWeekly,
        meta: {
          title: "How to Start",
          mode: "warrior",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Warrior",
              exact: true,
              to: "/warrior",
            },
            {
              text: "Weekly",
              exact: true,
              to: "/warrior/weekly",
            },
          ],
        },
      },
      {
        path: "/the-monstrous-journey",
        name: "the-monstrous-journey",
        component: TheMonstrousJourney,
        meta: {
          title: "TMJ",
          mode: "warrior",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Warrior",
              exact: true,
              to: "/warrior",
            },
            {
              text: "Daily",
              exact: true,
              to: "/warrior/daily",
            },
            {
              text: "TMJ",
              exact: true,
              to: "/the-monstrous-journey",
            },
          ],
        },
      },
      {
        path: "/arcadia",
        name: "arcadia",
        component: Arcadia,
        meta: {
          title: "Arcadia",
          mode: "warrior",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Warrior",
              exact: true,
              to: "/warrior",
            },
            {
              text: "Daily",
              exact: true,
              to: "/warrior/daily",
            },
            {
              text: "Arcadia",
              exact: true,
              to: "/arcadia",
            },
          ],
        },
      },
      {
        path: "/wars",
        name: "wars",
        component: Wars,
        meta: {
          title: "Wars",
          mode: "warrior",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Warrior",
              exact: true,
              to: "/warrior",
            },
            {
              text: "Weekly",
              exact: true,
              to: "/warrior/weekly",
            },
            {
              text: "Wars",
              exact: true,
              to: "/wars",
            },
          ],
        },
      },
      {
        path: "/merchant",
        name: "merchant",
        component: MerchantMode,
        meta: {
          title: "Provide Liquidity",
          mode: "merchant",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Merchant",
              exact: true,
              to: "/merchant",
            },
          ],
        },
      },

      {
        path: "/liquidity",
        name: "Liquidity",
        component: Liquidity,
        meta: {
          title: "Provide Liquidity",
          mode: "merchant",
          breadcrumbs: [
            {
              text: "How to Play",
              exact: true,
              to: "/select-game",
            },
            {
              text: "Merchant",
              exact: true,
              to: "/merchant",
            },
            {
              text: "Liquidity",
              exact: true,
              to: "/liquidity",
            },
          ],
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
