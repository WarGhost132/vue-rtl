<script setup lang="ts">
import InventorySidebar from '../components/InventorySidebar.vue'
import InventoryContent from '../components/InventoryContent.vue'
import InventoryFooter from '../components/InventoryFooter.vue'
</script>

<template>
	<div class="inventory-page">
		<InventorySidebar class="inventory-page__sidebar" />
		<InventoryContent class="inventory-page__content" />
		<InventoryFooter class="inventory-page__footer" />
	</div>
</template>

<style scoped lang="scss">
.inventory-page {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 7fr 1fr;
	gap: 24px;
	padding: 32px;
}

.inventory-page__sidebar {
	grid-column: 1/2;
	grid-row: 1/2;
}

.inventory-page__content {
	grid-column: 2/3;
	grid-row: 1/2;
}

.inventory-page__footer {
	grid-column: 1/3;
	grid-row: 2/3;
}
</style>
