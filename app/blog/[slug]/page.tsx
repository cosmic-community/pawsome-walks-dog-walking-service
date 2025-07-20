// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getBlogPosts } from '@/lib/cosmic'
import { BlogPost } from '@/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const postData = await getBlogPostBySlug(slug)

  if (!postData) {
    notFound()
  }

  const post = postData as BlogPost

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L3.586 12l2.707-2.707a1 1 0 011.414 1.414L6.414 12l1.293 1.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {post.metadata?.title || post.title}
          </h1>
          {post.metadata?.excerpt && (
            <p className="text-xl text-gray-700 mb-8">
              {post.metadata.excerpt}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            {post.metadata?.author && (
              <div className="flex items-center">
                {post.metadata.author.metadata?.photo && (
                  <img
                    src={`${post.metadata.author.metadata.photo.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
                    alt={post.metadata.author.metadata.name || post.metadata.author.title}
                    width="40"
                    height="40"
                    className="rounded-full mr-2"
                  />
                )}
                <span>By {post.metadata.author.metadata?.name || post.metadata.author.title}</span>
              </div>
            )}
            {post.metadata?.published_date && (
              <div>
                <span>{new Date(post.metadata.published_date).toLocaleDateString()}</span>
              </div>
            )}
            {post.metadata?.tags && post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.metadata.title || post.title}
            width="1200"
            height="600"
            className="rounded-lg shadow-lg w-full"
          />
        </section>
      )}

      {/* Post Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article>
          {post.metadata?.content && (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.metadata.content }}
            />
          )}
        </article>

        {/* Author Bio */}
        {post.metadata?.author && post.metadata.author.metadata?.bio && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              {post.metadata.author.metadata.photo && (
                <img
                  src={`${post.metadata.author.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={post.metadata.author.metadata.name || post.metadata.author.title}
                  width="80"
                  height="80"
                  className="rounded-full mr-4 flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.metadata.author.metadata.name || post.metadata.author.title}
                </h3>
                {post.metadata.author.metadata.position && (
                  <p className="text-sm text-gray-600 mb-2">{post.metadata.author.metadata.position}</p>
                )}
                <div 
                  className="text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{ __html: post.metadata.author.metadata.bio }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="btn-primary"
          >
            Read More Articles
          </Link>
        </div>
      </section>
    </div>
  )
}