"use client";

import Image from "next/image";

export default function Benefits() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-screen-2xl mx-auto px-4 pt-16 pb-8 flex flex-col md:flex-row md:items-center gap-10 overflow-hidden min-h-[340px] xl:min-h-[460px] 2xl:min-h-[560px]">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 pointer-events-none select-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B3D] via-[#30D5C8] to-[#1B3B7B] opacity-95 pointer-events-none select-none"></div>
        <div className="relative flex-1 z-10 min-w-[290px] md:min-w-[360px] xl:w-[520px] 2xl:w-[640px] max-w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Employee Benefits
          </h1>
          <p className="text-white/80 mb-6 max-w-xl">
            We offer unmatchable wide range of benefits for the employees
            working with us.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-white text-[#0A1B3D] px-6 py-3 rounded font-semibold shadow hover:bg-gray-100 transition">
              Download Brochure
            </button>
              <button className="bg-gradient-to-br from-[#0A1B3D] via-[#f8fffe]  text-black px-6 py-3 rounded font-semibold shadow hover:bg-[#0A1B3D] transition">
              View Benefits
            </button>
          </div>
        </div>
        {/* Right: List */}
        <div className="relative flex-1 flex flex-col gap-4 text-white text-base z-10 xl:text-xl 2xl:text-2xl xl:gap-7 2xl:gap-10 min-w-[200px] xl:min-w-[340px] 2xl:min-w-[440px] max-w-full">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✔️</span> Visa sponsorship Immigration
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✔️</span> Medical Vision & Dental
            Insurance
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✔️</span> Life & AD&D Insurance
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">✔️</span> Path to Citizenship
          </div>
        </div>
      </section>
      {/* Illustration and Description */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/2.webp"
              alt="Employee Benefits"
              width={400}
              height={320}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B2559] mb-4">
              We Value Our Employees
            </h2>
            <p className="text-[#1B2559] mb-6">
              At cerebulb we recognize our ultimate success depends on our
              talented and dedicated workforce. We understand the contribution
              each employee makes to our accomplishments and so our goal is to
              provide a comprehensive program of competitive benefits to attract
              and retain the best employees available. With the benefits
              programs we strive to support the needs of our employees and their
              dependents by providing a benefit package that is easy to
              understand, easy to access and affordable for all our employees.
            </p>
            <button className="bg-gradient-to-br from-[#30D5C8] via-[#f8fffe]  text-black px-6 py-3 rounded font-semibold shadow hover:bg-[#30D5C8] transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      {/* Key Benefits Grid */}
      <section className="bg-[#f7f8fa] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-[#1B2559] mb-10">
            Key Benefits For Employees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <Image
                src="/images/20.png"
                alt="Visa sponsorship Immigration"
                width={60}
                height={60}
              />
              <div className="mt-4 text-center font-semibold text-[#1B2559]">
                Visa sponsorship Immigration
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <Image
                src="/images/21.png"
                alt="Medical Vision & Dental Insurance"
                width={60}
                height={60}
              />
              <div className="mt-4 text-center font-semibold text-[#1B2559]">
                Medical Vision & Dental Insurance
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <Image
                src="/images/22.png"
                alt="Life & AD&D Insurance"
                width={60}
                height={60}
              />
              <div className="mt-4 text-center font-semibold text-[#1B2559]">
                Life & AD&D Insurance
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <Image
                src="/images/23.png"
                alt="Path to Citizenship"
                width={60}
                height={60}
              />
              <div className="mt-4 text-center font-semibold text-[#1B2559]">
                Path To Citizenship
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
