<script lang="ts" setup>
// import { useAppRoutes } from '@/app/providers'

// const appRoutes = useAppRoutes()

const navList = [
  {
    // to: appRoutes.getUIKit(),
    to: '',
    label: 'Works'
  },
  {
    // to: appRoutes.getNotFound(),
    to: '',
    label: 'About'
  }
]
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="item of navList"
        :key="item.label"
      >
        <router-link
          class="link"
          :to="item.to"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "styles";
</style>