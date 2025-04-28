'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function DevOpsAutomation() {
  const services = [
    {
      title: 'DevOps Consulting Services',
      description: 'Expert guidance on implementing DevOps practices and culture in your organization.'
    },
    {
      title: 'Infrastructure Automation',
      description: 'Automate infrastructure provisioning and management for faster deployments.'
    },
    {
      title: 'DevOps Configuration Management',
      description: 'Streamline configuration processes across your development and production environments.'
    },
    {
      title: 'Integration & Deployment',
      description: 'Implement CI/CD pipelines for seamless software delivery and deployment.'
    },
    {
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring solutions to ensure optimal system performance.'
    },
    {
      title: 'Platform-As-A-Service (PaaS)',
      description: 'Cloud-based platform services for efficient application deployment and scaling.'
    }
  ];

  const benefits = [
    {
      title: 'Improving The Productivity Of Your Software Development Teams',
      description: 'Streamline workflows and automate repetitive tasks to boost team efficiency.'
    },
    {
      title: 'Maintain Consistency In Your Software Deliveries',
      description: 'Ensure reliable and consistent deployments across all environments.'
    },
    {
      title: 'Resolving Problems',
      description: 'Quick identification and resolution of issues through automated monitoring and alerts.'
    },
    {
      title: 'Enhancing IT Systems And Streamlining The Process',
      description: 'Optimize and modernize IT infrastructure for better performance and scalability.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a237e] text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Heading className="text-4xl md:text-5xl font-bold text-white mb-4">
                DevOps Automation
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                Our DevOps consulting services are designed for companies looking to accelerate 
                their time to market and continuously deliver their software products & services.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Enquire Now
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/3.webp"
                alt="DevOps Automation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-[500px]">
              <Image
                src="/images/2.webp"
                alt="About DevOps Automation"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our DevOps Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We help organizations implement DevOps practices to improve collaboration, 
                increase efficiency, and deliver software faster with higher quality.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"
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
                      <div>
                        <h4 className="font-semibold text-gray-800">{service.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits Of DevOps Solutions & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-500"
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
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 