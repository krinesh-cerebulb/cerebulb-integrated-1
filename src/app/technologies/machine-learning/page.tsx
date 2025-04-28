"use client";

import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function MachineLearning() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0A1B3D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Machine Learning In Real-World Applications
              </h1>
              <p className="text-base md:text-lg mb-8">
                In this section, we showcase real-world applications of machine learning across different industries. Explore how machine learning is used in areas such as healthcare, finance, marketing, cybersecurity, recommendation systems, and autonomous vehicles.
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
                  src="/images/17.png"
                  alt="Machine Learning Applications"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics and Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/15.png"
                alt="Ethics and Challenges"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <div className="md:w-1/2">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Ethics And Challenges In Machine Learning
              </Heading>
              <p className="text-gray-600 mb-6">
                Machine learning raises important ethical considerations. In this section, we discuss topics like bias in algorithms, privacy concerns, and the responsible use of technology. Explore the challenges and ethical implications of ML applications, and understand the importance of transparency, fairness, and accountability in ML development and deployment.
              </p>
              <ul className="space-y-2">
                <li className="font-semibold text-blue-700">Bias and Fairness in ML</li>
                <li className="font-semibold text-blue-700">Privacy and Data Security</li>
                <li className="font-semibold text-blue-700">Accountability and Transparency</li>
                <li className="font-semibold text-blue-700">Ethical Decision-Making in ML Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NLP Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <Heading className="text-3xl font-bold text-slate-800 mb-6">
                Natural Language Processing (NLP)
              </Heading>
              <p className="text-gray-600 mb-6">
                Natural Language Processing (NLP) is a branch of ML that focuses on understanding and processing human language. In this section, we explore NLP techniques, including text pre-processing, sentiment analysis, named entity recognition, and language translation.
              </p>
            </div>
            <ul className="space-y-2">
                <li className="font-semibold text-blue-700">Language Understanding</li>
                <li className="font-semibold text-blue-700">Sentiment Analysis</li>
                <li className="font-semibold text-blue-700">Language Translation</li>
                <li className="font-semibold text-blue-700">Information Extraction</li>
              </ul>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image
                src="/images/13.webp"
                alt="Natural Language Processing"
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
