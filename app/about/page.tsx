import { getAboutPage, getTeamMembers } from '@/lib/cosmic'
import { About, TeamMember } from '@/types'
import TeamGrid from '@/components/TeamGrid'
import StatsSection from '@/components/StatsSection'

export default async function AboutPage() {
  const [aboutData, teamData] = await Promise.all([
    getAboutPage(),
    getTeamMembers()
  ])

  const about = aboutData as About
  const team = teamData as TeamMember[]

  if (!about) {
    return <div>About information not found</div>
  }

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {about.metadata?.hero_title}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {about.metadata?.hero_subtitle}
              </p>
            </div>
            {about.metadata?.hero_image && (
              <div className="relative">
                <img
                  src={`${about.metadata.hero_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt={about.metadata.hero_title || 'About Pawsome Walks'}
                  width="600"
                  height="400"
                  className="rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {about.metadata?.mission && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div 
                className="prose text-lg"
                dangerouslySetInnerHTML={{ __html: about.metadata.mission }}
              />
            </div>
          )}
          
          {about.metadata?.story && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div 
                className="prose text-lg"
                dangerouslySetInnerHTML={{ __html: about.metadata.story }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <StatsSection about={about} />

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our certified and experienced team members are passionate about providing the best care for your furry friends.
            </p>
          </div>
          <TeamGrid team={team} />
        </div>
      </section>
    </div>
  )
}