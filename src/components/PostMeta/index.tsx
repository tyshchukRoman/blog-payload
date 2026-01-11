import clsx from "clsx";
import Image from "next/image";
import './style.scss'

type PostMetaProps = {
  date: string;
  authorName?: string;
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
          src={authorImage ? authorImage : '/avatar-placeholder.png'}
          alt={authorName ? authorName : 'Unknown author image'}
          width={36}
          height={36}
          className="post-meta__avatar"
        />
        <p className="post-meta__author-name">{authorName ? authorName : 'Unknown'}</p>
      </div>
      <p className="post-meta__date">{date}</p>
    </div>
  );
}
