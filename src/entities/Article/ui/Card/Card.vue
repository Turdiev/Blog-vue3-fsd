<script setup lang="ts">

import { ImageWrapper } from '@/shared/ui/ImageWrapper'
import { Typography } from '@/shared/ui/Typography'
import { ref } from 'vue'
import type { IPost } from '@/entities/Article/model/types'

const props = defineProps<{
  article: IPost
}>()

const isHoverCard = ref(false)
</script>

<template>
  <article
    class="card"
    :class="{'_is-hover': isHoverCard}"
    @mouseenter="isHoverCard = !isHoverCard"
    @mouseleave="isHoverCard = !isHoverCard"
  >
    <ImageWrapper :src="article.image" size="small" />

    <Typography size="m" tag-name="p" class="card__text">
      {{ article.preview }}
    </Typography>

    <router-link :to="`/post/${article.id}`" class="card__link" :class="{'_is-show': isHoverCard}">
      Read more
    </router-link>
  </article>
</template>


<style scoped>
@import "styles.scss";
</style>