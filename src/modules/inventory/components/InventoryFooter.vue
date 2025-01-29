<script lang="ts" setup>
import BaseSkeleton from '@/core/components/BaseSkeleton.vue'
import {Icon} from '@iconify/vue'
</script>

<template>
	<div class="card">
		<div class="footer__wrapper">
			<Icon
				class="close-btn"
				icon="material-symbols:close"
				width="24"
				height="24"
			/>
			<div class="footer__skeleton__wrapper">
				<BaseSkeleton width="100" height="36" borderRadius="8" />
			</div>
		</div>
	</div>
</template>

<style>
.footer__wrapper {
	position: relative;
	height: 100%;
}

.close-btn {
	position: absolute;
	top: 0;
	right: 0;
	margin: 8px;
}

.footer__skeleton__wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 18px 70px 18px 18px;
}
</style>