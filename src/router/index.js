import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterWatch from "../views/CharacterWatch.vue"
import TestView from "../views/TestView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/", redirect: '/character'

    },
    {
      path: "/character",
      name: "home",
      component: HomeView,
    },
    {
      path: "/character/:id",
      name: "character-watch",
      component: CharacterWatch,
      // params=true,

    },

  ],
});

export default router;
