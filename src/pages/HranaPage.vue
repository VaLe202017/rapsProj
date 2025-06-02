<template>
  <div class="q-pa-md">
    <h1 class="text-h4 q-mb-md">Restorani u Rijeci</h1>

    <q-select
      v-model="selectedType"
      :options="types"
      label="Odaberi tip restorana"
      emit-value
      map-options
      outlined
      class="q-mb-md"
      @update:model-value="fetchRestaurants"
    />

    <q-spinner v-if="loading" color="primary" size="lg" />

    <q-card
      v-for="(restaurant, index) in restaurants"
      :key="index"
      class="q-mb-sm"
    >
      <q-card-section>
        <div class="text-h6">{{ restaurant.name }}</div>
        <div class="text-subtitle2 text-grey">{{ restaurant.type }}</div>
        <a :href="restaurant.link" target="_blank" class="text-blue"
          >Vidi više</a
        >
      </q-card-section>
    </q-card>

    <div v-if="!loading && restaurants.length === 0" class="text-red">
      Nema rezultata za odabrani tip.
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PizzaPage",
  data() {
    return {
      types: [],
      selectedType: "",
      restaurants: [],
      loading: true,
    };
  },
  async mounted() {
    await this.fetchTypes();
    await this.fetchRestaurants();
  },
  methods: {
    async fetchTypes() {
      try {
        const res = await axios.get("http://localhost:3000/api/types");
        this.types = res.data.map((t) => ({ label: t, value: t }));
      } catch (err) {
        console.error("Greška kod dohvaćanja tipova:", err.message);
      }
    },
    async fetchRestaurants() {
      this.loading = true;
      try {
        const res = await axios.get("http://localhost:3000/api/restaurants", {
          params: this.selectedType ? { type: this.selectedType } : {},
        });
        this.restaurants = res.data;
      } catch (err) {
        console.error("Greška kod dohvaćanja restorana:", err.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
