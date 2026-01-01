import clsx from "clsx";
import Image from "next/image";
import '@styles/main.scss'
import './PostMeta.scss'

type PostMetaProps = {
  date: string;
  authorName: string;
  authorImage?: string;
  className?: string;
};

export default function PostMeta({
  authorImage,
  authorName,
  date,
  className,
}: PostMetaProps) {
  return (
    <div className={clsx("post-meta | cluster", className)}>
      <div className="post-meta__author | cluster">
        <Image
          src={authorImage ? authorImage : '/images/avatar-placeholder.png'}
          alt={authorName}
          width={36}
          height={36}
          className="post-meta__avatar"
        />
        <p className="post-meta__author-name">{authorName}</p>
      </div>
      <p className="post-meta__date">{date}</p>
    </div>
  );
}
