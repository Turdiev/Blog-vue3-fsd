import { apiResponse } from '@/shared/api'
import type { RouteParamValue } from 'vue-router'

export const fetchPosts = async () => {
  return (await apiResponse.get(`posts/`)).data
}

export const fetchPostById = async (id: string | number) => {
  return (await apiResponse.get(`posts/${id}`)).data
}