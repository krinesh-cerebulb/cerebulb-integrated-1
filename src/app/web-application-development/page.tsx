'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function WebApplicationDevelopment() {
  const services = [
    {
      title: 'Custom Web Applications Development',
      description: 'Using proven methodologies, we create custom web solutions based on your business requirements that best fits your expectations.'
    },
    {
      title: 'UX/UI Design',
      description: 'Our UI/UX design team enhances the usability of your product interfaces to help you establish a distinct online presence.'
    },
    {
      title: 'Opensource Framework Experts',
      description: 'End-to-end open-source development services with expertise in eCommerce platforms and CMS designed to give you a competitive advantage.'
    },
    {
      title: 'MEAN / MERN Stack Development',
      description: 'Expert development using MongoDB, Express.js, Angular/React, and Node.js stack for modern web applications.'
    }
  ];

  const features = [
    {
      title: 'Responsive Design',
      description: 'Applications that work seamlessly across all devices and screen sizes.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business needs and user base.'
    },
    {
      title: 'Security-First Approach',
      description: 'Implementing robust security measures to protect your application and data.'
    },
    {
      title: 'Performance Optimization',
      description: 'Fast-loading, efficient applications for the best user experience.'
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
                Custom Web Application Development Services
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                We provide web application development services by understanding the unique 
                goals and challenges of your business. Our rapid and customized web application 
                development services cater to all your business needs.
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
                src="/images/7.webp"
                alt="Web Application Development"
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
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Web Development Services
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/2.webp"
                alt="Web Development Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features of Our Web Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
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
