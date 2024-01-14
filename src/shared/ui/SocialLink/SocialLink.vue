<script setup lang="ts">
const props = defineProps<{
  link: string
}>()
</script>

<template>
  <router-link :to="props.link" class="social-link">
    <slot />
  </router-link>
</template>

<style scoped>
@import "styles.scss";
</style>