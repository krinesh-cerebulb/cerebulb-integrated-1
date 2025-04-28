'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function DotNetDevelopment() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored .NET solutions for your specific business needs'
    },
    {
      title: 'Enterprise Application Integration',
      description: 'Seamless integration of .NET applications with existing systems'
    },
    {
      title: 'Cloud Solutions',
      description: 'Azure-based cloud applications and migrations'
    },
    {
      title: 'Web API Development',
      description: 'RESTful APIs and microservices using .NET Core'
    }
  ];

  const technologies = [
    {
      name: '.NET Core',
      description: 'Cross-platform development framework'
    },
    {
      name: 'ASP.NET',
      description: 'Web application framework'
    },
    {
      name: 'Entity Framework',
      description: 'ORM for database operations'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1B3D]">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D] via-[#132B5C] to-[#1B3B7B] opacity-95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                .Net
              </h1>
              <p className="text-lg mb-8">
                Build robust, scalable, and secure applications. From custom software 
                development to enterprise application integration, we leverage our expertise to 
                create solutions that align with your unique business requirements.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Enquire Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px]">
                <Image
                  src="/images/11.webp"
                  alt=".NET Development"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div className="lg:w-1/2">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/2.webp"
                    alt="Create Engaging Applications"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <Heading className="text-3xl font-bold text-slate-800 mb-6">
                  Create Engaging And User-Friendly Web Applications.
                </Heading>
                <Content className="prose max-w-none">
                  <p className="text-gray-600 mb-8">
                    Whether you need a responsive website, an e-commerce platform, or a content 
                    management system, we deliver solutions that drive online success and enhance 
                    user experiences.
                  </p>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{service.title}</h3>
                          <span className="text-gray-600 mb-8 block">
                            {service.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Content>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Ready to Build Your .NET Application?
              </Heading>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our expert team help you create robust, scalable .NET applications 
                that drive your business forward.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
