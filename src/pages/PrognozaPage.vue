<template>
  <div class="q-pa-md">
    <div v-if="trenutnaPrognoza" class="q-mt-xl">
      <h2 class="text-h6 q-mb-sm">
        Trenutno vrijeme - {{ trenutnaPrognoza.grad }}
      </h2>
      <p><strong>Temperatura:</strong> {{ trenutnaPrognoza.temperatura }} °C</p>
      <p><strong>Vlaga:</strong> {{ trenutnaPrognoza.vlaga }} %</p>
      <p><strong>Tlak:</strong> {{ trenutnaPrognoza.tlak }} hPa</p>
      <p>
        <strong>Vjetar:</strong> {{ trenutnaPrognoza.vjetarSmjer }}
        {{ trenutnaPrognoza.vjetarBrzina }} m/s
      </p>
      <p><strong>Vrijeme:</strong> {{ trenutnaPrognoza.vrijeme }}</p>
    </div>

    <h1 class="text-h5 q-mt-xl q-mb-md">Temperatura mora</h1>

    <q-table
      :rows="more"
      :columns="moreColumns"
      row-key="lokacija"
      flat
      bordered
      dense
      :pagination="{ rowsPerPage: 0 }"
    >
      <template v-slot:body-cell-lokacija="props">
        <q-td :props="props">
          {{ props.row.lokacija._ }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "MoreIPrognoza",
  setup() {
    const prognoza = ref([]);
    const more = ref([]);
    const trenutnaPrognoza = ref(null);

    const prognozaColumns = [
      { name: "grad", label: "Grad", field: "grad", align: "left" },
      {
        name: "temperatura",
        label: "Temperatura (°C)",
        field: "temperatura",
        align: "center",
      },
      { name: "vlaga", label: "Vlaga (%)", field: "vlaga", align: "center" },
      { name: "tlak", label: "Tlak (hPa)", field: "tlak", align: "center" },
      {
        name: "vjetar",
        label: "Vjetar",
        field: (row) => `${row.vjetarSmjer} ${row.vjetarBrzina} m/s`,
        align: "center",
      },
      { name: "vrijeme", label: "Vrijeme", field: "vrijeme", align: "center" },
    ];

    const moreColumns = [
      { name: "lokacija", label: "Lokacija", field: "lokacija", align: "left" },
      {
        name: "07",
        label: "07h",
        field: (row) => row.termini["07"] || "-",
        align: "center",
      },
      {
        name: "08",
        label: "08h",
        field: (row) => row.termini["08"] || "-",
        align: "center",
      },
      {
        name: "11",
        label: "11h",
        field: (row) => row.termini["11"] || "-",
        align: "center",
      },
      {
        name: "14",
        label: "14h",
        field: (row) => row.termini["14"] || "-",
        align: "center",
      },
      {
        name: "15",
        label: "15h",
        field: (row) => row.termini["15"] || "-",
        align: "center",
      },
      {
        name: "17",
        label: "17h",
        field: (row) => row.termini["17"] || "-",
        align: "center",
      },
    ];

    onMounted(async () => {
      try {
        const resMore = await axios.get("http://localhost:3000/api/more");
        more.value = resMore.data;

        const resPrognoza = await axios.get(
          "http://localhost:3000/api/vrijeme"
        );
        const data = resPrognoza.data;

        prognoza.value = Array.isArray(data) ? data : [data];
        trenutnaPrognoza.value = Array.isArray(data)
          ? data.find((item) => item.grad === "Rijeka") || data[0]
          : data;
      } catch (err) {
        console.error("Greška kod dohvata podataka:", err);
      }
    });

    return {
      prognoza,
      more,
      trenutnaPrognoza,
      prognozaColumns,
      moreColumns,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 16px;
  margin: 6px 0;
}
</style>
