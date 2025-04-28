'use client';

import Image from 'next/image';

export default function ContactUs() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A1B3D] relative py-12 px-2 overflow-hidden">
      {/* Background overlays for depth */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src="/images/contact-bg.png" alt="background accent" className="absolute right-0 top-0 w-2/3 max-w-[900px] opacity-60 mix-blend-lighten select-none" />
        <svg className="absolute left-0 bottom-0 w-1/3 max-w-[400px] opacity-30" viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill="#19376D" /></svg>
      </div>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl z-10 bg-transparent">
        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center text-white" style={{background: 'rgba(10,27,61,0.96)'}}>
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="space-y-7 text-base mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-1">CereBulb (USA)</h3>
              <p>122 North St. Jersey City, NJ 07307<br />
              <span className="font-semibold">P :</span> +1-201-203-4659</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">CereBulb (Australia)</h3>
              <p>17, Polsson Street, Horsely,<br />New South Wales 2530<br />
              <span className="font-semibold">P :</span> +61 469 864 990</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">CereBulb (India)</h3>
              <p>307 &amp; 801, Hiranandani Signature,<br />Block #13B, Road #1C,<br />GIFZ-SEZ Zone 1, Gift City,<br />Gandhinagar-382355, Gujarat<br />
              <span className="font-semibold">P :</span> (+91) 99099 77295</p>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col justify-center min-h-[600px] rounded-none lg:rounded-r-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#0A1B3D]">Get In Touch With Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded px-4 py-2" required />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-2" required />
            <input type="text" placeholder="Phone Number" className="w-full border border-gray-300 rounded px-4 py-2" />
            <textarea placeholder="Message" className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px]" required></textarea>
            {/* reCAPTCHA placeholder */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="recaptcha" className="w-5 h-5" />
              <label htmlFor="recaptcha" className="text-sm">I&apos;m not a robot</label>
              <div className="ml-auto"><Image src="/images/19.png" alt="reCAPTCHA" width={120} height={32} /></div>
            </div>
            <button type="submit" className="w-full bg-[#2563eb] text-white py-3 rounded font-semibold text-lg hover:bg-blue-700 transition-colors">Submit Now</button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            By providing a telephone number and submitting the form you are consenting to be contracted by SMS text message. Message &amp; data rates may apply. Reply STOP to opt out of further messaging.
          </p>
        </div>
      </div>
    </main>
  );
}