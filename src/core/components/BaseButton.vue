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
  <button :class="type">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
button {
  width: 100%;
  padding: 11px 0;
  border-radius: 8px;
  border: none
}

.primary {
  background-color: var(--dark-color-primary);
  color: var(--dark-font-color-primary)
}

.secondary {
  background-color: var(--dark-color-secondary);
  color: var(--dark-font-color-secondary)
}
</style>
