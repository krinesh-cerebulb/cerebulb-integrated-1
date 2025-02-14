import { cn } from "@/lib/utils";
import Link from "next/link";

const navConfig = [
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/it-staffing",
    label: "IT Staffing",
  },
  {
    href: "/technologies",
    label: "Technologies",
  },
  {
    href: "/join-our-team",
    label: "Join Our Team",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {navConfig.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm xl:text-base transition-colors hover:text-foreground/80 text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
