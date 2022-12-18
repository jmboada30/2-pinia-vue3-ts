import { createRouter, createWebHistory } from "vue-router";

import ClientLayout from "@/clients/layouts/clientLayout.vue";
import Counter1Page from "@/counter/pages/Counter1Page.vue";
import CounterSetupPage from "@/counter/pages/CounterSetupPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "counter-1",
      component: Counter1Page,
    },
    {
      path: "/counter-setup",
      name: "counter-2",
      component: CounterSetupPage,
    },
    {
      path: "/clients",
      name: "clients",
      component: ClientLayout,
      redirect: { name: "client-list" },
      children: [
        {
          path: "list",
          name: "client-list",
          component: () => import("@/clients/pages/ListPage.vue"),
        },
        {
          path: "/clients/:id",
          name: "client-id",
          component: () => import("@/clients/pages/ClientPage.vue"),
        },
      ],
    },
  ],
});

export default router;
