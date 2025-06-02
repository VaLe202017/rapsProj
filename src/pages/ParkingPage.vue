<template>
  <div>
    <h1>Parking Lokacije</h1>
    <div v-if="loading">Učitavanje podataka...</div>
    <div v-if="error" class="error">{{ error }}</div>

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
    };
  },
  mounted() {
    this.fetchParkingData();
  },
  methods: {
    async fetchParkingData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("http://localhost:3000/api/parking");
        if (!response.ok) throw new Error("Neuspješan dohvat podataka");

        const data = await response.json();
        this.parkingData = data;
      } catch (err) {
        this.error = err.message || "Greška pri dohvaćanju podataka";
      } finally {
        this.loading = false;
      }
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
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
