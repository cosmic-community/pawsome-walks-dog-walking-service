import Link from 'next/link'
import { getContactInfo } from '@/lib/cosmic'
import { ContactInfo } from '@/types'

export default async function Footer() {
  const contactData = await getContactInfo()
  const contact = contactData as ContactInfo | null

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">🐾 Pawsome Walks</h3>
            <p className="text-gray-300 mb-4">
              Professional dog walking and pet care services. Licensed, insured, and passionate about keeping your furry friends happy and healthy.
            </p>
            {contact?.metadata?.business_name && (
              <p className="text-sm text-gray-400">{contact.metadata.business_name}</p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              {contact?.metadata?.phone && (
                <p>{contact.metadata.phone}</p>
              )}
              {contact?.metadata?.email && (
                <p>{contact.metadata.email}</p>
              )}
              {contact?.metadata?.emergency_phone && (
                <p className="text-sm">Emergency: {contact.metadata.emergency_phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        {contact?.metadata?.service_areas && contact.metadata.service_areas.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="flex flex-wrap gap-4">
              {contact.metadata.service_areas.map((area, index) => (
                <span key={index} className="text-gray-300 text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pawsome Walks. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href={`https://www.cosmicjs.com?utm_source=bucket_${process.env.COSMIC_BUCKET_SLUG}&utm_medium=referral&utm_campaign=app_footer&utm_content=built_with_cosmic`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              <img 
                src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
                alt="Cosmic Logo" 
                width="20"
                height="20"
              />
              Built with Cosmic
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}