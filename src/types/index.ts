export interface Posts {
  id: number
  body: string
  title: string
  userId: number
}

export interface PostsState {
  isLoading: boolean,
  isError: {
    status: boolean,
    message: string,
  },
  data: Posts[],
}
