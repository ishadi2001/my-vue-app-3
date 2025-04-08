import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import About from "../views/about.vue";
import profile from "../views/profile.vue";
import sleeppattern1 from "../views/sleeppattern1.vue";
import sleeppattern2 from "../views/sleeppattern2.vue";
import welcomepage from "../views/welcomepage.vue";
import sleeppattern3 from "../views/sleeppattern3.vue";
import sleeppattern4 from "../views/sleeppattern4.vue";
import setup2 from "../views/setup2.vue";
import Sleeppattern5 from "../views/sleeppattern5.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/welcomepage",
    name: "welcomepage",
    component: welcomepage,
  },

  {
    path: "/profile",
    name: "Profile",
    component: profile,
  },
  {
    path: "/sleeppattern1",
    name: "sleeppattern1",
    component: sleeppattern1,
  },
  {
    path: "/sleeppattern2",
    name: "sleeppattern2",
    component: sleeppattern2,
  },

  {
    path: "/sleeppattern3",
    name: "sleeppattern3",
    component: sleeppattern3,
  },

  {
    path: "/sleeppattern4",
    name: "sleeppattern4",
    component: sleeppattern4,
  },

  {
    path: "/sleeppattern5",
    name: "sleeppattern5",
    component: Sleeppattern5,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/setup2",
    name: "setup2",
    component: setup2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
