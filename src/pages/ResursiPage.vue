<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md">
      <div class="row items-center justify-between">
        <div class="text-h5">Rijeka.hr Resources</div>
        <q-btn
          color="primary"
          label="Fetch Resources"
          @click="fetchResources"
          :loading="loading"
        />
      </div>

      <q-separator />

      <div v-if="error" class="q-mt-md text-negative">
        {{ error }}
      </div>

      <q-spinner v-if="loading" size="40px" color="primary" class="q-mt-md" />

      <q-list v-else class="q-mt-md">
        <q-item v-for="(resource, index) in resources" :key="index" clickable>
          <q-item-section>
            <q-item-label>{{ resource.title }}</q-item-label>
            <q-item-label caption>{{ resource.link }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div v-if="!loading && resources.length === 0" class="q-mt-md text-grey">
        No resources loaded yet.
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const resources = ref([]);
const loading = ref(false);
const error = ref("");

async function fetchResources() {
  loading.value = true;
  error.value = "";
  resources.value = [];

  try {
    const response = await fetch(
      "https://your-scrape-api.com/rijeka-resources"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch resources");
    }
    const data = await response.json();

    resources.value = data.resources || [];
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Optional custom styles */
</style>
