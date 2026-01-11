import React from 'react'
import Link from "next/link";
import Image from "next/image";
import type { Page } from '@/payload-types'
import "./style.scss";

import { formatPublishDate } from '@/utilities/formatPublishDate';
import Category from '@/components/Category';
import PostMeta from '@/components/PostMeta';


export const HomeHero: React.FC<Page['hero']> = ({ featuredPost }) => {
  const image = featuredPost.heroImage;
  const slug = featuredPost.slug;
  const title = featuredPost.title;
  const categories = featuredPost.categories;
  const publishDate = formatPublishDate(featuredPost.publishedAt);
  const author = featuredPost.populatedAuthor;

  return (
    <section className="home-hero | section">
      <div className="container">
        <div className="home-hero__inner">
          <div className="home-hero__image-wrapper">
            <Image
              src={image?.url}
              alt={title}
              fill
              priority
              className="home-hero__image"
            />
          </div>

          <div className="home-hero__card | flow">
            {categories.length > 0 &&
              (
                <div className="post__categories | cluster">
                  {categories.map(category => (
                    <Category key={category.id} slug={category.slug} variant="primary">{category.title}</Category>
                  ))}
                </div>
              )
            }

            <Link className="home-hero__link" href={`/posts/${slug}`}>
              <h1 className="home-hero__title">{title}</h1>
            </Link>

            <PostMeta
              className="home-hero__meta-info"
              date={publishDate}
            />

          </div>
        </div>
      </div>
    </section>
  );
}
