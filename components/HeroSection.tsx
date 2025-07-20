import { About } from '@/types'
import Link from 'next/link'

interface HeroSectionProps {
  about: About | null
}

export default function HeroSection({ about }: HeroSectionProps) {
  if (!about) {
    return (
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Dog Walking Services
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Keeping your furry friends happy, healthy, and well-exercised while you're away.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-r from-primary-50 to-secondary-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {about.metadata?.hero_title || about.title}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {about.metadata?.hero_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg">
                Get Started Today
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                View Services
              </Link>
            </div>
          </div>
          {about.metadata?.hero_image && (
            <div className="relative">
              <img
                src={`${about.metadata.hero_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                alt={about.metadata.hero_title || about.title}
                width="600"
                height="400"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-primary-500/20 rounded-lg"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}