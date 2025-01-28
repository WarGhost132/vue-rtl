<script setup lang="ts">
import InventorySidebar from '../components/InventorySidebar.vue'
</script>

<template>
  <div class="wrapper">
    <InventorySidebar />
    <div class="card content"></div>
    <div class="card footer"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-template-rows: 11fr 1fr;
  gap: 24px;
  padding: 32px;
}

.card {
  width: 100%;
  background-color: #262626;
}

.footer {
  grid-column: 1/3;
  grid-row: 2/3;
  height: 72px;
}
</style>
