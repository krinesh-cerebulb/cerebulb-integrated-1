"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Slide {
	heading: string;
	subheading: string;
	cta: {
		findJob: string;
		findTalent: string;
		about: string;
		joinTeam: string;
	}
	image?: string;
}

const slides: Slide[] = [
	
];

export function MainHero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 5000);
		
		return () => clearInterval(interval);
	}, []);

	const handleDotClick = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white">
			{/* Hero Section with Image */}
			<div className="relative h-[600px] md:h-[700px]">
				{/* Image Overlay */}
				<div className="absolute inset-0 z-0">
					{slides.map((slide, index) => (
						<div 
							key={index}
							className={`absolute inset-0 transition-opacity duration-1000 ${
								currentSlide === index ? 'opacity-100' : 'opacity-0'
							}`}
						>
							{slide.image && (
								<Image
									src={slide.image}
									alt="Hero background"
									fill
									priority
									className="object-cover"
									sizes="100vw"
								/>
							)}
							<div className="absolute inset-0 bg-black/50"></div>
						</div>
					))}
				</div>
				
				{/* Content */}
				<div className="max-w-7xl mx-auto relative z-10 h-full">
					{slides.map((slide, index) => (
						<div 
							key={index}
							className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 px-4 md:px-8 ${
								currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
							}`}
						>
							<div className="max-w-3xl">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">
									{slide.heading}
								</h1>
								{slide.subheading && (
									<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-white/90">
										{slide.subheading}
									</h2>
								)}
								<div className="flex flex-wrap gap-4 mt-8">
									<Link 
										href={slide.cta.findJob} 
										className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors text-white shadow-lg hover:shadow-xl"
									>
										Find Job
									</Link>
									<Link 
										href={slide.cta.findTalent} 
										className="px-6 py-3 border border-white hover:bg-white hover:text-slate-900 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
									>
										Find Talent
									</Link>
									<Link 
										href={slide.cta.about} 
										className="px-6 py-3 border border-white hover:bg-white hover:text-slate-900 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl"
									>
										About
									</Link>
									<Link 
										href={slide.cta.joinTeam} 
										className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-medium transition-colors text-white shadow-lg hover:shadow-xl"
									>
										Join Our Team
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Slide Indicators */}
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
			</div>

			{/* Banner Section */}
			<div className="bg-white py-8 shadow-md">
				<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 justify-between items-center">
					<div className="flex gap-4 items-center">
						<div className="bg-blue-50 p-3 rounded-full">
							<Image 
								src="/global-network.png" 
								alt="Global network" 
								width={60} 
								height={60}
							/>
						</div>
						<div>
							<h3 className="text-gray-900 font-bold text-lg">17+ Years Experience</h3>
							<p className="text-gray-600">IT Services & Staffing Provider</p>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<div className="bg-blue-50 p-3 rounded-full">
							<Image 
								src="/trusted.png" 
								alt="Trusted" 
								width={60} 
								height={60}
							/>
						</div>
						<div>
							<h3 className="text-gray-900 font-bold text-lg">Fortune 500 Clients</h3>
							<p className="text-gray-600">Trusted by leading enterprises</p>
						</div>
					</div>
					<div className="flex gap-4 items-center">
						<div className="bg-blue-50 p-3 rounded-full">
							<Image 
								src="/branding.png" 
								alt="Global reach" 
								width={60} 
								height={60}
							/>
						</div>
						<div>
							<h3 className="text-gray-900 font-bold text-lg">Global Presence</h3>
							<p className="text-gray-600">USA & India based company</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
