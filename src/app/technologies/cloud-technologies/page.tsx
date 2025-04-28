'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function CloudTechnologies() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud Technologies
              </h1>
              <p className="text-lg mb-8">
                Serving numerous industries across various organizations with an innovative approach.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Enquire Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[350px]">
                <Image
                  src="/images/cloud.png"
                  alt="Cloud Technologies Hero"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/2.webp"
                alt="Cloud Benefits"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Expanding Your Business to the Next Level
              </Heading>
              <p className="mb-4 text-gray-700">
                Upgrade your storage options and migrate to cloud right now and witness the success rate through our fastest and reliable cloud technology solutions.
              </p>
              <ul className="list-disc ml-6 text-blue-900 space-y-2 font-semibold">
                <li>Global Accessibility</li>
                <li>Rapid Deployment</li>
                <li>Security and Compliance</li>
                <li>Simplified Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <Heading className="text-2xl font-bold text-slate-800 mb-4">
                2x Your Business Profits by Migrating to Cloud Services
              </Heading>
              <p className="text-gray-700 mb-4">
                Technology today demands for data security and storage. With our cloud solutions you will be mesmerized.
              </p>
              <ul className="list-disc ml-6 text-blue-900 space-y-2 font-semibold">
                <li>Unparalleled Expertise</li>
                <li>Comprehensive Service Offering</li>
                <li>Scalability and Flexibility</li>
                <li>Robust Security Measures</li>
                <li>Reliability and High Availability</li>
                <li>Seamless Migration and Integration</li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image
                src="/images/13.webp"
                alt="Cloud Migration"
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
