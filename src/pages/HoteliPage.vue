<template>
  <div>
    <h1>Hotelske Lokacije</h1>
    <div v-if="loading">Učitavanje hotela...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div id="map" style="height: 500px; margin-top: 20px"></div>
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
    };
  },
  mounted() {
    this.fetchHotels();
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAA1jdIClaBpIVxfBjDMj65BVojM87x1TY`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Neuspješno učitavanje Google Maps API-ja"));
        document.head.appendChild(script);
      });
    },

    async fetchHotels() {
      this.loading = true;
      this.error = null;

      try {
        await this.loadGoogleMapsScript();
        console.log(this.hotels);
        const response = await fetch("http://localhost:3000/api/hoteli");
        if (!response.ok) throw new Error("Neuspješan dohvat hotela");

        const data = await response.json();

        this.hotels = (data.properties || []).map((hotel) => ({
          id: hotel.id,
          name: hotel.headline, // ime hotela
          lat: hotel.lat,
          lng: hotel.lng,
          rating: hotel.rating,
          bedrooms:
            hotel.bedrooms ||
            (hotel.property_rooms
              ? Object.values(hotel.property_rooms)[0]?.bedrooms
              : null),
          sleeps: hotel.sleeps,
          listing_url: hotel.listing_url,
          review_count: hotel.review_count,
          amenities: hotel.amenities,
          city: hotel.city,
        }));

        this.$nextTick(() => {
          this.initMap();
          this.addMarkers();
        });
      } catch (err) {
        this.error = err.message || "Greška pri dohvaćanju hotela";
      } finally {
        this.loading = false;
      }
    },

    initMap() {
      if (!window.google || !window.google.maps) {
        this.error = "Google Maps API nije učitan";
        return;
      }

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 45.3271, lng: 14.4422 },
        zoom: 13,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      this.markers.forEach((m) => m.setMap(null));
      this.markers = [];
    },

    addMarkers() {
      this.hotels.forEach((hotel) => {
        if (!isNaN(hotel.lat) && !isNaN(hotel.lng)) {
          const marker = new google.maps.Marker({
            position: { lat: Number(hotel.lat), lng: Number(hotel.lng) },
            map: this.map,
            title: hotel.name,
          });

          const amenitiesList = hotel.amenities?.join(", ") || "N/A";

          const infoContent = `
            <div style="max-width: 300px;">
              <h3>${hotel.name}</h3>
              <p><strong>Grad:</strong> ${hotel.city || "N/A"}</p>
              <p><strong>Broj soba:</strong> ${hotel.bedrooms || "N/A"}</p>
              <p><strong>Spavaćih mjesta:</strong> ${hotel.sleeps || "N/A"}</p>
              <p><strong>Rating:</strong> ${
                hotel.rating?.toFixed(2) || "N/A"
              } (${hotel.review_count || 0} recenzija)</p>
              <p><strong>Sadržaji:</strong> ${amenitiesList}</p>
              <p><a href="${
                hotel.listing_url
              }" target="_blank" rel="noopener noreferrer">Detalji i rezervacija</a></p>
            </div>`;

          const infowindow = new google.maps.InfoWindow({
            content: infoContent,
          });

          marker.addListener("click", () => {
            infowindow.open(this.map, marker);
          });

          this.markers.push(marker);
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin: 10px 0;
}
</style>
