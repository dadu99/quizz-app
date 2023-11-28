//DEFINE OUR ROUTER RULES

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundVue from "../views/404View.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/cards",
      name: "cards",
      component: AboutView,
    },
    {
      path: "/card/:id",
      name: "card",
      component: QuizView,
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
