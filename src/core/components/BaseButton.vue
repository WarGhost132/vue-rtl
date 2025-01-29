<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: value => {
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
	background-color: var(--dark-color-primary);
	color: var(--dark-font-color-primary);
}

.base-button--secondary {
	background-color: var(--dark-color-secondary);
	color: var(--dark-font-color-secondary);
}
</style>
