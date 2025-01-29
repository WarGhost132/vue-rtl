<script setup lang="ts">
import BaseSkeleton from '@/core/components/BaseSkeleton.vue'
import image from '@/assets/images/image.png'
</script>

<template>
  <div class="inventory-sidebar card">
    <div class="inventory-sidebar__image-wrapper">
      <img :src="image" alt="image">
    </div>

    <div class="inventory-sidebar__description-wrapper">
      <div class="inventory-sidebar__description-title">
        <BaseSkeleton width="90" height="26" borderRadius="8" />
      </div>
      
      <div class="inventory-sidebar__description-content">
        <BaseSkeleton width="70" height="10" borderRadius="4" />
        <BaseSkeleton width="90" height="10" borderRadius="4" />
        <BaseSkeleton width="70" height="10" borderRadius="4" />
        <BaseSkeleton width="60" height="10" borderRadius="4" />
        <BaseSkeleton width="50" height="10" borderRadius="4" />
      </div>

      <div class="inventory-sidebar__description-footer">
        <BaseSkeleton width="30" height="10" borderRadius="4" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inventory-sidebar {
	display: flex;
	flex-direction: column;
	padding: 16px 14px;
	position: relative;
}

.inventory-sidebar__image-wrapper {
	margin-bottom: 20px;
}

.inventory-sidebar__image-wrapper img {
	width: 100%;
	object-fit: contain;
}

.inventory-sidebar__description-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.inventory-sidebar__description-title {
	margin-bottom: 24px;
	width: 100%;
}

.inventory-sidebar__description-content {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 24px;
	width: 100%;
}

.inventory-sidebar__description-footer {
	width: 100%;
}
</style>
