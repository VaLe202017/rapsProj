<template>
  <q-layout view="hHh lpR fFf" style="overflow: hidden">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Info Portal </q-toolbar-title>

        <q-btn flat label="Novosti" to="/novosti" class="hover-btn" />

        <q-btn-dropdown
          flat
          label="Hoteli"
          class="hover-btn"
          transition-show="jump-down"
          transition-hide="jump-up"
          auto-close
        >
          <q-list>
            <q-item clickable to="/hoteli/hotel1" class="hover-btn">
              <q-item-section>Hotel 1</q-item-section>
            </q-item>
            <q-item clickable to="/hoteli/hotel2" class="hover-btn">
              <q-item-section>Hotel 2</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
          flat
          label="Hrana"
          class="hover-btn"
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list>
            <q-item clickable to="/hrana/mcdonalds" class="hover-btn">
              <q-item-section>McDonald's</q-item-section>
            </q-item>
            <q-item clickable to="/hrana/burger-king" class="hover-btn">
              <q-item-section>Burger King</q-item-section>
            </q-item>
            <q-item clickable to="/hrana/pizza" class="hover-btn">
              <q-item-section>Pizza mjesta</q-item-section>
            </q-item>
            <q-item clickable to="/hrana/luksuzni-restorani" class="hover-btn">
              <q-item-section>Luksuzni restorani</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

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
        <q-btn flat label="Plaže" to="/plaze" class="hover-btn" />
        <q-btn flat label="Prognoza" to="/prognoza" class="hover-btn" />
        <q-btn flat label="Zračna luka" to="/aerodrom" class="hover-btn" />
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
