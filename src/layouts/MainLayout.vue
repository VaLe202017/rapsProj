<template>
  <q-layout view="hHh lpR fFf" style="overflow: hidden">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Info Portal </q-toolbar-title>

        <q-btn flat label="Smještaj" class="hover-btn" to="/smjestaj" />

        <q-btn flat label="Hrana" class="hover-btn" to="/hrana" />
        <q-btn
          flat
          label="Turističke agencije"
          to="/agencije"
          class="hover-btn"
        />
        <q-btn flat label="Parkiranje" to="/parking" class="hover-btn" />
        <q-btn
          flat
          label="Bolnice & Veterinari"
          to="/zdravstvo"
          class="hover-btn"
        />
        <q-btn
          flat
          label="Plaže"
          href="http://www.kvarner.hr/turizam/otkrijte_kvarner/o_kvarneru/plaze"
          class="hover-btn"
          target="_blank"
        />
        <q-btn flat label="Prognoza" to="/prognoza" class="hover-btn" />
        <q-btn
          flat
          label="Zračna luka"
          href="https://rijeka-airport.hr"
          class="hover-btn"
          target="_blank"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition name="fade-slide" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>
<style>
html,
body {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.q-layout,
.q-page-container {
  overflow: hidden !important;
}

.q-menu,
.q-menu__content {
  max-height: none !important;
  overflow: visible !important;
}

.q-list {
  overflow: visible !important;
  max-height: none !important;
}
</style>
