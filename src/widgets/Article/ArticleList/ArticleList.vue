<script setup lang="ts">

import { Card } from '@/entities/Article/ui/Card'
import type { IPost } from '@/entities/Article/model/types'

defineProps<{
  posts: IPost[]
}>()

</script>

<template>
  <div class="article-list">
    <Card
      v-for="(post, index) in posts"
      :key="`${post.id}_${index}`"
      :article="post"
    />
  </div>
</template>

<style scoped>
@import "styles.scss";
</style>