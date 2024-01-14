export interface IPost {
  id?: string | null
  title?: string
  preview?: string
  image?: string
  description?: string
}

export interface IPostModel {
  queryPosts: IPost[],
  post: IPost
}