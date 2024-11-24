import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: () => [
      {
          path: "/",
          name: 'index',
          meta: {
              title: "Home",
          },
          component: () =>
            import("~/pages/Home.vue"),
      },
      {
          path: "/page/:pathMatch(.*)*",
          name: 'page',
          meta: {
              title: "Наборы",
          },

          component: () =>
            import("~/pages/Page.vue")
      },
  ]
};
