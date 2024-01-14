<script setup lang="ts">

interface IButtonBurger {
  isActive: boolean
}

defineProps<IButtonBurger>()

</script>

<template>
  <button
    class="button-burger"
    :class="isActive && 'is-active'"
    type="button"
  >
    <span class="button-burger__line" />
  </button>
</template>


<style lang="scss" scoped>
@import 'styles';
</style>