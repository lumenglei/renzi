import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/cdy",
    name: "cdy",
    component: () => import("../views/cdy.vue"),
    children: [
      {
        path: "/sy",
        name: "sy",
        component: () => import("../views/sy.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
