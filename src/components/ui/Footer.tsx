import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2b2777] text-[#e3c873] pt-12 pb-6 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
        {/* Information */}
        <div>
          <h4 className="font-bold mb-4">INFORMATION</h4>
          <ul className="space-y-2 text-[#fff] text-sm">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/careers">Career</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        {/* Web Development */}
        <div>
          <h4 className="font-bold mb-4">WEB DEVELOPMENT</h4>
          <ul className="space-y-2 text-[#fff] text-sm">
            <li><Link href="/technologies/php">PHP Development</Link></li>
            <li><Link href="/technologies/dotnet">.Net Development</Link></li>
            <li><Link href="/technologies/python">Python Development</Link></li>
            <li><Link href="/technologies/nodejs">Node.Js Development</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">SERVICES</h4>
          <ul className="space-y-2 text-[#fff] text-sm">
            <li>Data Science & AI</li>
            <li>Big Data Solutions</li>
            <li>Internet of Things</li>
            <li>Mobile App Development</li>
            <li>Java Development</li>
            <li>Augmented / Virtual Reality</li>
            <li>3D Modeling & 3D Animation</li>
            <li>Consulting Services</li>
          </ul>
        </div>
        {/* Offices */}
        <div>
          <h4 className="font-bold mb-4">CEREBULB (USA)</h4>
          <p className="text-[#fff] text-sm mb-4">122 North St. Jersey City, NJ 07307<br/>P : +1-201-203-4659</p>
          <h4 className="font-bold mb-2">CEREBULB (AUSTRALIA)</h4>
          <p className="text-[#fff] text-sm mb-4">17, Polsson Street, Horsely,<br/>New South Wales 2530<br/>P : +61 469 864 990</p>
          <h4 className="font-bold mb-2">CEREBULB (INDIA)</h4>
          <p className="text-[#fff] text-sm">307 & 801, Hiranandani Signature,<br/>Block #13B, Road #1C,<br/>GIFT-SEZ Zone 1, Gift City,<br/>Gandhinagar-382355, Gujarat<br/>P : (+91) 99099 77295</p>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="text-xs text-[#fff]/70 mb-4 md:mb-0">
          © COPYRIGHT 2025 CEREBULB.COM | PRIVACY POLICY | COOKIE POLICY
        </div>
        <div className="flex items-center gap-5">
          <a href="#" aria-label="Facebook" className="text-[#e3c873] hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="LinkedIn" className="text-[#e3c873] hover:text-white text-xl"><i className="fab fa-linkedin-in"></i></a>
          <button aria-label="Scroll to top" className="ml-4 p-2 rounded bg-[#2b2777] hover:bg-[#333] border border-gray-700">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
