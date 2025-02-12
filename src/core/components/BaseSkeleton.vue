<script setup lang="ts">
defineProps({
  width: {
    type: String,
    required: true,
    validator: (value: string) => {
      return [
        '100',
        '90',
        '80',
        '70',
        '50',
        '30'
      ].includes(value)
    }
  },
  height: {
    type: String,
    required: true,
  },
  borderRadius: String
})
</script>

<template>
	<div class="base-skeleton__wrapper">
		<div
			class="base-skeleton__item"
			:style="{
        width: `${width}%`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`
      }"></div>
	</div>
</template>

<style scoped lang="scss">
.base-skeleton__wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
}

.base-skeleton__item {
	overflow: hidden;
	background:
		linear-gradient(
				90deg,
				var(--skeleton-gradient-start),
				var(--skeleton-gradient-middle),
				var(--skeleton-gradient-end)
		);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	transform: translate3d(0, 0, 0);
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
