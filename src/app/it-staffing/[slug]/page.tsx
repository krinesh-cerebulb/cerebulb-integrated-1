'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';
import { useParams } from 'next/navigation';

const highlights = [
  '10 Years of Expertise',
  'Our Work Speaks For Itself',
  'Extensive Domain Expertise',
  'Up-to-date Database',
  'Smooth Recruit Process',
  "You&apos;re Not Just Another Client To Us",
  "We&apos;re Perpetually Transforming To Meet Market Needs"
];

const benefits = [
  {
    icon: '/images/staffing/visa.svg',
    title: 'Visa Sponsorship Immigration',
    description: 'We provide visa sponsorship and immigration support for eligible candidates'
  },
  {
    icon: '/images/staffing/insurance.svg',
    title: 'Medical Vision & Dental Insurance',
    description: 'Comprehensive health benefits including medical, vision, and dental coverage'
  }
];

interface BaseService {
  title: string;
  description: string;
}

interface FullPageService extends BaseService {
  fullPage: true;
}

interface ContentService extends BaseService {
  content: string;
}

type StaffingService = FullPageService | ContentService;

// This would typically come from a database or API
const staffingDetails: Record<string, StaffingService> = {
  'permanent-staffing': {
    title: 'Permanent Staffing',
    description: 'Long-term staffing solutions with direct employment opportunities.',
    fullPage: true
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
            The staffing service you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
      </main>
    );
  }

  // Type guard to check if service is a FullPageService
  const isFullPageService = (service: StaffingService): service is FullPageService => {
    return 'fullPage' in service;
  };

  // Type guard to check if service is a ContentService
  const isContentService = (service: StaffingService): service is ContentService => {
    return 'content' in service;
  };

  // Special layout for permanent staffing
  if (isFullPageService(service)) {
    return (
      <>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative h-[400px]">
                <Image
                  src="/images/staffing/permanent-staffing.webp"
                  alt="Permanent Staffing"
                  fill
                  className="object-contain"
                  priority   
                />
              </div>

              {/* Text Content Side */}
              <div>
                <Heading className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </Heading>
                <p className="text-gray-600 mb-6">
                  Permanent employees work for an employer and are paid directly by that employer. 
                  Permanent employees do not have a predetermined end date to employment.
                </p>

                <ul className="space-y-4">
                  {highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-800 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#1e2b58]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Key Benefits For Employees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-6 bg-white/5 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // Regular layout for other services
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
          {isContentService(service) && (
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          )}
        </Content>
      </div>
    </main>
  );
}
