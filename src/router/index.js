import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterWatch from "../views/CharacterWatch.vue"
const router = createRouter({
  // import.meta.env.BASE_URL
  history: createWebHistory(),
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
