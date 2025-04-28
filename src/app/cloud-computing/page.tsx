'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function CloudComputing() {
  const services = [
    {
      title: 'Infrastructure-as-a-Service (IaaS)',
      description: 'Scalable cloud infrastructure resources including virtual machines, storage, and networking.'
    },
    {
      title: 'Platform-as-a-Service (PaaS)',
      description: 'Complete development and deployment environment in the cloud.'
    },
    {
      title: 'Software-as-a-Service (SaaS)',
      description: 'Cloud-based applications and software solutions delivered over the internet.'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamless transition of your applications and data to the cloud environment.'
    },
    {
      title: 'Cloud Security Solutions',
      description: 'Comprehensive security measures to protect your cloud infrastructure and data.'
    },
    {
      title: 'Cloud Optimization',
      description: 'Performance optimization and cost management for your cloud resources.'
    }
  ];

  const cloudTypes = [
    {
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      title: 'Public Cloud',
      description: 'Leverage shared cloud infrastructure for cost-effective and scalable solutions.'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Private Cloud',
      description: 'Dedicated cloud environment for enhanced security and control.'
    },
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      title: 'Hybrid Cloud',
      description: 'Best of both worlds with integrated public and private cloud solutions.'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Multi-Cloud',
      description: 'Utilize multiple cloud providers for optimal performance and redundancy.'
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
                Cloud Computing Services
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                Transform your business with our comprehensive cloud computing solutions. 
                We help organizations leverage the power of cloud technology for improved 
                scalability, efficiency, and innovation.
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
                src="/images/cloud.png"
                alt="Cloud Computing Services"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Computing Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cloud solutions to help businesses modernize their 
              infrastructure and achieve digital transformation goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Cloud Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right cloud deployment model for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudTypes.map((type, index) => (
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
                      d={type.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
