<template>
  <div style="padding: 20px">
    <h1>Hoteli u Rijeci</h1>

    <div v-if="loading">Učitavanje podataka...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div id="map" style="height: 500px; margin-top: 20px"></div>

    <div class="filters">
      <input v-model="filters.name" placeholder="Pretraži po nazivu" />
      <input
        type="number"
        v-model.number="filters.minRating"
        placeholder="Min. ocjena"
      />
      <input
        type="number"
        v-model.number="filters.minStars"
        placeholder="Min. zvjezdice"
      />
    </div>

    <table v-if="filteredHotels.length">
      <thead>
        <tr>
          <th>Naziv</th>
          <th>Adresa</th>
          <th>Zvjezdice</th>
          <th>Ocjena</th>
          <th>Recenzije</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in filteredHotels" :key="hotel.id">
          <td>{{ hotel.name }}</td>
          <td>{{ hotel.address }}</td>
          <td>{{ hotel.stars }}</td>
          <td>{{ hotel.rating }}</td>
          <td>{{ hotel.reviewCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotels: [],
      loading: false,
      error: null,
      map: null,
      markers: [],
      userLocation: null,
      filters: {
        name: "",
        minRating: 0,
        minStars: 0,
      },
    };
  },
  computed: {
    filteredHotels() {
      return this.hotels.filter((hotel) => {
        const nameMatch = hotel.name
          .toLowerCase()
          .includes(this.filters.name.toLowerCase());
        const ratingMatch = hotel.rating >= this.filters.minRating;
        const starsMatch = hotel.stars >= this.filters.minStars;
        return nameMatch && ratingMatch && starsMatch;
      });
    },
  },
  mounted() {
    this.fetchHotels();
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) return resolve();

        const script = document.createElement("script");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAA1jdIClaBpIVxfBjDMj65BVojM87x1TY";
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error("Google Maps API nije učitan"));
        document.head.appendChild(script);
      });
    },

    async fetchHotels() {
      this.loading = true;
      this.error = null;

      try {
        await this.loadGoogleMapsScript();
        this.getUserLocation(); // pozovi odmah

        const res = await fetch(
          "https://api.liteapi.travel/v3.0/data/hotels?countryCode=hr&cityName=Rijeka",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-Key": "sand_07faec88-e4ba-4ae7-9b52-7e64f4585a63",
            },
          }
        );

        if (!res.ok) throw new Error("Greška pri dohvaćanju hotela");
        const json = await res.json();

        this.hotels = (json.data || []).map((hotel) => ({
          ...hotel,
          lat: parseFloat(hotel.latitude),
          lng: parseFloat(hotel.longitude),
        }));

        this.$nextTick(() => {
          this.initMap();
          this.addMarkers();
        });
      } catch (err) {
        this.error = err.message || "Došlo je do pogreške";
      } finally {
        this.loading = false;
      }
    },

    initMap() {
      const defaultCenter = { lat: 45.3271, lng: 14.4422 };
      const center = this.userLocation || defaultCenter;

      this.map = new google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 13,
      });

      this.markers.forEach((m) => m.setMap(null));
      this.markers = [];

      if (this.userLocation) {
        this.addUserLocationMarker();
      }
    },

    addMarkers() {
      this.hotels.forEach((hotel) => {
        if (!isNaN(hotel.lat) && !isNaN(hotel.lng)) {
          const marker = new google.maps.Marker({
            position: { lat: hotel.lat, lng: hotel.lng },
            map: this.map,
            title: hotel.name,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div>
                <h3>${hotel.name}</h3>
                <p><strong>Ocjena:</strong> ${hotel.rating ?? "N/A"}</p>
                <p><strong>Adresa:</strong> ${hotel.address}</p>
              </div>`,
          });

          marker.addListener("click", () => {
            infoWindow.open(this.map, marker);
          });

          this.markers.push(marker);
        }
      });
    },

    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            if (this.map) {
              this.map.setCenter(this.userLocation);
              this.addUserLocationMarker();
            }
          },
          (error) => {
            console.warn("Lokacija nije dostupna:", error.message);
          }
        );
      }
    },

    addUserLocationMarker() {
      new google.maps.Marker({
        position: this.userLocation,
        map: this.map,
        title: "Vaša lokacija",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#4285F4",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#ffffff",
        },
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: auto;
  overflow-y: auto;
}

#error {
  color: red;
  margin-top: 10px;
}

#map {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}

.filters {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filters input {
  padding: 6px;
  font-size: 14px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
