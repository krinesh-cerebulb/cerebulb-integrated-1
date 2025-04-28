import Link from 'next/link';
import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

// Technology categories and their details
const technologies = [
  {
    slug: 'java',
    title: 'Java',
    description: 'Enterprise-grade applications with Spring Framework, Java EE, and more.',
    image: '/tech/Java.png'
  },
  {
    slug: 'dotnet',
    title: '.NET',
    description: 'Full-stack development with ASP.NET Core, Blazor, and the Microsoft ecosystem.',
    image: '/tech/Dotnet.png'
  },
  {
    slug: 'crm',
    title: 'CRM',
    description: 'Customer relationship management solutions with Salesforce, Dynamics 365, and more.',
    image: '/tech/CRM.png'
  },
  {
    slug: 'api-testing',
    title: 'API Testing',
    description: 'Comprehensive testing of REST, SOAP, and GraphQL APIs with automation.',
    image: '/tech/api-testing.png'
  },
  {
    slug: 'devops',
    title: 'DevOps',
    description: 'CI/CD pipelines, infrastructure as code, and cloud automation.',
    image: '/tech/devops.png'
  },
  {
    slug: 'cloud-technologies',
    title: 'Cloud Technologies',
    description: 'AWS, Azure, and Google Cloud implementation and migration strategies.',
    image: '/tech/cloud.png'
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'Agile, Scrum, and traditional methodologies for successful project delivery.',
    image: '/tech/project-management.png'
  },
  {
    slug: 'bigdata-technologies',
    title: 'BigData Technologies',
    description: 'Hadoop, Spark, and data processing solutions for large-scale analytics.',
    image: '/tech/bigdata.png'
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    description: 'Predictive analytics, NLP, computer vision, and intelligent applications.',
    image: '/tech/ai-ml.png'
  }
];

export default function Technologies() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Heading className="text-3xl md:text-4xl font-bold mb-4">
            Our Technology Expertise
          </Heading>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver innovative solutions for businesses of all sizes. 
            Our technical expertise spans across various domains and platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <Link 
              href={`/technologies/${tech.slug}`} 
              key={tech.slug}
              className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-100 p-6 flex items-center justify-center h-48">
                <Image 
                  src={tech.image} 
                  alt={tech.title}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-105 transition-transform"
                  // Removed onError handler, as Next.js Image does not support it
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
                <p className="mt-4 text-blue-600 font-medium group-hover:text-blue-800">
                  Learn more <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
