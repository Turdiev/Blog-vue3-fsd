<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { TheHeader } from '@/widgets/TheHeader'
import { TheFooter } from '@/widgets/TheFooter'
</script>

<template>
  <TheHeader class="app__header"/>

  <RouterView />

  <TheFooter class="app__footer"/>
</template>

<style scoped>
.app__header {
  margin-bottom: 120px;
}

.app__footer {
  margin-top: 140px;
}
</style>
