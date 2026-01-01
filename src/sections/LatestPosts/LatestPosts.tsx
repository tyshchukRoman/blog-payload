import PostGrid from '@components/PostGrid/PostGrid';

type LatestPostsProps = {
  title: string
};

const posts = [
  {
    categories: ["Design", "UX"],
    title: "Designing Interfaces That Feel Effortless",
    date: "2025-01-12",
    authorName: "Alex Morgan",
  },
  {
    categories: ["Development", "Next.js"],
    title: "Scaling Next.js Apps Without Losing Performance",
    date: "2025-01-08",
    authorName: "Sofia Turner",
  },
  {
    categories: ["WordPress", "Gutenberg"],
    title: "Why Gutenberg Is the Future of WordPress Editing",
    date: "2024-12-28",
    authorName: "Roman Tyshchuk",
  },
  {
    categories: ["Business"],
    title: "How Small Agencies Can Compete With Big Studios",
    date: "2024-12-15",
    authorName: "Daniel Wright",
  },
  {
    categories: ["Frontend", "CSS"],
    title: "Modern CSS Layouts: Grid, Flex, and Beyond",
    date: "2024-11-30",
    authorName: "Emily Chen",
  },
];

export default function LatestPosts({ title }: LatestPostsProps) {
  return <PostGrid posts={posts} title={title} className="latest-posts" />
}

