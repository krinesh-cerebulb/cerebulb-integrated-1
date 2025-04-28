'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function SoftwarePrototyping() {
  const services = [
    {
      title: 'Competitor Analysis',
      description: 'Comprehensive analysis of market solutions to identify opportunities and best practices.'
    },
    {
      title: 'Interactive Mockups',
      description: 'Create interactive and clickable prototypes to visualize the user experience.'
    },
    {
      title: 'PoC Development',
      description: 'Build proof of concept applications to validate technical feasibility and core features.'
    },
    {
      title: 'Usability Testing',
      description: 'Conduct user testing sessions to gather feedback and improve the prototype.'
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
                Software Prototyping
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                With rapid software prototyping services, We can turn your idea into an
                accurate and representative prototype of your application. This technique
                invites valuable feedback and gives you the opportunity to demonstrate your
                prowess early in the cycle.
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
                src="/images/2.webp"
                alt="Software Prototyping"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/Software_Prototyping.png"
                alt="About Software Prototyping"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Software Prototyping Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We innovate precisely. Our approach focuses on fully understanding user needs
                and then accurately predicting the end product. By bringing ideas to life, software
                prototyping enables risk analysis, reduces cycle times, and helps develop high-quality solutions.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Prototyping Services Include
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>
      </section>
    </main>
  );
} 