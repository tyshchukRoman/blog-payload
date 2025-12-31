import clsx from "clsx";
import Image from "next/image";
import '@styles/main.scss'
import './PostMeta.scss'

type PostMetaProps = {
  authorImage: string;
  authorName: string;
  date: string;
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
          src={authorImage}
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
