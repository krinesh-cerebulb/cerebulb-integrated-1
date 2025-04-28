'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';

export default function MobileAppDevelopment() {
  // const services = [
  //   {
  //     title: 'Custom Mobile App Development',
  //     description: 'Build tailored mobile applications that perfectly match your business requirements.'
  //   },
  //   {
  //     title: 'App Technology Consulting',
  //     description: 'Expert guidance on choosing the right technology stack for your mobile application.'
  //   },
  //   {
  //     title: 'Wearable Apps Development',
  //     description: 'Create innovative applications for smartwatches and other wearable devices.'
  //   },
  //   {
  //     title: 'Native App Development',
  //     description: 'Develop high-performance native applications for iOS and Android platforms.'
  //   },
  //   {
  //     title: 'Hybrid App Development',
  //     description: 'Build cross-platform applications that work seamlessly across multiple devices.'
  //   }
  // ];

  const technologies = [
    {
      icon: 'M12 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7.5-12h-15A2.25 2.25 0 0 0 2.25 9v10.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V9a2.25 2.25 0 0 0-2.25-2.25m0 12.75h-15V9h15z',
      title: 'iOS/iPhone App Development',
      description: 'Native iOS applications with stunning UIs and smooth performance'
    },
    {
      icon: 'M17.6 11.8c-.7 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2c.7 0 1.2-.6 1.2-1.2s-.5-1.2-1.2-1.2m-11.2 0c-.7 0-1.2.6-1.2 1.2s.6 1.2 1.2 1.2c.7 0 1.2-.6 1.2-1.2s-.5-1.2-1.2-1.2m11.4-6.8l1.3-2.5c.1-.1.0-.3-.1-.4-.2-.1-.3 0-.4.1l-1.3 2.5c-1-.5-2.3-.7-3.7-.7s-2.7.3-3.7.7L8.6 2.2c-.1-.1-.3-.2-.4-.1-.1.1-.2.3-.1.4l1.3 2.5C7 6.4 5.6 8.5 5.6 11h12.8c0-2.5-1.4-4.6-3.8-6',
      title: 'Android App Development',
      description: 'Feature-rich Android applications with Material Design'
    },
    {
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
      title: 'Ionic App Development',
      description: 'Cross-platform Ionic apps with web technologies'
    },
    {
      icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
      title: 'React Native App Development',
      description: 'High-performance React Native apps for both platforms'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <Heading className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mobile App Development Services
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                Transform your ideas into powerful mobile applications. We create stunning, 
                high-performance apps for iOS and Android platforms.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
              <Image
                src="/images/4.png"
                alt="Mobile App Development"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Excel In
            </h2>
            <p className="text-lg text-gray-600">
              We deliver customized mobile applications using cutting-edge technologies 
              and frameworks to ensure the best performance and user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-4 text-blue-500">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={tech.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 