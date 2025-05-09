'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function ProjectManagementDevelopment() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative max-w-9xl mx-auto px-4 pt-16 pb-8 flex flex-col md:flex-row md:items-center gap-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 pointer-events-none select-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] opacity-95 pointer-events-none select-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Management Development
            </h1>
            <p className="text-lg mb-8">
              We work closely with our clients to understand their goals and
              objectives. Our team assists in developing a robust project
              plan, defining project scope, setting realistic timelines, and
              establishing key milestones.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            >
              Enquire Now
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-[350px]">
              <Image
                src="/images/15.png"
                alt="Project Management Hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organization and Team Management Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/2.webp"
                alt="Project Organization"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Project Organization And Team Management
              </Heading>
              <p className="mb-4 text-gray-700">
                At cerebulb, we will help you build efficient project teams by
                identifying the right talent and assigning roles and
                responsibilities. Our project managers excel in team
                coordination, fostering collaboration, and maintaining effective
                communication channels.
              </p>
              <ul className="list-disc ml-6 text-blue-900 space-y-2 font-semibold">
                <li>Application Development</li>
                <li>Web Application Development</li>
                <li>Cloud Solutions</li>
                <li>Customized Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <Heading className="text-2xl font-bold text-slate-800 mb-4">
                Why Choose Us?
              </Heading>
              <div className="mb-6">
                <p className="font-semibold text-blue-900 mb-1">
                  Expertise And Experience:
                </p>
                <p className="text-gray-700 mb-4">
                  Our team consists of experienced project management
                  professionals with diverse industry expertise. We bring a
                  wealth of knowledge and best practices to every project we
                  undertake.
                </p>
                <p className="font-semibold text-blue-900 mb-1">
                  Tailored Solutions:
                </p>
                <p className="text-gray-700">
                  We understand that each project is unique. We tailor our
                  project management services to suit your specific
                  requirements, ensuring that our approach is aligned with your
                  organization&apos;s objectives and culture.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image
                src="/images/13.webp"
                alt="Why Choose Us"
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
