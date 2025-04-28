'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function DevOpsDevelopment() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                DevOps
              </h1>
              <p className="text-lg mb-8">
                Your software development lifecycle will be streamlined and have a dynamic interface. Dive in today to experience it.
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
                  src="/images/3.webp"
                  alt="DevOps Hero"
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
                alt="DevOps Benefits"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Development - Deployment And Operations
              </Heading>
              <p className="mb-4 text-gray-700">
                Sit back and relax while we take care of all your software needs. You can have a look at our process and make a decision to empower your organization.
              </p>
              <p className="mb-2 text-gray-700">These are the following Deployment and Operations:</p>
              <ul className="list-disc ml-6 text-blue-900 space-y-2 font-semibold">
                <li>Planning</li>
                <li>Version Control</li>
                <li>Continuous Integration (CI)</li>
                <li>Continuous Delivery (CD)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Heading className="text-2xl font-bold text-slate-800 mb-8 text-center">
            DevOps Strategies
          </Heading>
          <p className="text-center text-gray-600 mb-12">
            In this fast phased and technology driven world, be the one to beat the race with our expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">📞</span>
              <span className="font-semibold text-center">Improved Collaboration And Communication</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">⚖️</span>
              <span className="font-semibold text-center">Enhanced Stability And Reliability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">📈</span>
              <span className="font-semibold text-center">Increased Scalability And Flexibility</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">💲</span>
              <span className="font-semibold text-center">Cost Optimization</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🔄</span>
              <span className="font-semibold text-center">Streamlining The Process</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-2">🚚</span>
              <span className="font-semibold text-center">Effective Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Improve and Innovate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/14.png"
                alt="Improve and Innovate"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-2xl font-bold text-slate-800 mb-4">
                Improve And Innovate
              </Heading>
              <ul className="list-none space-y-6">
                <li>
                  <span className="font-semibold text-blue-900">Faster And Stable Updates</span>
                  <p className="text-gray-700">Get all the updates to your software needs and focus on your business expansion. Updates once live are tested and stable.</p>
                </li>
                <li>
                  <span className="font-semibold text-blue-900">Robust Monitoring</span>
                  <p className="text-gray-700">Monitoring continuously for identifying any gaps in the developmental sections and eliminating them through various strategies and methodologies.</p>
                </li>
                <li>
                  <span className="font-semibold text-blue-900">Embracing Improvement</span>
                  <p className="text-gray-700">We encourage our engineers to embrace improvements. Our team is ready to seek out new techniques, best practices and new tools in order to achieve the goal.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
