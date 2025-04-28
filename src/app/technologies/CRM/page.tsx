'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function CrmDevelopment() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                CRM Development
              </h1>
              <p className="text-lg mb-8">
                We have extensive experience implementing CRM solutions (Salesforce, Dynamics 365, Zoho, and more) to streamline your sales, marketing, and support processes, and drive business growth.
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
                  alt="CRM Development"
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
                alt="CRM Benefits"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Key Benefits Of Our CRM Services
              </Heading>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Improved Customer Data Management</li>
                <li>Automated Sales and Marketing Workflows</li>
                <li>Enhanced Customer Support & Retention</li>
                <li>Seamless Integration with Other Business Tools</li>
                <li>Actionable Analytics and Reporting</li>
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
                CRM Services - Ensuring Seamless Customer Management
              </Heading>
              <p className="text-gray-600 mb-6">
                We specialize in providing comprehensive and reliable CRM solutions to ensure seamless management of your customer relationships. Our team employs industry best practices and cutting-edge tools to deliver robust, scalable, and user-friendly CRM platforms.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>CRM Implementation & Customization</li>
                <li>Data Migration & Integration</li>
                <li>Workflow Automation</li>
                <li>Reporting & Analytics</li>
                <li>Ongoing Support & Optimization</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/6.png"
                alt="CRM Services"
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
