import Link from 'next/link';
import Image from 'next/image';
import { Heading } from '@/components/ui/heading';

export default function ItStaffing() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Heading className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              IT Staffing Service
            </Heading>
            <p className="text-lg text-gray-600">
              We offer a wide range of customized high-quality research-based talent consulting services.
            </p>
          </div>
          <div>
            <Link
              href="/it-staffing"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              View More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Permanent Staffing */}
          <div className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-50 p-6 flex items-center justify-center h-72">
              <Image
                src="/images/permanent-staffing.png"
                alt="Permanent Staffing"
                width={280}
                height={280}
                className="object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = '/images/default-staffing.png';
                }}
              />
            </div>
            <div className="p-6 text-center">
              <Link href="/it-staffing/permanent-staffing" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                Permanent Staffing
              </Link>
            </div>
          </div>

          {/* Temporary Staffing */}
          <div className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-50 p-6 flex items-center justify-center h-72">
              <Image
                src="/images/temporary-staffing.png"
                alt="Temporary Staffing"
                width={280}
                height={280}
                className="object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = '/images/default-staffing.png';
                }}
              />
            </div>
            <div className="p-6 text-center">
              <Link href="/it-staffing/temporary-staffing" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                Temporary Staffing
              </Link>
            </div>
          </div>

          {/* Recruitment Process Outsourcing */}
          <div className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-50 p-6 flex items-center justify-center h-72">
              <Image
                src="/images/rpo.png"
                alt="Recruitment Process Outsourcing"
                width={280}
                height={280}
                className="object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = '/images/default-staffing.png';
                }}
              />
            </div>
            <div className="p-6 text-center">
              <Link href="/it-staffing/recruitment-process-outsourcing" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                Recruitment Process Out Sourcing (RPO)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
