import clsx from "clsx";
import '@styles/main.scss'
import './PostGrid.scss'

import type { PostProps } from '@components/Post/Post';
import Post from '@components/Post/Post';

type PostGridProps = {
  posts: PostProps[],
  title?: string,
  className?: string,
};

export default function PostGrid({
  posts,
  title,
  className
}: PostGridProps) {
  return (
    <section className={clsx("post-grid", className)}>
      <div className="container">
        {title && (
          <h2 className="post-grid__title | h3">{title}</h2>
        )}
        
        <div className="post-grid__grid | auto-grid">
          {posts.length > 1 ? (
            posts.map(post => (
              <Post key={post.title} {...post} />
            ))
          ) : (
            <p>no posts found...</p>
          )}
        </div>
      </div>
    </section>
  )
}
