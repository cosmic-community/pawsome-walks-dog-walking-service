import { getAboutPage, getServices, getTestimonials, getBlogPosts } from '@/lib/cosmic'
import { About, Service, Testimonial, BlogPost } from '@/types'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import StatsSection from '@/components/StatsSection'
import BlogPreview from '@/components/BlogPreview'

export default async function HomePage() {
  const [aboutData, servicesData, testimonialsData, blogData] = await Promise.all([
    getAboutPage(),
    getServices(),
    getTestimonials(),
    getBlogPosts()
  ])

  const about = aboutData as About
  const services = servicesData as Service[]
  const testimonials = testimonialsData as Testimonial[]
  const blogPosts = blogData as BlogPost[]

  // Get featured services
  const featuredServices = services.filter(service => service.metadata?.featured)

  // Get featured testimonials
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.metadata?.featured)

  // Get latest blog posts (limit to 3)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <HeroSection about={about} />
      <ServicesSection services={featuredServices} />
      {about && <StatsSection about={about} />}
      <TestimonialsSection testimonials={featuredTestimonials} />
      <BlogPreview posts={latestPosts} />
    </>
  )
}