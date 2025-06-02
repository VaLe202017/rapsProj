<template>
  <div>
    <h1>Parking Lokacije</h1>
    <div v-if="loading">Učitavanje podataka...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div id="map" style="height: 400px; margin-top: 20px"></div>
    <table v-if="!loading && !error && parkingData.length">
      <thead>
        <tr>
          <th>Naziv</th>
          <th>Kapacitet</th>
          <th>Slobodno</th>
          <th>Datum osvježenja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(parking, index) in parkingData" :key="index">
          <td>{{ parking.naziv }}</td>
          <td>{{ parking.kapacitet }}</td>
          <td>{{ parking.slobodno }}</td>
          <td>{{ parking["datum osvjezenja"] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parkingData: [],
      loading: false,
      error: null,
      map: null,
      markers: [],
    };
  },
  mounted() {
    this.fetchParkingData();
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

    async fetchParkingData() {
      this.loading = true;
      this.error = null;

      try {
        await this.loadGoogleMapsScript();

        const response = await fetch("http://localhost:3000/api/parking");
        if (!response.ok) throw new Error("Neuspješan dohvat podataka");

        const data = await response.json();

        this.parkingData = data.map((p) => {
          const lat = parseFloat(p.latitude.replace(",", "."));
          const lng = parseFloat(p.longitude.replace(",", "."));
          return {
            ...p,
            lat,
            lng,
          };
        });

        this.$nextTick(() => {
          this.initMap();
          this.addMarkers();
        });
      } catch (err) {
        this.error = err.message || "Greška pri dohvaćanju podataka";
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
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      this.markers.forEach((marker) => marker.setMap(null));
      this.markers = [];
    },

    addMarkers() {
      this.parkingData.forEach((parking) => {
        if (!isNaN(parking.lat) && !isNaN(parking.lng)) {
          const marker = new google.maps.Marker({
            position: { lat: parking.lat, lng: parking.lng },
            map: this.map,
            title: parking.naziv,
          });

          const infoContent = `
            <div>
              <h3>${parking.naziv}</h3>
              <p><strong>Kapacitet:</strong> ${parking.kapacitet}</p>
              <p><strong>Slobodno:</strong> ${parking.slobodno}</p>
              <p><small>Osvježeno: ${parking["datum osvjezenja"]} ${parking["vrijeme osvjezenja"]}</small></p>
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
  margin-top: 10px;
}
#map {
  width: 100%;
  height: 500px;
  margin-top: 20px;
}
</style>
