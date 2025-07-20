import { TeamMember } from '@/types'

interface TeamGridProps {
  team: TeamMember[]
}

export default function TeamGrid({ team }: TeamGridProps) {
  if (!team || team.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No team members available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.id} className="card p-6 text-center">
          {member.metadata?.photo && (
            <img
              src={`${member.metadata.photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={member.metadata.name || member.title}
              width="200"
              height="200"
              className="rounded-full mx-auto mb-4"
            />
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {member.metadata?.name || member.title}
          </h3>
          {member.metadata?.position && (
            <p className="text-primary-600 font-semibold mb-3">{member.metadata.position}</p>
          )}
          {member.metadata?.bio && (
            <div 
              className="text-gray-600 text-sm mb-4"
              dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
            />
          )}
          <div className="space-y-2">
            {member.metadata?.years_experience && (
              <p className="text-sm text-gray-500">
                <span className="font-semibold">{member.metadata.years_experience}</span> years experience
              </p>
            )}
            {member.metadata?.favorite_breed && (
              <p className="text-sm text-gray-500">
                Favorite breed: <span className="font-semibold">{member.metadata.favorite_breed}</span>
              </p>
            )}
            {member.metadata?.certifications && member.metadata.certifications.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-gray-400 mb-1">Certifications:</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.metadata.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}