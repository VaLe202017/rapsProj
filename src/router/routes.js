const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
          { path: "", component: () => import("pages/Index.vue") },

          { path: "novosti", component: () => import("pages/Novosti.vue") },

          // Hoteli
          {
            path: "hoteli/hotel1",
            component: () => import("pages/hoteli/Hotel1.vue"),
          },
          {
            path: "hoteli/hotel2",
            component: () => import("pages/hoteli/Hotel2.vue"),
          },

          // Hrana
          {
            path: "hrana/mcdonalds",
            component: () => import("pages/hrana/McDonalds.vue"),
          },
          {
            path: "hrana/burger-king",
            component: () => import("pages/hrana/BurgerKing.vue"),
          },
          {
            path: "hrana/pizza",
            component: () => import("pages/hrana/Pizza.vue"),
          },

          { path: "agencije", component: () => import("pages/Agencije.vue") },
          { path: "parking", component: () => import("pages/Parking.vue") },
          { path: "zdravstvo", component: () => import("pages/Zdravstvo.vue") },
          { path: "plaze", component: () => import("pages/Plaze.vue") },
          { path: "prognoza", component: () => import("pages/Prognoza.vue") },
          { path: "aerodrom", component: () => import("pages/Aerodrom.vue") },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
