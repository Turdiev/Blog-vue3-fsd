<script setup lang="ts">

const props = defineProps<{
  src: string,
  size: 'small' | 'large'
}>()
</script>

<template>
  <div class="image-wrapper" :class="`_${size}`">
    <img :src="props.src" alt="">
  </div>
</template>

<style scoped>
@import "styles.scss";
</style>