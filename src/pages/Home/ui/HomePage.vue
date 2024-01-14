<script setup lang="ts">
import { Typography } from '@/shared/ui/Typography'
import ArticleList from '@/widgets/Article/ArticleList/ArticleList.vue'
import { VPagination } from '@/shared/ui/Pagination'
import { computed, onBeforeMount, ref } from 'vue'
import { usePostModel } from '@/entities/Article/model/store'

const postModel = usePostModel()

const visibleNumElements = 8
const currentPage = ref(1)


const posts = computed(() => {
  return postModel.queryPosts?.map(item => item)
})

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * visibleNumElements
  return posts.value.slice(startIndex, startIndex + visibleNumElements)
})

const totalPaginatedPages = computed(() => {
  return Math.ceil(posts.value.length / visibleNumElements)
})

onBeforeMount(async () => {
  await postModel.fetchPosts()
})


</script>

<template>
  <main class="home container">
    <Typography tag-name="h1" size="xl">Articles</Typography>

    <ArticleList :posts="paginatedData" class="home__article" />

    <VPagination
      v-model="currentPage"
      :count="totalPaginatedPages"
      class="home__pagination"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
