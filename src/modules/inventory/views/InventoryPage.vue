<script setup lang="ts">
import InventorySidebar from '../components/InventorySidebar.vue'
import InventoryContent from '../components/InventoryContent.vue'
import InventoryFooter from '../components/InventoryFooter.vue'
</script>

<template>
  <div class="wrapper">
    <InventorySidebar class="sidebar" />
    <InventoryContent class="content" />
    <InventoryFooter class="footer" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 7fr 1fr;
  gap: 24px;
  padding: 32px;
}

.sidebar {
	grid-column: 1/2;
	grid-row: 1/2;
}

.content {
	grid-column: 2/3;
	grid-row: 1/2;
}

.footer {
  grid-column: 1/3;
  grid-row: 2/3;
}
</style>
