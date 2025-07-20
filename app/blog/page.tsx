import { getBlogPosts } from '@/lib/cosmic'
import { BlogPost } from '@/types'
import BlogCard from '@/components/BlogCard'

export default async function BlogPage() {
  const blogData = await getBlogPosts()
  const posts = blogData as BlogPost[]

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dog Care Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert tips, safety guides, and helpful advice for keeping your furry friends happy and healthy.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
          </div>
        )}
      </section>
    </div>
  )
}