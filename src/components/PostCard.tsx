import React from 'react'

interface PostCardProps {
  title: string
  body: string
}

const PostCard: React.FC<PostCardProps> = (props) => {
  const { title, body } = props

  return (
    <div className="bg-light-lilac border border-muted-mauve rounded-2xl p-4 shadow-sm transition hover:shadow-md">
      <h2 className="text-lg font-semibold text-deep-violet mb-2">{title}</h2>
      <p className="text-dusty-plum text-sm">{body}</p>
    </div>
  )
}

export default PostCard
