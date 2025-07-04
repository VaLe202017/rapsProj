const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      {
        path: "smjestaj",
        component: () => import("src/pages/SmjestajPage.vue"),
      },

      {
        path: "hrana",
        component: () => import("pages/HranaPage.vue"),
      },

      {
        path: "agencije",
        component: () => import("pages/AgencijePage.vue"),
      },
      { path: "parking", component: () => import("pages/ParkingPage.vue") },
      {
        path: "zdravstvo",
        component: () => import("pages/ZdravstvoPage.vue"),
      },
      { path: "plaze", component: () => import("pages/PlazePage.vue") },
      {
        path: "prognoza",
        component: () => import("pages/PrognozaPage.vue"),
      },
      {
        path: "aerodrom",
        component: () => import("pages/AerodromPage.vue"),
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
