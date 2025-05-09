'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function ApiTestingDevelopment() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                API Testing Development
              </h1>
              <p className="text-lg mb-8">
                We have extensive experience working with different types of APIs, such as RESTful APIs, SOAP APIs, GraphQL APIs, and more, across various domains and technologies.
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-br from-[#0A1B3D] via-[#f8fffe]  text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              >
                Enquire Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[350px]">
                <Image
                  src="/images/12.webp"
                  alt="API Testing Development"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] opacity-95"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/2.webp"
                alt="API Testing Benefits"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Key Benefits Of Our API Testing Services
              </Heading>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Improved Integration</li>
                <li>Enhanced Reliability</li>
                <li>Accurate Data Exchange</li>
                <li>Automated & Manual Testing Support</li>
                <li>Comprehensive Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Heading className="text-2xl font-bold text-slate-800 mb-4">
                API Testing Services - Ensuring Seamless Integration And Functionality
              </Heading>
              <p className="text-gray-600 mb-6">
                We specialize in providing comprehensive and reliable API testing solutions to ensure the seamless integration and functionality of your APIs. Our expert testing team employs industry best practices and cutting-edge tools to identify and resolve potential issues, ensuring the reliability and performance of your APIs.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>RESTful & SOAP API Testing</li>
                <li>GraphQL API Testing</li>
                <li>Performance & Load Testing</li>
                <li>Security Testing</li>
                <li>API Documentation Validation</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/13.webp"
                alt="API Testing Services"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}