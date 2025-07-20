import { BlogPost } from '@/types'
import Link from 'next/link'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block hover:transform hover:scale-105 transition-all duration-200">
        {post.metadata?.featured_image && (
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={post.metadata.title || post.title}
              width="600"
              height="400"
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            {post.metadata?.author && (
              <div className="flex items-center">
                {post.metadata.author.metadata?.photo && (
                  <img
                    src={`${post.metadata.author.metadata.photo.imgix_url}?w=32&h=32&fit=crop&auto=format,compress`}
                    alt={post.metadata.author.metadata.name || post.metadata.author.title}
                    width="32"
                    height="32"
                    className="rounded-full mr-2"
                  />
                )}
                <span>{post.metadata.author.metadata?.name || post.metadata.author.title}</span>
              </div>
            )}
            {post.metadata?.published_date && (
              <span>{new Date(post.metadata.published_date).toLocaleDateString()}</span>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
            {post.metadata?.title || post.title}
          </h3>
          
          {post.metadata?.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.metadata.excerpt}
            </p>
          )}
          
          {post.metadata?.tags && post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.metadata.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
            Read More →
          </div>
        </div>
      </Link>
    </article>
  )
}