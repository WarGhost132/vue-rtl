<script setup lang="ts">
import type {IInventory} from '../types/inventoryTypes.ts'
import {Icon} from '@iconify/vue'
import BaseSkeleton from '@/core/components/BaseSkeleton.vue'
import BaseButton from '@/core/components/BaseButton.vue'
import {ref} from 'vue'

const props = defineProps<{item: IInventory}>()
const emit = defineEmits(['close', 'delete'])

const isDeleting = ref(false)
const deleteQuantity = ref<number | null>(null)

const startDelete = () => {
	isDeleting.value = true
}

const cancelDelete = () => {
	isDeleting.value = false
	deleteQuantity.value = null
}

const confirmDelete = () => {
	if (deleteQuantity.value !== null && deleteQuantity.value > 0) {
		emit('delete', {id: props.item.id, quantity: deleteQuantity.value})
		isDeleting.value = false
		deleteQuantity.value = null
	}
}
</script>

<template>
	<div class="drawer">
		<div class="drawer-header">
			<Icon
				class="close-btn"
				icon="material-symbols:close"
				width="24"
				height="24"
				@click="emit('close')"
			/>
		</div>
		<div class="drawer-content">
			<div class="drawer-content-image">
				<img :alt="`Item` + props.item.id" :src="String(props.item.image)">
			</div>
			<hr>
			<div class="drawer-content-description">
				<div class="drawer-content-description-title">
					<BaseSkeleton height="30" width="90" borderRadius="8" />
				</div>
				<div class="drawer-content-description-content">
					<BaseSkeleton height="10" width="90" borderRadius="4" />
					<BaseSkeleton height="10" width="90" borderRadius="4" />
					<BaseSkeleton height="10" width="90" borderRadius="4" />
					<BaseSkeleton height="10" width="70" borderRadius="4" />
					<BaseSkeleton height="10" width="50" borderRadius="4" />
				</div>
			</div>
			<hr>

			<div v-if="isDeleting" class="delete-section">
				<input
					type="number"
					v-model="deleteQuantity"
					placeholder="Введите количество"
					min="1"
					class="delete-input"
				>
				<div class="delete-buttons">
					<BaseButton title="Отмена" type="secondary" @click="cancelDelete"/>
					<BaseButton title="Подтвердить" type="primary" @click="confirmDelete"/>
				</div>
			</div>

			<div v-else class="drawer-content-button">
				<BaseButton title="Удалить предмет" type="primary" @click="startDelete" />
			</div>
		</div>
	</div>
</template>

<style>
.drawer {
	position: absolute;
	top: 0;
	right: 0;
	width: 40%;
	height: 100%;
	background: linear-gradient(180deg, rgba(30, 30, 30, 0.8) 1%, #262626 99%);
	padding: 18px 15px;
	box-shadow: -3px 0 5px rgba(0, 0, 0, 0.3);
}
.drawer-header {
	display: flex;
	justify-content: flex-end;
}
.close-btn {
	cursor: pointer;
}
.drawer-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 18px 15px;
	width: 100%;
	height: 100%;
}
.drawer-content hr {
	width: 100%;
	border: none;
	border-top: 1px solid #4D4D4D;
}
.drawer-content img {
	min-width: 130px;
	min-height: 130px;
}
.drawer-content-description {
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 100%;
}
.drawer-content-description-content {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.drawer-content-button {
	width: 100%;
}
.delete-section {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
}
.delete-input {
	width: 100%;
	padding: 10px;
	border: 1px solid #4D4D4D;
	border-radius: 8px;
	background: #333;
	color: white;
	text-align: start;
	font-size: 16px;
}
.delete-buttons {
	display: flex;
	gap: 10px;
	width: 100%;
}
</style>