"use client";

import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import ServiceIcon, { ServiceIconName } from "@/components/ui/ServiceIcon";

const services = [
  {
    title: "Software Consulting Services",
    description:
      "Expert guidance on software strategy, architecture, and technology selection.",
    icon: "consulting",
  },
  {
    title: "Software Integration Services",
    description:
      "Seamless integration of different software systems and applications.",
    icon: "integration",
  },
  {
    title: "Custom CRM Development Services",
    description:
      "Tailored CRM solutions to manage your customer relationships effectively.",
    icon: "crm",
  },
  {
    title: "API Development Services",
    description:
      "Robust API development for seamless system connectivity and data exchange.",
    icon: "api",
  },
  {
    title: "Web Application Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    icon: "web",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "mobile",
  },
];

export default function CustomSoftwareDevelopment() {
  return (
    <main className="min-h-screen">
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
                Custom Software Development
              </Heading>
              <p className="text-lg text-gray-200 mb-8">
                With our expertise in modern technologies and agile
                methodologies, we help businesses build scalable and innovative
                software solutions tailored to their specific needs.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Get Started
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
                src="/images/custom.png"
                alt="Custom Software Development"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Custom Software Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of custom software development
              services to help businesses achieve their digital transformation
              goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                iconName={service.icon as ServiceIconName}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  description,
  iconName,
}: {
  title: string;
  description: string;
  iconName?: ServiceIconName;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 text-blue-500">
        {iconName && <ServiceIcon name={iconName} />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
