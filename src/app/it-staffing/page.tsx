import Link from 'next/link';
import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

const staffingServices = [
  {
    name: 'Permanent Staffing',
    slug: 'permanent-staffing',
    description: 'Long-term staffing solutions with direct employment.',
    image: '/images/staffing/permanent-staffing.webp'
  },
  {
    name: 'Temporary Staffing',
    slug: 'temporary-staffing',
    description: 'Flexible staffing solutions for short-term needs.',
    image: '/images/staffing/temporary-staffing.webp'
  },
  {
    name: 'Recruitment Process Outsourcing (RPO)',
    slug: 'recruitment-process-outsourcing',
    description: 'End-to-end recruitment process management.',
    image: '/images/staffing/rpo.webp'
  }
];

export default function ITStaffing() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              IT Staffing Services
            </Heading>
            <Content className="prose max-w-none">
              <p className="text-lg text-gray-600">
                We offer comprehensive IT staffing solutions to help you build high-performing teams.
                Our services are designed to meet your specific needs, whether you&apos;re looking for permanent
                employees, temporary staff, or complete recruitment process outsourcing.
              </p>
            </Content>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffingServices.map((service) => (
            <div 
              key={service.slug}
              className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-50 p-6 flex items-center justify-center h-72">
                <div className="relative w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform"
                    priority
                  />
                </div>
              </div>
              <div className="p-6">
                <Link 
                  href={`/it-staffing/${service.slug}`}
                  className="block text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors text-center mb-3"
                >
                  {service.name}
                </Link>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}