import { BlogPost } from '@/types'
import Link from 'next/link'
import BlogCard from './BlogCard'

interface BlogPreviewProps {
  posts: BlogPost[]
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Stay informed with expert tips, safety guides, and helpful advice for your furry friends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/blog" className="btn-secondary">
            Read All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}