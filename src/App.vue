<template>
  <router-view />
</template>

<script setup>
defineOptions({
  name: "App",
});
</script>

<style>
html,
body,
#app {
  height: auto !important;
  overflow: auto !important;
  margin: 0;
  padding: 0;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.hover-btn {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.hover-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-fade-enter-from {
  opacity: 0;
  transform: translateY(-5px);
}
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>
