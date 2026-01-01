import Image from "next/image";
import "./HeroPrimary.scss";
import '@styles/main.scss'

import Category from '@components/Category/Category';
import PostMeta from '@components/PostMeta/PostMeta';
import type { PostProps } from '@components/Post/Post';

type HeroPrimaryProps = PostProps;

export default function HeroPrimary({
  image = '/images/post-placeholder.jpg',
  categories = [],
  title,
  date,
  authorName,
  authorImage="/images/avatar-placeholder.png",
  className
}: HeroPrimaryProps) {
  return (
    <section className="hero-primary | section">
      <div className="container">
        <div className="hero-primary__inner">
          <div className="hero-primary__image-wrapper">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="hero-primary__image"
            />
          </div>

          <div className="hero-primary__card | flow">
            {categories.length > 0 && 
              (
                <div className="post__categories | cluster">
                  {categories.map(category => (
                    <Category key={category} variant="primary">{category}</Category>
                  ))}
                </div>
              )
            }
            <h1 className="hero-primary__title">{title}</h1>
            <PostMeta
              className="hero-primary__meta-info"
              authorImage={authorImage}
              authorName={authorName}
              date={date}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
