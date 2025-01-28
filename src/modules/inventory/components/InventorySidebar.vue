<script setup lang="ts">
import BaseSkeleton from '@/core/components/BaseSkeleton.vue'
import image from '@/assets/images/image.png'
</script>

<template>
  <div class="card">
    <div class="image__wrapper">
      <img :src="image" alt="image">
    </div>

    <div class="description__wrapper">
      <div class="description__title">
        <BaseSkeleton width="90" height="26" borderRadius="8" />
      </div>
      
      <div class="description__content">
        <BaseSkeleton width="70" height="10" borderRadius="4" />
        <BaseSkeleton width="90" height="10" borderRadius="4" />
        <BaseSkeleton width="70" height="10" borderRadius="4" />
        <BaseSkeleton width="60" height="10" borderRadius="4" />
        <BaseSkeleton width="50" height="10" borderRadius="4" />
      </div>

      <div class="description__footer">
        <BaseSkeleton width="30" height="10" borderRadius="4" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  padding: 16px 14px;
  position: relative;
}

.image__wrapper {
  margin-bottom: 20px;
}

.image__wrapper img {
  width: 100%;
  object-fit: contain;
}

.description__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.description__title {
  margin-bottom: 24px;
  width: 100%;
}

.description__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  width: 100%;
}

.description__footer {
  width: 100%;
}
</style>
