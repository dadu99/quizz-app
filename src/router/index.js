//DEFINE OUR ROUTER RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundVue from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/cars/:id",
      name: "car",
      component: CarView,
      children: [
        //nested path
        {
          path: "contact",
          component: ContactView,
        },
      ],
    },
    {
      path: "/:catchall(.*)*",
      name: "Not Found",
      component: NotFoundVue,
    },
  ],
});

export default router;
