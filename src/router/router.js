import { createRouter, createWebHistory } from "vue-router";
import vMain from "../components/v-main-page";
import vTask from "../components/v-task";

const routes = [
  {
    path: "/",
    name: "main",
    component: vMain,
  },
  {
    path: "/task",
    name: "task",
    component: vTask,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
