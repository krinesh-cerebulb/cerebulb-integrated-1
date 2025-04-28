"use client";

import Image from 'next/image';
import { useState } from 'react';
// import { Heading } from '@/components/ui/heading';

const jobData = [
  {
    title: 'Senior Slack Infrastructure Engineer',
    type: 'W2',
    location: 'AZ, PHOENIX',
    details: '#',
  },
  {
    title: 'IB Field Data Engineer',
    type: 'C2C',
    location: 'Milwaukee, WI',
    details: '#',
  },
  {
    title: 'IB-Regulatory Engineer',
    type: 'C2C',
    location: 'Milwaukee, WI',
    details: '#',
  },
  {
    title: 'IT Analyst',
    type: 'W2',
    location: 'Remote',
    details: '#',
  },
  {
    title: 'IT Engineer',
    type: 'W2',
    location: 'Remote',
    details: '#',
  },
  {
    title: 'AWS EKS & Datadog',
    type: 'C2C',
    location: 'Remote',
    details: '#',
  },
];

export default function Careers() {
  const [search, setSearch] = useState('');
  const filteredJobs = jobData.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0A1B3D] to-[#19376D] text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
            <p className="mb-6 text-lg">Find The Right Career You Deserve</p>
            <a href="#benefits" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow transition-colors">View Benefits</a>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image src="/images/18.png" alt="Careers" width={420} height={260} className="object-contain" />
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="container mx-auto px-4 mt-[-4rem] relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"
          />
          <select className="border border-gray-300 rounded px-4 py-2 w-full md:w-[20%] lg:w-[15%] xl:w-[12%]">
            <option>All Job Type</option>
            <option>W2</option>
            <option>C2C</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2 w-full md:w-[20%] lg:w-[15%] xl:w-[12%]">
            <option>All Job Location</option>
            <option>AZ, PHOENIX</option>
            <option>Milwaukee, WI</option>
            <option>Remote</option>
          </select>
        </div>
      </section>

      {/* Job Listings Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between min-h-[160px] xl:min-h-[140px]">
              <div>
                <h3 className="text-base md:text-lg font-bold mb-2">{job.title}</h3>
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-2 gap-4">
                  <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>{job.type}</span>
                  <span className="inline-flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414A8 8 0 1112.414 13.414l4.243 4.243z" /></svg>{job.location}</span>
                </div>
              </div>
              <a href={job.details} className="mt-4 inline-block bg-[#2563eb] hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold transition-colors w-full text-center text-xs md:text-sm">More Details →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section Anchor */}
      <span id="benefits"></span>
    </main>
  );
}