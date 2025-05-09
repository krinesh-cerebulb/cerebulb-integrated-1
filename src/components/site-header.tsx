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
      <div className="bg-muted border-b border-border py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center">
            <div className="flex gap-4 text-sm">
              <button
                onClick={toggleLogin}
                className="hover:text-primary transition-colors flex items-center"
              >
                Sign in
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={toggleLogin}
                className="hover:text-primary transition-colors flex items-center"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[rgba(49,228,217,0.85)] backdrop-blur-md shadow-sm">
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
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-border p-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/about-us"
              className="text-foreground hover:text-primary transition-colors"
            >
              About us
            </Link>
            <Link
              href="/careers"
              className="text-foreground hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/join-our-team"
              className="text-foreground hover:text-primary transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Search</h2>
            <button
              onClick={toggleSearch}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input
              type="search"
              className="w-full border-b-2 border-input py-2 pr-10 focus:outline-none focus:border-primary"
              placeholder="Search for:"
              autoFocus
            />
            <button className="absolute right-0 top-3 text-muted-foreground">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Login Popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80">
          <div className="bg-background p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              onClick={toggleLogin}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-foreground text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border border-input rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-foreground text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-input rounded w-full py-2 px-3 text-foreground mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
