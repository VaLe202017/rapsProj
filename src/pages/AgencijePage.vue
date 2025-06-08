<template>
  <div>
    <div id="map" style="height: 500px; width: 100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      marker: null,
    };
  },
  mounted() {
    this.loadGoogleMapsScript()
      .then(() => {
        this.initMap();
      })
      .catch((err) => {
        console.error("Greška pri učitavanju Google Maps API-ja:", err);
      });
  },
  methods: {
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
        script.onerror = reject;

        document.head.appendChild(script);
      });
    },
    initMap() {
      const rijekaCoords = { lat: 45.326723116656076, lng: 14.444919950925144 };

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: rijekaCoords,
        zoom: 16,
      });

      this.marker = new google.maps.Marker({
        position: rijekaCoords,
        map: this.map,
        title: "Turistička zajednica Rijeka",
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<div><strong>Turistička zajednica Rijeka</strong></div>`,
      });

      this.marker.addListener("click", () => {
        infowindow.open(this.map, this.marker);
      });
    },
  },
};
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
