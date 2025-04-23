'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Heading } from '@/components/ui/heading'
import { Content } from '@/components/ui/content'
import { HighlightWords } from '@/components/ui/highlight-words'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { locations, type Location, type Social } from '@/components/ui/data/locations'
import { MainHero } from "@/components/ui/main-hero";


// Define the missing types
type TImage = {
	src: string
	alt: string
}

type ContactUsData = {
	form_label: string
	info: {
		image: TImage
		label: string
		heading: string
		wordToHighlight?: string[]
		content: string
	}[]
	office: {
		heading: string
		image: TImage
		locations: Location[]
		email: {
			heading: string
			label: string
			email: string
		}
		social: {
			heading: string
			links: Social[]
		}
	}
}

const data: ContactUsData = {
	form_label: 'Connect, Collaborate, and Take Control—All in One Place',
	info: [
		{
			image: {
				src: '/global-network.png',
				alt: 'global-network',
			},
			label: 'Global Reach',
			heading: 'Driving Digital Transformation Across 200+ Countries',
			wordToHighlight: ['200+', 'countries'],
			content:
				"Partner with our experts to see how CEREBULB's solutions can revolutionize your operations.",
		},
		{
			image: {
				src: '/trusted.png',
				alt: 'trusted',
			},
			label: 'Trusted Customers',
			heading: 'Empowering Fortune 500 Industries with Data-Driven Insights',
			wordToHighlight: ['Fortune', '500'],
			content:
				'Explore tailored solutions designed to optimize your digital journey.',
		},
		{
			image: {
				src: '/branding.png',
				alt: 'branding',
			},
			label: 'Industry Expertise',
			heading:
				'Optimizing 50+ Industry Domains with Cutting-Edge Data Solutions',
			wordToHighlight: ['50+', 'Industry', 'Domains'],
			content:
				'Boost efficiency and unlock new possibilities with our intelligent data-driven approach.',
		},
	],
	office: {
		heading: 'OUR OFFICES',
		image: {
			src: '/world-map.png',
			alt: 'Cerebulb offices - USA, Australia, India',
		},
		locations: locations,
		email: {
			heading: 'REACH US AT',
			email: 'info@cerebulb.com',
			label: 'info@cerebulb.com',
		},
		social: {
			heading: 'FOLLOW US',
			links: [
				{
					href: 'https://www.instagram.com/cerebulb_/',
					label: 'Instagram',
					icon: 'instagram',
				},
				{
					href: 'https://in.linkedin.com/company/cerebulb',
					label: 'LinkedIn',
					icon: 'linkedin',
				},
				{
					href: 'https://x.com',
					label: 'X - Previously Known as Twitter',
					icon: 'x',
				},
			],
		},
	},
}

export type ContactUsProps = {
	data: ContactUsData
}

export default function ContactUs() {
	return (
		<div className="container-wrapper">
			<div className="container-y container">
				<div className="grid items-center gap-7 sm:gap-12 lg:grid-cols-2 xl:gap-16">
					<div className="bg-background-light-2 border-border rounded-xl border">
						<div className="border-b p-6 md:p-8">
							<Heading variant="sm">{data.form_label}</Heading>
						</div>
						<div className="p-6 md:p-8">
							<form className="">
								<fieldset>
									<div className="space-y-4">
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-2">
												<label htmlFor="first-name" className="text-sm font-medium">First Name</label>
												<input
													id="first-name"
													type="text"
													className="w-full rounded-md border border-border p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
													placeholder="Enter your first name"
												/>
											</div>
											<div className="space-y-2">
												<label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
												<input
													id="last-name"
													type="text"
													className="w-full rounded-md border border-border p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
													placeholder="Enter your last name"
												/>
											</div>
										</div>
										<div className="space-y-2">
											<label htmlFor="email" className="text-sm font-medium">Email</label>
											<input
												id="email"
												type="email"
												className="w-full rounded-md border border-border p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
												placeholder="Enter your email"
											/>
										</div>
										<div className="space-y-2">
											<label htmlFor="message" className="text-sm font-medium">Message</label>
											<textarea
												id="message"
												rows={4}
												className="w-full rounded-md border border-border p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
												placeholder="Enter your message"
											></textarea>
										</div>
									</div>
									<Button className="mt-4 w-full rounded-md">Submit</Button>
								</fieldset>
							</form>
						</div>
					</div>

					<div className="relative row-start-1 flex overflow-hidden lg:col-start-2">
						<ScrollArea className="max-w-none">
							<div className="flex shrink-0 flex-col gap-4 pb-2 sm:flex-row lg:flex-col lg:gap-6">
								{data.info.map((item: {
									image: TImage
									label: string
									heading: string
									wordToHighlight?: string[]
									content: string
								}, index: number) => {
									return (
										<div key={index} className="flex w-full max-w-lg shrink-0">
											<div className="flex w-full max-w-24 flex-col items-center justify-between">
												<Image
													src={item.image.src}
													width={50}
													height={50}
													alt={item.image.alt}
												/>
												<Heading
													variant="subHeading"
													className="text-center text-wrap"
													asChild
												>
													<p>{item.label}</p>
												</Heading>
											</div>

											<div className="mx-4">
												<Separator
													orientation="vertical"
													className="bg-border"
												/>
											</div>

											<div className="flex-1 space-y-2">
												<Heading variant="subHeading">
													<HighlightWords
														text={item.heading}
														wordToHighlight={item.wordToHighlight}
														highlightClassName="text-brand-dark"
													/>
												</Heading>
												<Content>{item.content}</Content>
											</div>
										</div>
									)
								})}
							</div>
							<ScrollBar orientation="horizontal" className="invisible" />
						</ScrollArea>
					</div>

					{/* OFFICES */}
					<div className="bg-background-light-2 border-border rounded-xl border p-6 md:p-8 lg:col-span-2">
						<Heading variant="sm">{data.office.heading}</Heading>
						<Separator className="bg-border mt-2 mb-4" />
						<div className="grid gap-6 xl:grid-cols-5">
							<div className="relative aspect-[4/3] h-full w-full rounded-xl lg:aspect-video xl:col-span-2 xl:aspect-auto">
								<Image
									src={data.office.image.src}
									alt={data.office.image.alt}
									fill
									objectPosition="center"
									className="rounded-xl"
								/>
							</div>

							<div className="text-sub-heading grid gap-6 xl:col-span-3">
								<div className="grid gap-3 md:grid-cols-2">
									{data.office.locations.map((location: Location) => {
										return (
											<div
												key={location.country}
												className="max-w-[400px] space-y-1.5"
											>
												<Content
													variant="sm"
													className="flex items-center gap-2 font-semibold"
												>
													<span role="img">{location.flag}</span>
													{location.country}
												</Content>
												<Content variant="sm">{location.address}</Content>
												<Content variant="sm">{location.phone_number}</Content>
											</div>
										)
									})}
								</div>

								<div className="grid grid-cols-2 gap-3 lg:gap-6">
									<div>
										<Heading variant="subHeading" className="text-sm">
											{data.office.email.heading}
										</Heading>
										<Separator className="bg-border mt-1 mb-2" />
										<a
											href={`mailto:${data.office.email.email}`}
											className="text-content"
										>
											<Content variant="sm">{data.office.email.label}</Content>
										</a>
									</div>

									<div>
										<Heading variant="subHeading" className="text-sm">
											{data.office.social.heading}
										</Heading>
										<Separator className="bg-border mt-1 mb-2" />
										<ul className="flex gap-3">
											{data.office.social.links.map((link: Social) => {
												return (
													<li key={link.href} className="h-8 text-2xl">
														<Link
															href={link.href}
															target="_blank"
															className="h-8"
														>
															<DynamicIcon
																name={link.icon}
																className="size-full"
															/>
														</Link>
													</li>
												)
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
