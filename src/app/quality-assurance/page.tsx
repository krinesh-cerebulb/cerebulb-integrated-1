'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function QualityAssurance() {
  const testingServices = [
    {
      title: 'API Interface Testing Services',
      description: 'Comprehensive testing of API endpoints, interfaces, and integrations.'
    },
    {
      title: 'Localization Testing Services',
      description: 'Ensure your software works correctly across different languages and regions.'
    },
    {
      title: 'Usability Testing Services',
      description: 'Evaluate user experience and interface functionality.'
    },
    {
      title: 'Mobile App Testing Services',
      description: 'End-to-end testing for mobile applications across platforms.'
    },
    {
      title: 'Automation Testing Services',
      description: 'Automated test suites for efficient and reliable testing.'
    },
    {
      title: 'Security Testing Services',
      description: 'Identify and eliminate security vulnerabilities in your applications.'
    },
    {
      title: 'Performance Testing Services',
      description: 'Evaluate system performance, speed, and scalability.'
    },
    {
      title: 'Regression Testing Services',
      description: 'Ensure new changes do not affect existing functionality.'
    },
    {
      title: 'Functional Testing Services',
      description: 'Verify all features work according to specifications.'
    },
    {
      title: 'E-commerce Testing Services',
      description: 'Comprehensive testing for online retail platforms.'
    }
  ];

  const benefits = [
    {
      title: 'Experienced QA Team',
      description: 'Our skilled team brings years of expertise in various testing methodologies.'
    },
    {
      title: 'Comprehensive Test Coverage',
      description: 'End-to-end testing across all aspects of your software.'
    },
    {
      title: 'Advanced Testing Tools',
      description: 'Using the latest testing tools and frameworks for efficient quality assurance.'
    },
    {
      title: 'Customized Testing Strategy',
      description: 'Tailored testing approaches based on your specific requirements.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <Heading className="text-4xl md:text-5xl font-bold text-white mb-4">
                Quality Assurance Services
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                Quality assurance is an essential component of the software development process. 
                Our QA Engineers provide comprehensive testing services to ensure excellent quality, 
                dependability, and security of your products.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
              <Image
                src="/5.webp"
                alt="Quality Assurance Services"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testing Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide a comprehensive range of testing services to ensure your software 
              meets the highest quality standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4 text-blue-500">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Choose Our QA Services
                </h2>
                <p className="text-lg text-gray-600">
                  For over a decade, our end-to-end testing services have assisted organizations 
                  in innovating and growing. Our skilled team of testers provides comprehensive 
                  quality assurance solutions that enable you to deliver high-quality software.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-blue-500">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
              <Image
                src="/images/services/quality-assurance.svg"
                alt="Why Choose Our QA Services"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
