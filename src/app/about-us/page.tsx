import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
// import { Content } from '@/components/ui/content';
import LogoImage from '@/components/LogoImage';

export default function AboutUs() {
  return (
    <main className="container mx-auto py-14 px-4 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-[300px] mb-12 rounded-lg overflow-hidden animate-fade-in">
          <Image
            src="/images/aboutus.png"
            alt="About Us Hero"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Heading className="text-4xl md:text-5xl font-bold text-white animate-slide-up animation-delay-200">
              About Us
            </Heading>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-slide-up animation-delay-300">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800 animate-fade-in animation-delay-400">Who We Are</h2>
            <p className="text-gray-600 mb-4 animate-fade-in animation-delay-500">
              CereBulb transforms organization by playing a role of catalyst in their digital transformation. 
              We use our experience and extensive knowledge of Enterprise Solutions and Industrial Internet 
              of Things to accelerate journey to success. We help constructively from strategy building, 
              resources allocation to implement disruptive solution.
            </p>
            <p className="text-gray-600 animate-fade-in animation-delay-500">
              We serve various industries such as Retails, IT & Telecom, Automotive, Manufacturing, 
              Energy, Metals and Mining, Construction.
            </p>
          </div>
          <div className="relative h-[300px] animate-slide-left animation-delay-400">
            <Image
              src="/images/Arvr.png"
              alt="AR VR Technologies"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mb-12 animate-slide-up animation-delay-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Our Technology Stack</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-4 gap-12">
              <div className="flex flex-col items-center animate-scale-up animation-delay-600">
                <LogoImage src="/images/react.png" alt="React" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">React</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-700">
                <LogoImage src="/images/Nextjs.png" alt="Next.js" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">Next.js</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-800">
                <LogoImage src="/images/js.png" alt="Node.js" width={64} height={64} />

               {/* <span className="mt-2 text-sm text-gray-600">Node.js</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-900">
                <LogoImage src="/images/ts.png" alt="TypeScript" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">TypeScript</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-600">
                <LogoImage src="/images/tailwind.png" alt="Tailwind CSS" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">Tailwind CSS</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-700">
                <LogoImage src="/images/Prishma.png" alt="Prisma" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">Prisma</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-800">
                <LogoImage src="/images/Postgre.png" alt="PostgreSQL" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">PostgreSQL</span> */}
              </div>
              <div className="flex flex-col items-center animate-scale-up animation-delay-900">
                <LogoImage src="/images/aws.png" alt="AWS" width={64} height={64} />
                {/* <span className="mt-2 text-sm text-gray-600">AWS</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 