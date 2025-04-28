'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function PermanentStaffing() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16">
          <div className="flex-1">
            <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Permanent Staffing Solutions
            </Heading>
            <Content className="prose max-w-none">
              <span className="text-lg text-gray-600 mb-6 block">
                Build your dream team with our permanent staffing solutions. We help you find and hire 
                top talent who will become integral members of your organization, contributing to your 
                long-term success.
              </span>
            </Content>
          </div>
          <div className="flex-1">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/8.png"
                alt="Permanent Staffing"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Expert Recruitment Process
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Thorough candidate screening</li>
              <li>• Skills assessment</li>
              <li>• Cultural fit evaluation</li>
              <li>• Background verification</li>
              <li>• Reference checks</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Industry Expertise
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• IT & Technology</li>
              <li>• Software Development</li>
              <li>• Data Science & Analytics</li>
              <li>• Cloud Computing</li>
              <li>• Cybersecurity</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Client Benefits
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Reduced time-to-hire</li>
              <li>• Quality candidates</li>
              <li>• Cost-effective solutions</li>
              <li>• Long-term retention</li>
              <li>• Dedicated support</li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Our Permanent Staffing Process
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Requirements Analysis',
                description: 'We work closely with you to understand your staffing needs, company culture, and specific requirements.'
              },
              {
                step: '2',
                title: 'Candidate Sourcing',
                description: 'Our recruiters use advanced tools and networks to identify and attract top talent.'
              },
              {
                step: '3',
                title: 'Screening & Selection',
                description: 'Rigorous screening process including technical assessments and cultural fit evaluation.'
              },
              {
                step: '4',
                title: 'Placement & Support',
                description: 'Complete support through interview process, offer negotiation, and onboarding.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Ready to Build Your Dream Team?
          </Heading>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect candidates for your organization. Our permanent 
            staffing solutions are designed to meet your specific needs and requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </main>
  );
}
