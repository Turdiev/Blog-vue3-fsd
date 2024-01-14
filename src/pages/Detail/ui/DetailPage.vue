
<script setup lang="ts">

import { Typography } from '@/shared/ui/Typography'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { ImageWrapper } from '@/shared/ui/ImageWrapper'
import { usePostModel } from '@/entities/Article/model/store'

const route = useRoute()
const postModel = usePostModel()

const productId = computed(() => route.params.id)
const post = computed(() => postModel.post)

onBeforeMount(async () => {
  await postModel.fetchPostById(productId.value)
})
</script>

<template>
  <div class="detail-page">
    <div class="container">
      <Typography tag-name="h1" size="xl" class="detail-page__title">
        {{ post.title }}
      </Typography>
      <ImageWrapper :src="post.image" size="large"/>
      <div class="detail-page__description">
        <Typography tag-name="p" size="sm">About</Typography>
        <Typography tag-name="p" size="l">{{ post.description }}</Typography>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "styles.scss";
</style>