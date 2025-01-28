<script setup lang="ts">
import {useInventoryStore} from '../store/inventoryStore'
import {onMounted, ref} from 'vue'

const inventory = useInventoryStore()
const draggedIndex = ref<number | null>(null)

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
</script>

<template>
  <div class="card">
		<div class="grid">
			<div
				v-for="(cell, index) in inventory.board"
				:key="index"
				class="cell"
				draggable="true"
				@dragstart="onDragStart(index)"
				@dragover.prevent
				@drop="onDrop(index)"
			>
				<div v-if="cell.image">
					<img :src="cell.image" :alt="'Item ' + cell.id" class="item-image" />
					<span class="quantity">{{ cell.quantity }}</span>
				</div>
			</div>
		</div>
  </div>
</template>

<style>
.grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	height: 100%;
}

.cell {
	overflow: hidden;
	width: 100%;
	min-height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #4D4D4D;
	position: relative;
}

.item-image {
	width: 54px;
	height: 54px;
}

.quantity {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 0;
	right: 0;
	padding: 2px 4px;
	border: 1px solid #4D4D4D;
	border-top-left-radius: 6px;
	width: 32px;
	height: 32px;
}
</style>