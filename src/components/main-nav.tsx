"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const navConfig = [
  {
    href: "/about-us",
    label: "About us",
  },
  {
    href: "/it-services",
    label: "IT Services",
    dropdown: [
      { href: "/custom-software-development", label: "Custom Software Development" },
      { href: "/software-prototyping", label: "Software Prototyping" },
      { href: "/devops-automation", label: "DevOps Automation" },
      { href: "/mobile-application-development", label: "Mobile Application Development" },
      { href: "/cloud-computing", label: "Cloud Computing" },
      { href: "/quality-assurance", label: "Quality Assurance" },
      { href: "/systems-integration", label: "Systems Integration" },
      { href: "/web-application-development", label: "Web Application Development" }
    ]
  },
  {
    href: "/it-staffing",
    label: "IT Staffing",
    dropdown: [
      { href: "/permanent-staffing", label: "Permanent staffing" },
      { href: "/temporary-staffing", label: "Temporary Staffing" },
      { href: "/recruitment-process-outsourcing", label: "Recruitment Process Outsourcing (RPO)" }
    ]
  },
  {
    href: "/technologies",
    label: "Technologies",
    dropdown: [
      { href: "/java", label: "Java" },
      { href: "/dotnet", label: ".Net" },
      { href: "/crm", label: "CRM" },
      { href: "/api-testing", label: "API Testing" },
      { href: "/devops", label: "DevOps" },
      { href: "/cloud-technologies", label: "Cloud Technologies" },
      { href: "/project-management", label: "Project Management" },
      { href: "/bigdata-technologies", label: "BigData Technologies" },
      { href: "/ai-machine-learning", label: "AI & Machine Learning" }
    ]
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/join-our-team",
    label: "Join Our Team",
  },
  {
    href: "#",
    label: "More",
    dropdown: [
      { href: "/benefits", label: "Benefits" },
      { href: "/blog", label: "Blog" },
      { href: "/contact-us", label: "Contact Us" }
    ]
  },
];

export function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {navConfig.map((item) => {
          const hasDropdown = item.dropdown && item.dropdown.length > 0;
          
          return (
            <div key={item.label} className="relative group">
              <div 
                className="flex items-center cursor-pointer text-sm xl:text-base transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => hasDropdown && toggleDropdown(item.label)}
              >
                {hasDropdown ? (
                  <div className="flex items-center">
                    {item.label}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="ml-1 h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                ) : (
                  <Link href={item.href} className="hover:text-foreground/80">{item.label}</Link>
                )}
              </div>
              
              {hasDropdown && activeDropdown === item.label && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {item.dropdown?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={closeDropdown}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
