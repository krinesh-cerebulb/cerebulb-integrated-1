'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

export default function JavaDevelopment() {
  const services = [
    {
      title: 'Application Development',
      description: 'Custom Java applications tailored to your business needs'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise-grade Java applications and systems'
    },
    {
      title: 'API Development',
      description: 'RESTful and SOAP API development and integration'
    },
    {
      title: 'Legacy System Migration',
      description: 'Modernize legacy Java applications with current technologies'
    }
  ];

  const technologies = [
    {
      name: 'Spring Boot',
      description: 'Modern Java-based framework for building microservices'
    },
    {
      name: 'Hibernate',
      description: 'ORM framework for database operations'
    },
    {
      name: 'Java EE',
      description: 'Enterprise edition for large-scale applications'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1B3D]">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] opacity-95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                JAVA Development
              </h1>
              <div className="text-lg mb-8">
                Our team of expert Java developers is passionate about delivering 
                pioneering solutions tailored to meet your unique requirements.
              </div>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-br from-[#0A1B3D] via-[#f8fffe]  text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              >
                Enquire Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px]">
                <Image
                  src="/images/11.webp"
                  alt="Java Development"
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
                    alt="Services We Offer"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <Heading className="text-3xl font-bold text-slate-800 mb-6">
                  Services We Offer
                </Heading>
                <Content className="prose max-w-none">
                  <div className="text-gray-600 mb-8">
                    Partner with Humec Inc. for your development needs and experience the power 
                    and flexibility in driving your business forward. Contact us today to discuss your 
                    project requirements and explore how we can help you achieve your software 
                    development goals.
                  </div>
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
                          <div className="text-gray-600 mb-8">
                            {service.description}
                          </div>
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
                  <div className="text-gray-600 block">{tech.description}</div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <Heading className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Ready to Start Your Java Project?
              </Heading>
              <div className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto block">
                Let our expert team help you build robust, scalable Java applications 
                that drive your business forward.
              </div>
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
