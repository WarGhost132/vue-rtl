<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ['primary', 'secondary'].includes(value)
    }
  }
})
</script>

<template>
	<button :class="['base-button', `base-button--${type}`]">
		<span class="base-button__title">{{ title }}</span>
	</button>
</template>

<style scoped lang="scss">
.base-button {
	width: 100%;
	padding: 11px 0;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}

.base-button__title {
	font-size: 16px;
	font-weight: 500;
}

.base-button:hover {
	opacity: 0.9;
}

.base-button--primary {
	background-color: var(--color-primary);
	color: var(--font-primary-color);
}

.base-button--secondary {
	background-color: var(--color-secondary);
	color: var(--font-secondary-color);
}
</style>
