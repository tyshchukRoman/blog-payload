import Image from "next/image";
import "./HeroPrimary.scss";
import '@styles/main.scss'

import Category from '@components/Category/Category.tsx';
import PostMeta from '@components/PostMeta/PostMeta.tsx';

type HeroPrimaryProps = {
  imageSrc: string;
  category: string;
  title: string;
  author: string;
  date: string;
};

export default function HeroPrimary({
  imageSrc,
  category,
  title,
  author,
  date,
}: HeroPrimaryProps) {
  return (
    <section className="hero-primary | section">
      <div className="container">
        <div className="hero-primary__inner">
          <div className="hero-primary__image-wrapper">
            <Image
              src={imageSrc}
              alt={title}
              fill
              priority
              className="hero-primary__image"
            />
          </div>

          <div className="hero-primary__card | flow">
            <Category variant="primary">{category}</Category>

            <h1 className="">{title}</h1>

            <PostMeta
              className="hero-primary__meta-info"
              authorImage="/images/avatar.jpg"
              authorName="Jason Francisco"
              date="August 20, 2022"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
