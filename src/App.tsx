import { useEffect, useState } from 'react'

import { GET_POST } from './constants'
import { apiRequest } from './utils/request'
import PostCard from './components/PostCard'
import type { Posts, PostsState } from './types'
import FilterByUser from './components/FilterByUser'
import ErrorMessage from './components/ErrorMessage'
import LoadingSkeleton from './components/LoadingSkeleton'

const initPosts: PostsState = {
  data: [],
  isError: {
    message: '',
    status: false,
  },
  isLoading: false,
}

function App() {
  const [posts, setPosts] = useState(initPosts)
  const [userId, setUserId] = useState('')

  const isPostFound = !posts.isLoading && !posts.isError.status && posts.data.length > 0
  const isPostNotFound =
    !posts.isLoading && !posts.isError.status && posts.data.length === 0

  useEffect(() => {
    const getPosts = async () => {
      const isFiltered = userId && userId !== '' ? { userId } : null
      setPosts((prevState) => ({ ...prevState, isLoading: true }))

      try {
        const postsData = await apiRequest<Posts[]>(GET_POST, isFiltered)
        setPosts(() => ({
          data: postsData,
          isLoading: false,
          isError: { message: '', status: false },
        }))
      } catch (err) {
        console.log(err.message)
        setPosts(() => ({
          data: [],
          isLoading: false,
          isError: { message: err as string, status: true },
        }))
      } finally {
        setPosts((prevState) => ({ ...prevState, isLoading: false }))
      }
    }

    getPosts()
  }, [userId])
  console.log('post', {err: posts.isError.message, err2: posts.isError.message})
  return (
    <main className="max-sm:p-1 max-sm:pt-8 max-w-5xl w-full flex flex-col justify-center items-center pt-11 centered">
      <h1 className="text-3xl font-bold text-deep-violet tracking-tight mb-1">Posts</h1>
      <section className="max-w-lg w-full mt-6">
        <FilterByUser userId={userId} onChange={setUserId} />
      </section>

      {posts.isLoading && (
        <div className="flex flex-col gap-2 max-w-lg mt-6 w-full">
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      )}

      {/* {posts.isError.status && <ErrorMessage message={posts.isError.message} />} */}

      <section className="flex flex-col gap-2 max-w-lg mt-6">
        {isPostFound &&
          posts.data.map((post) => (
            <PostCard key={post.id} body={post.body} title={post.title} />
          ))}

        {isPostNotFound && (
          <div className="flex flex-col items-center justify-center text-center py-12 text-soft-orchid">
            <h3 className="text-xl font-semibold mb-1">No posts found</h3>
            <p className="text-sm">Try adjusting the user ID or check your connection.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
