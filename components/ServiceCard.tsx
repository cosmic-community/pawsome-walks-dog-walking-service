import { Service } from '@/types'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      {service.metadata?.image && (
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={`${service.metadata.image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
            alt={service.metadata.name || service.title}
            width="600"
            height="300"
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            {service.metadata?.name || service.title}
          </h3>
          {service.metadata?.price && (
            <span className="text-2xl font-bold text-primary-500">
              {service.metadata.price}
            </span>
          )}
        </div>
        
        {service.metadata?.short_description && (
          <p className="text-gray-700 mb-4">
            {service.metadata.short_description}
          </p>
        )}
        
        {service.metadata?.duration && (
          <p className="text-sm text-gray-600 mb-4">
            Duration: {service.metadata.duration}
          </p>
        )}
        
        {service.metadata?.features && service.metadata.features.length > 0 && (
          <ul className="text-sm text-gray-600 mb-6 space-y-1">
            {service.metadata.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Link
          href={`/services/${service.slug}`}
          className="inline-block w-full text-center btn-primary"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}