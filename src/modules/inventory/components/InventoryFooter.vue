<script lang="ts" setup>
import BaseSkeleton from '@/core/components/BaseSkeleton.vue'
import {Icon} from '@iconify/vue'
import {onMounted, ref} from 'vue'

const theme = ref<'light-theme' | 'dark-theme'>('dark-theme')

const setTheme = (theme: 'light-theme' | 'dark-theme') => {
	document.documentElement.setAttribute('theme', theme)
	localStorage.setItem('theme', theme)
}

const toggleTheme = () => {
	theme.value = theme.value === 'dark-theme' ? 'light-theme' : 'dark-theme'
	setTheme(theme.value)
}

onMounted(() => {
	const storedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme'
	if (storedTheme) {
		theme.value = storedTheme
		document.documentElement.setAttribute('theme', storedTheme)
	} else {
		theme.value = 'dark-theme'
		document.documentElement.setAttribute('theme', 'dark-theme')
	}
})
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
			<Icon
				class="inventory-footer__themeSwitcher"
				icon="proicons:dark-theme"
				width="24"
				height="24"
				@click="toggleTheme"
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

.inventory-footer__themeSwitcher {
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 8px;
	cursor: pointer;
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