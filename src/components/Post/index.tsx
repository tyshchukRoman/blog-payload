import type { Post as PostProps } from 'src/payload-types'
import React from 'react'
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { formatPublishDate } from '@/utilities/formatPublishDate';
import Category from '@/components/Category';
import PostMeta from '@/components/PostMeta';
import './style.scss'

export const Post: React.FC<PostProps> = ({
  heroImage = '/images/post-placeholder.jpg',
  categories = [],
  title,
  slug,
  publishedAt,
  populatedAuthor,
  className
}) => {
  return (
    <article className={clsx("post", className)}>
      <Link className="post__image-wrapper" href={`/posts/${slug}`}>
        <Image
          src={heroImage?.url ? heroImage.url : '/post-placeholder.jpg'}
          alt={heroImage?.alt ? heroImage.alt : title}
          className="post__image"
          fill
        />
      </Link>

      <div className="post__content">
        {categories.length > 0 &&
          (
            <div className="post__categories | cluster">
              {categories.map(category => (
                <Category key={category.id} slug={category.slug} variant="secondary">{category.title}</Category>
              ))}
            </div>
          )
        }

        <Link className="post__link" href={`/posts/${slug}`}>
          <h3 className="post__title">{title}</h3>
        </Link>

        <PostMeta
          className="post__meta-info"
          date={formatPublishDate(publishedAt)}
        />
      </div>
    </article>
  );
}
