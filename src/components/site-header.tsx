"use client";

import Link from "next/link";
import Image from "next/image";
import { MainNav } from "./main-nav";
import { useState } from "react";

export function SiteHeader() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* Login Section */}
      <div className="bg-gray-100 border-b border-gray-200 py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center">
            <div className="flex gap-4 text-sm">
              <button 
                onClick={toggleLogin} 
                className="hover:text-blue-600 transition-colors flex items-center"
              >
                Sign in
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={toggleLogin} 
                className="hover:text-blue-600 transition-colors flex items-center"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src="/integrated-logo-bg-light.png"
                  alt="Cerebulb integrated logo"
                  width={120}
                  height={40}
                  priority
                  className="h-auto"
                />
              </Link>
            </div>
            
            <MainNav />

            <div className="flex items-center">
              <button 
                onClick={toggleSearch} 
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Search"
              >
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 p-4">
          <div className="flex flex-col space-y-3">
            <Link href="/about-us" className="text-gray-700 hover:text-blue-600 transition-colors">About us</Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">
                <span>IT Services</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link href="/custom-software-development" className="text-gray-600 hover:text-blue-600 transition-colors">Custom Software Development</Link>
                <Link href="/software-prototyping" className="text-gray-600 hover:text-blue-600 transition-colors">Software Prototyping</Link>
                <Link href="/devops-automation" className="text-gray-600 hover:text-blue-600 transition-colors">DevOps Automation</Link>
                <Link href="/mobile-app-development" className="text-gray-600 hover:text-blue-600 transition-colors">Mobile Application Development</Link>
                <Link href="/cloud-computing" className="text-gray-600 hover:text-blue-600 transition-colors">Cloud Computing</Link>
                <Link href="/quality-assurance" className="text-gray-600 hover:text-blue-600 transition-colors">Quality Assurance</Link>
                <Link href="/systems-integration" className="text-gray-600 hover:text-blue-600 transition-colors">Systems Integration</Link>
                <Link href="/web-application-development" className="text-gray-600 hover:text-blue-600 transition-colors">Web Application Development</Link>
              </div>
            </details>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors">Careers</Link>
            <Link href="/join-our-team" className="text-gray-700 hover:text-blue-600 transition-colors">Join Our Team</Link>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Search</h2>
            <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input 
              type="search" 
              className="w-full border-b-2 border-gray-300 py-2 pr-10 focus:outline-none focus:border-blue-500"
              placeholder="Search for:"
              autoFocus
            />
            <button className="absolute right-0 top-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" 
              onClick={toggleLogin}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button 
                  type="button" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
