import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";
import Character from "../views/Character.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/character/:id",
    name: "Character",
    component: Character,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
