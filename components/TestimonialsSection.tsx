import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from happy pet parents in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6">
              <div className="flex items-center mb-4">
                {testimonial.metadata?.photo && (
                  <img
                    src={`${testimonial.metadata.photo.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.customer_name || 'Customer'}
                    width="60"
                    height="60"
                    className="rounded-full mr-4"
                  />
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.metadata?.customer_name}
                  </h4>
                  {testimonial.metadata?.dog_name && (
                    <p className="text-sm text-gray-600">
                      Pet parent to {testimonial.metadata.dog_name}
                    </p>
                  )}
                  {testimonial.metadata?.location && (
                    <p className="text-sm text-gray-500">{testimonial.metadata.location}</p>
                  )}
                </div>
              </div>
              
              {testimonial.metadata?.rating && (
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < parseInt(testimonial.metadata.rating?.key || '0')
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}
              
              {testimonial.metadata?.review && (
                <blockquote className="text-gray-700 italic">
                  "{testimonial.metadata.review}"
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}