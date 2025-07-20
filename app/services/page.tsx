import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default async function ServicesPage() {
  const servicesData = await getServices()
  const services = servicesData as Service[]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional dog walking and pet care services tailored to your furry friend's needs. 
            Licensed, insured, and passionate about pet care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services available at the moment.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today to discuss your dog's needs and schedule your first walk!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-500 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}