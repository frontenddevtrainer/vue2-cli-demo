import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from "../pages/homepage.vue";
import Products from "../pages/products.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Homepage
    }, {
      path: "/products",
      component: Products
    }
  ],
});

export default router;


