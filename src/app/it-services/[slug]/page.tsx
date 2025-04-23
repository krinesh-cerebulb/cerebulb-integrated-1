'use client';

import { useParams } from 'next/navigation';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

// This would typically come from a database or API
const serviceDetails = {
  'custom-software-development': {
    title: 'Custom Software Development',
    description: 'Our custom software development services help businesses create tailored solutions that address their specific needs and challenges.',
    content: `
      <p>At our company, we specialize in building custom software applications that are designed specifically for your business requirements. Our team of experienced developers works closely with you to understand your needs and create solutions that streamline your operations and drive growth.</p>
      
      <h3>Our Approach</h3>
      <ul>
        <li>Thorough business analysis and requirement gathering</li>
        <li>Agile development methodology</li>
        <li>Regular client communication and feedback</li>
        <li>Comprehensive testing and quality assurance</li>
        <li>Ongoing support and maintenance</li>
      </ul>
      
      <h3>Technologies We Use</h3>
      <p>We leverage the latest technologies and frameworks to build robust, scalable, and secure software solutions:</p>
      <ul>
        <li>Frontend: React, Angular, Vue.js</li>
        <li>Backend: Node.js, .NET, Java, Python</li>
        <li>Mobile: React Native, Flutter</li>
        <li>Databases: SQL, NoSQL</li>
        <li>Cloud: AWS, Azure, Google Cloud</li>
      </ul>
    `
  },
  // Add more service details as needed
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  
  // Get service details or use defaults if not found
  const service = serviceDetails[slug as keyof typeof serviceDetails] || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
    description: 'Details about this IT service.',
    content: '<p>Content for this service is currently being updated.</p>'
  };

  return (
    <main className="container py-8 px-4 mx-auto">
      <Heading className="mb-2">{service.title}</Heading>
      
      <p className="text-lg text-gray-600 mb-6">{service.description}</p>
      
      <Content className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: service.content }} />
      </Content>
    </main>
  );
} 