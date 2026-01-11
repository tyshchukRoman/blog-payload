import type { LatestPosts as LatestPostsProps } from 'src/payload-types'
import React from 'react'
import config from '@payload-config'
import { getPayload } from 'payload'
import { PostGrid } from '@/components/PostGrid'

export const LatestPosts: React.FC<LatestPostsProps> = async () => {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 9,
    sort: '-publishedAt', // Sort by publishedAt descending (newest first)
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return <PostGrid posts={posts} title="Latest Posts" className="latest-posts" />
}
