import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/humac-footer-logo-white.png"
                alt="Humac Inc Logo"
                width={150}
                height={50}
                className="mb-6"
              />
            </Link>
            <div className="mt-4">
              <p className="font-medium mb-2">Social Media :</p>
              <Link href="https://linkedin.com" className="inline-block">
                <Image 
                  src="/linkedin-icon.png" 
                  alt="LinkedIn" 
                  width={32} 
                  height={32} 
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/it-services" className="hover:text-blue-400 transition-colors">IT Services</Link></li>
              <li><Link href="/technologies" className="hover:text-blue-400 transition-colors">Technologies</Link></li>
              <li><Link href="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* USA Address */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">USA</h3>
            <p className="text-sm text-gray-300 mb-1">2730 W Agua Fria Fwy, Suite</p>
            <p className="text-sm text-gray-300 mb-1">#204.Phoenix, Arizona 85027</p>
            <p className="text-sm text-gray-300">(623) 582-2253</p>
          </div>

          {/* India Address */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">INDIA</h3>
            <p className="text-sm text-gray-300 mb-1">#1308, B-Block, Asian Sun City</p>
            <p className="text-sm text-gray-300 mb-1">Commercial Complex, Beside Sarath City Capital Mall, Kothaguda, Hyderabad 500084</p>
            <p className="text-sm text-gray-300">+91 8977032116</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>Copyright © 2024 Humacinc, All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
