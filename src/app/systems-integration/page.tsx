'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function SystemsIntegration() {
  const services = [
    {
      title: 'System Integration Consulting',
      description: 'Expert guidance on integrating various systems and technologies.'
    },
    {
      title: 'Service-Oriented Architecture',
      description: 'Design and implement flexible, scalable service architectures.'
    },
    {
      title: 'Data Migration',
      description: 'Seamless transfer of data between different systems and platforms.'
    },
    {
      title: 'API Connection',
      description: 'Build and maintain robust API connections between systems.'
    }
  ];

  const benefits = [
    {
      title: 'Seamless Integration',
      description: 'Connect disparate systems to work together efficiently.'
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamline operations through automated system interactions.'
    },
    {
      title: 'Enhanced Data Flow',
      description: 'Enable smooth data transfer between different platforms.'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored integration solutions for your specific needs.'
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
                Systems Integration Services
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                We provide technology consulting, custom development, and ready-made APIs 
                for software solution integration. Make your disparate systems work in unison.
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
                src="/images/6.png"
                alt="Systems Integration"
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            About Systems Integration
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our comprehensive systems integration services help businesses connect and 
            optimize their technology infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Our Integration Services
              </h2>
              <p className="text-gray-600">
                Our systems integration expertise helps organizations streamline their 
                operations and improve efficiency through seamless connectivity.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md"
                  >
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/2.webp"
                alt="Integration Benefits"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
