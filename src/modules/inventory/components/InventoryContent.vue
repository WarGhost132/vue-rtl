<script setup lang="ts">
import {useInventoryStore} from '../store/inventoryStore'
import {onMounted, ref} from 'vue'
import type {IInventory} from '../types/inventoryTypes.ts'
import InventoryDrawer from './InventoryDrawer.vue'

const inventory = useInventoryStore()
const draggedIndex = ref<number | null>(null)
const selectedItem = ref<IInventory | null>(null)

onMounted(() => {
	inventory.initBoard()
})

const onDragStart = (index: number) => {
	draggedIndex.value = index
}

const onDrop = (index: number) => {
	if (draggedIndex.value !== null) {
		inventory.moveItem(draggedIndex.value, index)
		draggedIndex.value = null
	}
}

const handleCellClick = (id: number | null) => {
	if (id === null) {
		selectedItem.value = null
	} else {
		selectedItem.value = inventory.getItemById(id)
	}
}

const handleDelete = ({ id, quantity }: { id: number, quantity: number }) => {
	inventory.removeItem(id, quantity)
}
</script>

<template>
	<div class="inventory-content">
		<div class="inventory-content__card card">
			<div class="inventory-content__grid">
				<div
					v-for="(cell, index) in inventory.board"
					:key="index"
					class="inventory-content__cell"
					:draggable="cell.id !== null"
					@dragstart="cell.id !== null && onDragStart(index)"
					@dragover.prevent
					@drop="onDrop(index)"
					@click="handleCellClick(cell.id)"
				>
					<div v-if="cell.image">
						<img :src="cell.image" :alt="'Item ' + cell.id" class="inventory-content__item-image" />
						<span class="inventory-content__quantity">{{ cell.quantity }}</span>
					</div>
				</div>
			</div>

			<InventoryDrawer
				v-if="selectedItem"
				:item="selectedItem"
				@close="selectedItem = null"
				@delete="handleDelete"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.inventory-content {
	position: relative;
}

.inventory-content__card {
	overflow: hidden;
}

.inventory-content__grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	height: 100%;
}

.inventory-content__cell {
	width: 100%;
	min-height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--card-border);
	position: relative;
	cursor: pointer;
}

.inventory-content__cell:hover {
	background-color: var(--card-hover);
}

.inventory-content__item-image {
	width: 54px;
	height: 54px;
}

.inventory-content__quantity {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 0;
	right: 0;
	padding: 2px 4px;
	border: 1px solid var(--card-border);
	border-top-left-radius: 6px;
	width: 32px;
	height: 32px;
}
</style>