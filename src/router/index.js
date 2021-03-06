import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
        path: "/",
        name: 'Main',
        component: () =>
          import('../views/main/Main.vue'),
      },
      {
        path: '/like',
        name: 'Like',
        component: () => import('../components/main/Like.vue')
      }
    ]

  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;