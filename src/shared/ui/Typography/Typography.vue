<script setup lang="ts">
interface Props {
  tagName: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  size: 'sm' | 'm' | 'l' | 'xl'
}

const props = defineProps<Props>()
</script>

<template>
  <component :is="props.tagName" class="typography" :class="props.size">
    <slot />
  </component>
</template>

<style scoped>
@import "style.scss";
</style>