import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "ui",
      component: () => import("@/views/ui.vue"),
    },
    {
      path: "/menu-page",
      name: "menu-page",
      component: () => import("@/views/menu-page.vue"),
    },
    {
      path: "/jsx",
      name: "jsx",
      component: () => import("@/views/jsx-p.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("@/views/message.vue"),
    },
  ],
})
