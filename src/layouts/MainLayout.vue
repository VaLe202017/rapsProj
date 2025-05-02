<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Info Portal </q-toolbar-title>

        <q-btn flat label="Novosti" to="/novosti" />

        <!-- Dropdown za Hoteli -->
        <q-btn-dropdown flat label="Hoteli">
          <q-list>
            <q-item clickable to="/hoteli/hotel1">
              <q-item-section>Hotel 1</q-item-section>
            </q-item>
            <q-item clickable to="/hoteli/hotel2">
              <q-item-section>Hotel 2</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <!-- Dropdown za Hranu -->
        <q-btn-dropdown flat label="Hrana">
          <q-list>
            <q-item clickable to="/hrana/mcdonalds">
              <q-item-section>McDonald's</q-item-section>
            </q-item>
            <q-item clickable to="/hrana/burger-king">
              <q-item-section>Burger King</q-item-section>
            </q-item>
            <q-item clickable to="/hrana/pizza">
              <q-item-section>Pizza mjesta</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn flat label="Turističke agencije" to="/agencije" />
        <q-btn flat label="Parkiranje" to="/parking" />
        <q-btn flat label="Bolnice & Veterinari" to="/zdravstvo" />
        <q-btn flat label="Plaže" to="/plaze" />
        <q-btn flat label="Prognoza" to="/prognoza" />
        <q-btn flat label="Zračna luka" to="/aerodrom" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
