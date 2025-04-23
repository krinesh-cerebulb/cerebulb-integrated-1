"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Job data based on the screenshot
const jobListings = [
  {
    id: 1,
    title: "Senior Slack Infrastructure Engineer",
    jobType: "W2",
    location: "AZ, PHOENIX",
    slug: "senior-slack-infrastructure-engineer"
  },
  {
    id: 2,
    title: "IB Field Data Engineer",
    jobType: "C2C",
    location: "Milwaukee, WI",
    slug: "ib-field-data-engineer"
  },
  {
    id: 3,
    title: "IB-Regulatory Engineer",
    jobType: "C2C",
    location: "Milwaukee, WI",
    slug: "ib-regulatory-engineer"
  },
  {
    id: 4,
    title: "IT Analyst",
    jobType: "Full Time",
    location: "AZ, PHOENIX",
    slug: "it-analyst"
  },
  {
    id: 5,
    title: "IT Engineer",
    jobType: "Full Time",
    location: "AZ, PHOENIX",
    slug: "it-engineer"
  },
  {
    id: 6,
    title: "AWS EKS & Datadog",
    jobType: "W2",
    location: "AZ, PHOENIX",
    slug: "aws-eks-datadog"
  },
  {
    id: 7,
    title: "SAP Developer",
    jobType: "W2",
    location: "CA, Milpitas",
    slug: "sap-developer"
  },
  {
    id: 8,
    title: "PowerBuilder Developer",
    jobType: "C2C",
    location: "Lansing, MI",
    slug: "powerbuilder-developer"
  },
  {
    id: 9,
    title: ".Net Cloud Architect",
    jobType: "C2C",
    location: "Lansing, MI",
    slug: "net-cloud-architect"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedJobs, setDisplayedJobs] = useState(jobListings.slice(0, 6));
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('All Job Type');
  const [jobLocation, setJobLocation] = useState('All Job Location');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const slides = [
    {
      heading: "You Are In Good Hands",
      subheading: "Find The Right Career You Deserve",
      image: "/images/Home_1.webp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    // Filter jobs based on search term, job type, and location
    let filteredJobs = jobListings;
    
    if (searchTerm) {
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (jobType !== 'All Job Type') {
      filteredJobs = filteredJobs.filter(job => job.jobType === jobType);
    }
    
    if (jobLocation !== 'All Job Location') {
      filteredJobs = filteredJobs.filter(job => job.location === jobLocation);
    }
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    setDisplayedJobs(filteredJobs.slice(0, endIndex));
  }, [searchTerm, jobType, jobLocation, currentPage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handleJobTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobType(e.target.value);
    setCurrentPage(1);
  };
  
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobLocation(e.target.value);
    setCurrentPage(1);
  };
  
  const loadMoreJobs = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0b1b48] text-white">
        <div className="relative h-[600px] md:h-[650px]">
          {/* Image Overlay */}
          <div className="absolute inset-0 z-0">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt="Hero background"
                  fill
                  priority
                  className="object-cover opacity-40"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          
          {/* Content */}
          <div className="max-w-7xl mx-auto relative z-10 h-full flex">
            <div className="flex flex-col justify-center h-full px-4 md:px-8 w-full">
              <div className="bg-[#3472fc]/20 py-2 px-4 rounded-md inline-block mb-4 max-w-fit">
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {slides[currentSlide].heading}
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {slides[currentSlide].subheading}
              </h2>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  href="/find-a-job" 
                  className="px-6 py-3 bg-white text-[#0b1b48] hover:bg-[#f8f9fa] rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Find Job
                </Link>
                <Link 
                  href="/hire-a-talent" 
                  className="px-6 py-3 bg-[#3472fc] hover:bg-[#2665fc] text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Find Talent
                </Link>
                <Link 
                  href="/about-us" 
                  className="px-6 py-3 border border-white hover:bg-white hover:text-[#0b1b48] rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  About
                </Link>
                <Link 
                  href="/join-our-team" 
                  className="px-6 py-3 bg-[#3472fc] hover:bg-[#2665fc] text-white rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
          
          {/* Slide Indicators */}
          {slides.length > 1 && (
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Announcement Banner */}
        <div className="bg-white py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Jobs</h2>
          <Link href="/find-a-job" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            View All
          </Link>
        </div>
        
        {/* Job Search & Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search" 
              className="border border-gray-300 rounded-md py-2 px-4 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          <div className="flex gap-4">
            <select 
              className="border border-gray-300 rounded-md py-2 px-4"
              value={jobType}
              onChange={handleJobTypeChange}
            >
              <option>All Job Type</option>
              <option>W2</option>
              <option>C2C</option>
              <option>Full Time</option>
            </select>
            <select 
              className="border border-gray-300 rounded-md py-2 px-4"
              value={jobLocation}
              onChange={handleLocationChange}
            >
              <option>All Job Location</option>
              <option>AZ, PHOENIX</option>
              <option>Milwaukee, WI</option>
              <option>CA, Milpitas</option>
              <option>Lansing, MI</option>
            </select>
          </div>
        </div>
        
        {/* Job listings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedJobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">{job.title}</h3>
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                    <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                  </svg>
                  <span>{job.jobType}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  <span>{job.location}</span>
                </div>
              </div>
              <Link 
                href={`/jobs/${job.slug}`} 
                className="px-6 py-2 bg-blue-600 text-white rounded-md inline-block text-center hover:bg-blue-700 transition-colors"
              >
                More Details →
              </Link>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {displayedJobs.length < jobListings.length && (
          <div className="mt-8 text-center">
            <button 
              onClick={loadMoreJobs}
              className="px-6 py-2 bg-blue-600 text-white rounded-md inline-block hover:bg-blue-700 transition-colors"
            >
              Load More Jobs
            </button>
          </div>
        )}
        
        {/* Job Count */}
        <div className="mt-6 text-center text-gray-600">
          Showing {displayedJobs.length} of {jobListings.length} job opportunities
        </div>
      </section>
    </main>
  );
}
