<script lang="ts" setup>
import BaseSkeleton from '@/core/components/BaseSkeleton.vue'
import {Icon} from '@iconify/vue'
</script>

<template>
	<div class="inventory-footer card">
		<div class="inventory-footer__wrapper">
			<Icon
				class="inventory-footer__close-btn"
				icon="material-symbols:close"
				width="24"
				height="24"
			/>
			<div class="inventory-footer__skeleton-wrapper">
				<BaseSkeleton width="100" height="36" borderRadius="8" />
			</div>
		</div>
	</div>
</template>

<style>
.inventory-footer__wrapper {
	position: relative;
	height: 100%;
}

.inventory-footer__close-btn {
	position: absolute;
	top: 0;
	right: 0;
	margin: 8px;
}

.inventory-footer__skeleton-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 18px 70px 18px 18px;
}
</style>