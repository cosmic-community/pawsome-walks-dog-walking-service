import { getContactInfo } from '@/lib/cosmic'
import { ContactInfo } from '@/types'

export default async function ContactPage() {
  const contactData = await getContactInfo()
  const contact = contactData as ContactInfo | null

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to give your dog the exercise and care they deserve? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            {contact && (
              <div className="space-y-6">
                {contact.metadata?.business_name && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {contact.metadata.business_name}
                    </h3>
                  </div>
                )}

                {contact.metadata?.phone && (
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-700">{contact.metadata.phone}</p>
                    </div>
                  </div>
                )}

                {contact.metadata?.emergency_phone && (
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Emergency</p>
                      <p className="text-gray-700">{contact.metadata.emergency_phone}</p>
                    </div>
                  </div>
                )}

                {contact.metadata?.email && (
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">{contact.metadata.email}</p>
                    </div>
                  </div>
                )}

                {contact.metadata?.address && (
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-700 whitespace-pre-line">{contact.metadata.address}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Business Hours & Service Areas */}
          <div className="space-y-8">
            {contact?.metadata?.hours && (
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {Object.entries(contact.metadata.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium text-gray-900">{day}</span>
                      <span className="text-gray-700">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {contact?.metadata?.service_areas && contact.metadata.service_areas.length > 0 && (
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {contact.metadata.service_areas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Give us a call or send us an email to discuss your dog's needs and schedule your first service!
          </p>
          {contact?.metadata?.phone && (
            <a
              href={`tel:${contact.metadata.phone}`}
              className="inline-block bg-white text-primary-500 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call {contact.metadata.phone}
            </a>
          )}
        </div>
      </section>
    </>
  )
}