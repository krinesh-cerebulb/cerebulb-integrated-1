'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function BigDataTechnologies() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                BigData Technologies Development
              </h1>
              <p className="text-lg mb-8">
                We delve into the various components and frameworks that make up the big data ecosystem, enabling businesses to process, analyze, and derive insights from massive volumes of data.
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
                  src="/images/16.png"
                  alt="BigData Technologies Hero"
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

      {/* Organize Data Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/2.webp"
                alt="Organize Data"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Organize Your Data Everywhere
              </Heading>
              <p className="mb-4 text-gray-700">
                Managing data with strategic approach and assisting organizations to expand globally in all ways possible.
              </p>
              <ul className="list-disc ml-6 text-blue-900 space-y-2 font-semibold">
                <li>NoSQL Databases</li>
                <li>Data Streaming Platforms</li>
                <li>Data Visualization and Analytics Tools</li>
                <li>Cloud Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Driven Generation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <Heading className="text-2xl font-bold text-slate-800 mb-4">
                Always be the Top in this Tech Driven Generation
              </Heading>
              <p className="text-gray-700 mb-4">
                Big data technologies continue to evolve rapidly, driven by the need to handle larger datasets, process data in real-time, and derive actionable insights. These technologies empower organizations to unlock the value of their data, optimize operations, and gain a competitive advantage in today&apos;s data-driven world.
              </p>
              <ul className="list-disc ml-6 text-blue-900 space-y-2 font-semibold">
                <li>Apache Spark</li>
                <li>NoSQL Database</li>
                <li>Hadoop</li>
                <li>Data visualization and Analytics</li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image
                src="/images/13.webp"
                alt="BigData Analytics"
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
