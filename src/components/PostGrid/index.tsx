import clsx from "clsx";
import React from 'react'
import type { Post as PostProps } from 'src/payload-types'
import { Post } from '@/components/Post';
import './style.scss'

type PostGridProps = {
  posts: PostProps[],
  title?: string,
  className?: string,
};

export const PostGrid: React.FC<PostGridProps> = ({
  posts,
  title,
  className
}) => {
  console.log(posts);

  return (
    <section className={clsx("post-grid", className)}>
      <div className="container">
        {title && (
          <h2 className="post-grid__title | h3">{title}</h2>
        )}

        <div className="post-grid__grid | auto-grid">
          {posts.length > 0 ? (
            posts.map(post => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <p>no posts found...</p>
          )}
        </div>
      </div>
    </section>
  )
}
