<template>
  <div class="q-pa-md">
    <h1>Bolnice i Veterinari</h1>

    <div v-if="loading">Učitavanje podataka...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div id="map" style="height: 400px; margin-top: 20px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lokacije: [
        {
          naziv: "KBC Rijeka - Hitni prijem",
          lat: 45.33268320902333,
          lng: 14.425664368539822,
        },
        {
          naziv: "Sušak - Hitni prijem",
          lat: 45.32584362391155,
          lng: 14.470785450575514,
        },
        {
          naziv: "Veterinarska stanica Rijeka",
          lat: 45.33288682996146,
          lng: 14.433789964622058,
        },
      ],
      loading: false,
      error: null,
      map: null,
      markers: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      this.error = null;

      try {
        await this.loadGoogleMapsScript();
        this.$nextTick(() => {
          this.initMap();
          this.addMarkers();
        });
      } catch (err) {
        this.error = err.message || "Greška pri učitavanju Google Maps";
      } finally {
        this.loading = false;
      }
    },

    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAA1jdIClaBpIVxfBjDMj65BVojM87x1TY";
        script.async = true;
        script.defer = true;

        script.onload = resolve;
        script.onerror = () =>
          reject(new Error("Neuspješno učitavanje Google Maps API-ja"));

        document.head.appendChild(script);
      });
    },

    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 45.3271, lng: 14.4422 },
        zoom: 14,
      });

      this.markers.forEach((m) => m.setMap(null));
      this.markers = [];
    },

    addMarkers() {
      this.lokacije.forEach((lok) => {
        const marker = new google.maps.Marker({
          position: { lat: lok.lat, lng: lok.lng },
          map: this.map,
          title: lok.naziv,
        });

        const info = new google.maps.InfoWindow({
          content: `<strong>${lok.naziv}</strong>`,
        });

        marker.addListener("click", () => {
          info.open(this.map, marker);
        });

        this.markers.push(marker);
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
table {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
#map {
  width: 100%;
  height: 400px;
}
</style>
