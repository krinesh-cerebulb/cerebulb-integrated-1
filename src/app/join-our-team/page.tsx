"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  description: string;
  resume: File | null;
}

export default function JoinOurTeam() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    description: '',
    resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send the data to your server
    // This is just a simulation of an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSuccessMessage('Your resume has been submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        description: '',
        resume: null
      });
      
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative bg-[#0b1b48] min-h-screen">
      {/* Background overlay for the image */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/join-team-bg.jpg" 
          alt="Join Our Team Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 text-white mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team Today</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">let us Help You To Grow Your Career !</h2>
            
            <p className="mb-6">
              We are looking for passionate, driven, and innovative individuals to join our
              team. Whether you're just starting your career or looking for a new challenge,
              we have opportunities that can help you take your skills to the next level.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Submit your Resume</h2>
              
              {successMessage ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  {successMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <input
                      id="resume"
                      type="file"
                      onChange={handleFileChange}
                      className="w-full"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 bg-blue-600 text-white font-medium rounded transition-colors ${
                      isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
