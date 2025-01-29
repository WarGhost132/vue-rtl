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
	<div class="inventory-drawer" :class="{'is-visible': props.item}">
		<div class="inventory-drawer__header">
			<Icon
				class="inventory-drawer__close-btn"
				icon="material-symbols:close"
				width="24"
				height="24"
				@click="emit('close')"
			/>
		</div>
		<div class="inventory-drawer__content">
			<div class="inventory-drawer__content-image">
				<img :alt="`Item` + props.item.id" :src="String(props.item.image)">
			</div>
			<hr>
			<div class="inventory-drawer__content-description">
				<div class="inventory-drawer__content-description-title">
					<BaseSkeleton height="30" width="90" borderRadius="8" />
				</div>
				<div class="inventory-drawer__content-description-content">
					<BaseSkeleton height="10" width="90" borderRadius="4" />
					<BaseSkeleton height="10" width="90" borderRadius="4" />
					<BaseSkeleton height="10" width="90" borderRadius="4" />
					<BaseSkeleton height="10" width="70" borderRadius="4" />
					<BaseSkeleton height="10" width="50" borderRadius="4" />
				</div>
			</div>
			<hr>
			<div v-if="isDeleting" class="inventory-drawer__delete-section">
				<input
					type="number"
					v-model="deleteQuantity"
					placeholder="Введите количество"
					min="1"
					class="inventory-drawer__delete-input"
				>
				<div class="inventory-drawer__delete-buttons">
					<BaseButton title="Отмена" type="secondary" @click="cancelDelete"/>
					<BaseButton title="Подтвердить" type="primary" @click="confirmDelete"/>
				</div>
			</div>
			<div v-else class="inventory-drawer__button">
				<BaseButton title="Удалить предмет" type="primary" @click="startDelete" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.inventory-drawer {
	position: absolute;
	top: 0;
	right: -100%;
	width: 40%;
	height: 100%;
	background:
		linear-gradient(
			180deg,
			var(--drawer-gradient-start) 1%,
			var(--drawer-gradient-end) 99%
		);
	padding: 18px 15px;
	border: 1px solid var(--card-border);
	border-top-right-radius: 12px;
	border-bottom-right-radius: 12px;
	z-index: 10;
	opacity: 0;
	animation: drawerSlideOut 0.3s ease-out forwards;
}

.inventory-drawer.is-visible {
	animation: drawerSlideIn 0.3s ease-in forwards;
}

@keyframes drawerSlideIn {
	0% {
		right: -100%;
		opacity: 0;
	}
	100% {
		right: 0;
		opacity: 1;
	}
}

@keyframes drawerSlideOut {
	0% {
		right: 0;
		opacity: 1;
	}
	100% {
		right: -100%;
		opacity: 0;
	}
}

.inventory-drawer__header {
	display: flex;
	justify-content: flex-end;
}

.inventory-drawer__close-btn {
	cursor: pointer;
}

.inventory-drawer__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 18px 15px;
	width: 100%;
	height: 100%;
}

.inventory-drawer__content hr {
	width: 100%;
	border: none;
	border-top: 1px solid var(--card-border);
}

.inventory-drawer__content img {
	min-width: 130px;
	min-height: 130px;
}

.inventory-drawer__content-description {
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 100%;
}

.inventory-drawer__content-description-content {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.inventory-drawer__button {
	width: 100%;
}

.inventory-drawer__delete-section {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: space-between;
}

.inventory-drawer__delete-input {
	width: 100%;
	padding: 12px;
	border: 1px solid var(--card-border);
	border-radius: 4px;
	background: var(--card-bg-color);
	color: var(--font-primary-color);
	text-align: start;
	font-size: 14px;
}

.inventory-drawer__delete-buttons {
	display: flex;
	gap: 10px;
	width: 100%;
}
</style>