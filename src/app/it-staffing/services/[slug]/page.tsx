'use client';

import { useParams } from 'next/navigation';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

// This would typically come from a database or API
const staffingDetails = {
  'permanent-staffing': {
    title: 'Permanent Staffing',
    description: 'Long-term staffing solutions with direct employment opportunities.',
    content: `
      <h3>What is Permanent Staffing?</h3>
      <p>
        Permanent staffing provides organizations with full-time employees who become integral 
        members of your team. We help you find and hire top talent for long-term positions, 
        ensuring a perfect match between candidates' skills and your company culture.
      </p>
      
      <h3>Our Permanent Staffing Process</h3>
      <ul>
        <li>Understanding your requirements and company culture</li>
        <li>Comprehensive candidate screening and assessment</li>
        <li>Background verification and reference checks</li>
        <li>Interview coordination and feedback management</li>
        <li>Offer negotiation and acceptance support</li>
      </ul>
      
      <h3>Benefits of Permanent Staffing</h3>
      <ul>
        <li>Build a stable, long-term workforce</li>
        <li>Reduce employee turnover</li>
        <li>Foster company culture and loyalty</li>
        <li>Comprehensive skill matching</li>
        <li>Cost-effective long-term solution</li>
      </ul>
    `
  },
  'temporary-staffing': {
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions for your short-term and project-based needs.',
    content: `
      <h3>What is Temporary Staffing?</h3>
      <p>
        Temporary staffing provides businesses with flexible workforce solutions to address 
        short-term needs, seasonal demands, or specific project requirements. Our temporary 
        staffing services help you maintain productivity while managing costs effectively.
      </p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Immediate access to skilled professionals</li>
        <li>Flexible hiring durations</li>
        <li>Cost-effective staffing solution</li>
        <li>No long-term commitments</li>
        <li>Ability to scale workforce as needed</li>
      </ul>
      
      <h3>Common Use Cases</h3>
      <ul>
        <li>Project-based assignments</li>
        <li>Seasonal workload increases</li>
        <li>Coverage for employee leaves</li>
        <li>Special initiatives and deadlines</li>
        <li>Skills gap filling</li>
      </ul>
    `
  },
  'recruitment-process-outsourcing': {
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'End-to-end recruitment process management for your organization.',
    content: `
      <h3>What is RPO?</h3>
      <p>
        Recruitment Process Outsourcing (RPO) is a comprehensive solution where we take 
        ownership of your entire recruitment function. We act as an extension of your HR 
        team, managing everything from job posting to onboarding.
      </p>
      
      <h3>Our RPO Services Include</h3>
      <ul>
        <li>Recruitment strategy development</li>
        <li>Employer branding</li>
        <li>Job posting and advertising</li>
        <li>Candidate sourcing and screening</li>
        <li>Interview scheduling and coordination</li>
        <li>Offer management</li>
        <li>Onboarding support</li>
      </ul>
      
      <h3>Benefits of RPO</h3>
      <ul>
        <li>Reduced recruitment costs</li>
        <li>Improved quality of hire</li>
        <li>Faster time-to-fill positions</li>
        <li>Scalable recruitment process</li>
        <li>Access to advanced recruitment technologies</li>
        <li>Consistent hiring practices</li>
      </ul>
    `
  }
};

export default function StaffingService() {
  const { slug } = useParams();
  const service = staffingDetails[slug as keyof typeof staffingDetails];

  if (!service) {
    return (
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Service Not Found
          </Heading>
          <p className="text-gray-600">
            The staffing service you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          {service.title}
        </Heading>
        <p className="text-lg text-gray-600 mb-8">
          {service.description}
        </p>
        <Content className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: service.content }} />
        </Content>
      </div>
    </main>
  );
}
