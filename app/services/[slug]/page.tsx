// app/services/[slug]/page.tsx
import { getServiceBySlug, getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const serviceData = await getServiceBySlug(slug)

  if (!serviceData) {
    notFound()
  }

  const service = serviceData as Service

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {service.metadata?.name}
              </h1>
              {service.metadata?.short_description && (
                <p className="text-xl text-gray-700 mb-8">
                  {service.metadata.short_description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                {service.metadata?.price && (
                  <div className="bg-primary-500 text-white px-6 py-3 rounded-lg">
                    <span className="text-2xl font-bold">{service.metadata.price}</span>
                  </div>
                )}
                {service.metadata?.duration && (
                  <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                    <span className="font-semibold">{service.metadata.duration}</span>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book This Service
              </Link>
            </div>
            {service.metadata?.image && (
              <div className="relative">
                <img
                  src={`${service.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={service.metadata.name || service.title}
                  width="600"
                  height="400"
                  className="rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {service.metadata?.description && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Details</h2>
                <div 
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: service.metadata.description }}
                />
              </div>
            )}
          </div>
          <div>
            {service.metadata?.features && service.metadata.features.length > 0 && (
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {service.metadata.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Book?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today to schedule your {service.metadata?.name} service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}