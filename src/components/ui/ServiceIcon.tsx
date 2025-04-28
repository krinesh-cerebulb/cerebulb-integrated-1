import React from "react";

export type ServiceIconName =
  | "consulting"
  | "integration"
  | "crm"
  | "api"
  | "web"
  | "mobile";

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

export default function ServiceIcon({ name, className = "w-10 h-10" }: ServiceIconProps) {
  switch (name) {
    case "consulting":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "integration":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10M20 7v10M4 7c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2M4 17c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2M9 10h6M9 14h6" />
        </svg>
      );
    case "crm":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 00-8 0v4a4 4 0 008 0V7zM12 17v2m0 0h4m-4 0H8" />
        </svg>
      );
    case "api":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" />
        </svg>
      );
    case "web":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
      );
    case "mobile":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="1.5" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    default:
      return null;
  }
}
