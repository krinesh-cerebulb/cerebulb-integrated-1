import Link from 'next/link';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

// List of IT services with their slugs
const services = [
  { 
    name: 'Custom Software Development',
    slug: 'custom-software-development',
    description: 'Tailored software solutions for your business needs.'
  },
  { 
    name: 'Software Prototyping',
    slug: 'software-prototyping',
    description: 'Rapid prototyping to visualize your software ideas.'
  },
  { 
    name: 'DevOps Automation',
    slug: 'devops-automation',
    description: 'Streamline your development and operations processes.'
  },
  { 
    name: 'Mobile Application Development',
    slug: 'mobile-app-development',
    description: 'Create powerful mobile applications for iOS and Android.'
  },
  { 
    name: 'Cloud Computing',
    slug: 'cloud-computing',
    description: 'Leverage cloud technologies for your business.'
  },
  { 
    name: 'Quality Assurance',
    slug: 'quality-assurance',
    description: 'Ensure high-quality software through comprehensive testing.'
  },
  { 
    name: 'Systems Integration',
    slug: 'systems-integration',
    description: 'Connect your systems and applications seamlessly.'
  },
  { 
    name: 'Web Application Development',
    slug: 'web-application-development',
    description: 'Build modern web applications with cutting-edge technologies.'
  }
];

export default function ITServices() {
  return (
    <main className="container py-8 px-4 mx-auto">
      <Heading className="mb-6">Our IT Services</Heading>
      
      <Content className="prose max-w-none mb-8">
        <p>We offer a comprehensive range of IT services to help businesses thrive in the digital age.</p>
      </Content>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link 
            key={service.slug}
            href={`/it-services/${service.slug}`}
            className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            <span className="mt-4 inline-block text-blue-600 hover:underline">Learn more &rarr;</span>
          </Link>
        ))}
      </div>
    </main>
  );
} 