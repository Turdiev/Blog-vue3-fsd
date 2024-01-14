<script setup lang="ts">

import { Logo } from '@/shared/ui/Logo'
import { TheNavigation } from '@/shared/ui/TheNavigation'
import { SwitchToLanguage } from '@/features/SwitchToLanguage'
import { VButton } from '@/shared/ui/Button/VButton'
import { ButtonBurger } from '@/shared/ui/Button/ButtonBurger'

</script>

<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <Logo />
      </div>
      <div class="header__right">
        <TheNavigation />
        <div class="header__right-wrapper">
          <SwitchToLanguage />
          <VButton>Let’s work</VButton>
        </div>
      </div>
      <ButtonBurger :is-active="false"  class="header__burger"/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "styles";
</style>