import { About } from '@/types'

interface StatsSectionProps {
  about: About
}

export default function StatsSection({ about }: StatsSectionProps) {
  const stats = [
    {
      label: 'Years of Experience',
      value: about.metadata?.years_experience || 0,
      suffix: '+'
    },
    {
      label: 'Dogs Walked',
      value: about.metadata?.dogs_walked || 0,
      suffix: '+'
    },
    {
      label: 'Happy Customers',
      value: about.metadata?.happy_customers || 0,
      suffix: '+'
    }
  ]

  // Only show stats if we have at least one meaningful value
  const hasStats = stats.some(stat => stat.value > 0)

  if (!hasStats) {
    return null
  }

  return (
    <section className="bg-primary-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-primary-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}