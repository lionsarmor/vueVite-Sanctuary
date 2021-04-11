import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import MapSanc from "../views/Map.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Map",
    name: "Map",
    component: MapSanc,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;