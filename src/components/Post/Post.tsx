import clsx from "clsx";
import Image from "next/image";
import '@styles/main.scss'
import './Post.scss'

import Category from '@components/Category/Category.tsx';
import PostMeta from '@components/PostMeta/PostMeta.tsx';

export type PostProps = {
  image?: string,
  categories: string[],
  title: string,
  date: string;
  authorName: string;
  authorImage?: string;
  className?: string;
};

export default function Post({
  image = '/images/post-placeholder.jpg',
  categories = [],
  title,
  date,
  authorName,
  authorImage="/images/avatar-placeholder.png",
  className
}: PostProps) {
  return (
    <article className={clsx("post", className)}>
      <Image
        src={image}
        alt={title}
        width={360}
        height={240}
        className="post__image"
      />

      <div className="post__content">
        {categories.length > 0 && 
          (
            <div className="post__categories | cluster">
              {categories.map(category => (
                <Category key={category} variant="secondary">{category}</Category>
              ))}
            </div>
          )
        }
        <h3 className="post__title">{title}</h3>
        <PostMeta
          className="post__meta-info"
          authorImage={authorImage}
          authorName={authorName}
          date={date}
        />
      </div>
    </article>
  );
}
