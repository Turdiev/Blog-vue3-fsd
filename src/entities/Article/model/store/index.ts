import { defineStore } from 'pinia'
import type { IPost, IPostModel } from '@/entities/Article/model/types'
import { fetchPostById, fetchPosts } from '@/entities/Article/api'

export const usePostModel = defineStore({
  id: 'post',

  state: () =>
    <IPostModel>{
      queryPosts: [],
      post: {}
  },

  actions: {
    async fetchPosts():Promise<any> {
      const posts = await  fetchPosts()

      if (posts) {
        this.updateQueryPosts(posts)
      }
    },

    async fetchPostById(id: string):Promise<void> {
      const item = await fetchPostById(id)

      if (item) {
        this.updatePost(item)
      }
    },

    updateQueryPosts(payload: IPost[]): void {
      this.queryPosts = [...payload] || []
    },

    updatePost(payload: IPost): void {
      this.post = {...payload} || {}
    }
  }
})