import Head from 'next/head';
import Navbar from '../components/Navbar';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import Link from 'next/link';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Us - Oleum Company Limited | Engineering Solutions in Tanzania</title>
				<meta name="description" content="Get in touch with Oleum Company Limited for engineering solutions, consultations, and project inquiries across Tanzania." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen bg-oleum-white">
				<Navbar />
				
				{/* Hero */}
				<AnimatedSection delay={0.1}>
					<section className="section-padding bg-gradient-to-br from-oleum-navy via-oleum-navy-dark to-oleum-navy">
						<div className="container-custom text-center">
							<h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display">Get In Touch</h1>
							<p className="text-xl text-white/90 max-w-3xl mx-auto font-body">Ready to discuss your engineering project? We're here to help with consultations, quotes, and technical support.</p>
						</div>
					</section>
				</AnimatedSection>

				{/* Contact */}
				<AnimatedSection delay={0.2}>
					<section className="section-padding bg-oleum-white">
						<div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
							<AnimatedCard delay={0.1}>
								<div>
									<h2 className="text-3xl font-bold text-oleum-navy mb-8">Send us a Message</h2>
									<ContactForm />
								</div>
							</AnimatedCard>
							<AnimatedCard delay={0.2}>
								<div>
									<h2 className="text-3xl font-bold text-oleum-navy mb-8">Contact Information</h2>
									<div className="space-y-6 text-oleum-navy/80">
										<div className="flex items-center space-x-4 p-4 bg-oleum-gray rounded-lg">
											<div className="w-12 h-12 bg-oleum-yellow rounded-lg flex items-center justify-center text-oleum-black">
												📧
											</div>
											<div>
												<div className="font-semibold text-oleum-navy">Email</div>
												<div>info@oleum.co.tz</div>
											</div>
										</div>
										<div className="flex items-center space-x-4 p-4 bg-oleum-gray rounded-lg">
											<div className="w-12 h-12 bg-oleum-navy rounded-lg flex items-center justify-center text-white">
												📞
											</div>
											<div>
												<div className="font-semibold text-oleum-navy">Phone</div>
												<div>+255 768 216 901</div>
											</div>
										</div>
										<div className="flex items-center space-x-4 p-4 bg-oleum-gray rounded-lg">
											<div className="w-12 h-12 bg-oleum-yellow rounded-lg flex items-center justify-center text-oleum-black">
												📍
											</div>
											<div>
												<div className="font-semibold text-oleum-navy">Address</div>
												<div>Dar Ubungo, Tanzania</div>
											</div>
										</div>
										<div className="flex items-center space-x-4 p-4 bg-oleum-gray rounded-lg">
											<div className="w-12 h-12 bg-oleum-navy rounded-lg flex items-center justify-center text-white">
												🕒
											</div>
											<div>
												<div className="font-semibold text-oleum-navy">Business Hours</div>
												<div>Mon-Fri: 8AM-6PM</div>
											</div>
										</div>
									</div>
								</div>
							</AnimatedCard>
						</div>
					</section>
				</AnimatedSection>

				{/* Newsletter */}
				<AnimatedSection delay={0.3}>
					<section className="section-padding bg-gradient-to-br from-oleum-navy via-oleum-navy-dark to-oleum-navy">
						<div className="container-custom text-center">
							<h2 className="text-3xl font-bold text-white mb-6">Stay Connected</h2>
							<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Subscribe for updates about new services, project insights, and industry news.</p>
							<div className="max-w-md mx-auto">
								<NewsletterForm />
							</div>
						</div>
					</section>
				</AnimatedSection>

				{/* Footer */}
				<footer className="bg-oleum-navy text-white relative shadow-2xl">
					{/* Top border accent */}
					<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-oleum-yellow via-oleum-navy to-oleum-yellow"></div>
					{/* Main Footer Content */}
					<div className="container-custom py-16">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							
							{/* Company Information */}
							<div className="space-y-4">
								<div className="flex items-center space-x-3 mb-4">
									<div className="w-12 h-12 bg-oleum-yellow rounded-lg flex items-center justify-center text-2xl font-bold text-oleum-black">
										O
									</div>
									<h3 className="text-xl font-bold">Oleum Company Limited</h3>
								</div>
								<p className="text-gray-300 text-sm leading-relaxed">
									Your trusted partner in engineering solutions. Providing comprehensive technical services, industrial automation, and professional guidance to help you achieve your engineering goals with confidence.
								</p>
								<div className="flex space-x-4">
									<a href="#" className="social-icon">
										📧
									</a>
									<a href="#" className="social-icon">
										📱
									</a>
									<a href="#" className="social-icon">
										💬
									</a>
								</div>
							</div>

							{/* Contact Information */}
							<div className="space-y-4">
								<h3 className="text-lg font-bold mb-4">Contact</h3>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<div className="footer-icon">
											📞
										</div>
										<span className="text-gray-300 text-sm">+255 768 216 901</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="footer-icon">
											📧
										</div>
										<span className="text-gray-300 text-sm">info@oleum.co.tz</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="footer-icon">
											📍
										</div>
										<span className="text-gray-300 text-sm">Dar Ubungo, Tanzania</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="footer-icon">
											🕒
										</div>
										<span className="text-gray-300 text-sm">Mon-Fri: 8AM-6PM</span>
									</div>
								</div>
							</div>
							
							{/* Company Links */}
							<div className="space-y-4">
								<h3 className="text-lg font-bold mb-4">Company</h3>
								<div className="space-y-3">
									<Link href="/about" className="block text-gray-300 text-sm hover:text-oleum-yellow transition-colors duration-300">
										About Us
									</Link>
									<Link href="/services" className="block text-gray-300 text-sm hover:text-oleum-yellow transition-colors duration-300">
										Our Services
									</Link>
									<Link href="/projects" className="block text-gray-300 text-sm hover:text-oleum-yellow transition-colors duration-300">
										Projects
									</Link>
									<Link href="/contact" className="block text-gray-300 text-sm hover:text-oleum-yellow transition-colors duration-300">
										Contact
									</Link>
									<Link href="/careers" className="block text-gray-300 text-sm hover:text-oleum-yellow transition-colors duration-300">
										Careers
									</Link>
								</div>
							</div>
							
							{/* Services */}
							<div className="space-y-4">
								<h3 className="text-lg font-bold mb-4">Services</h3>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<div className="w-6 h-6 bg-oleum-yellow rounded-full flex items-center justify-center text-xs text-oleum-black">
											⚡
										</div>
										<span className="text-gray-300 text-sm">Electrical Systems</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-6 h-6 bg-oleum-yellow rounded-full flex items-center justify-center text-xs text-oleum-black">
											🏭
										</div>
										<span className="text-gray-300 text-sm">Industrial Automation</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-6 h-6 bg-oleum-yellow rounded-full flex items-center justify-center text-xs text-oleum-black">
											🌊
										</div>
										<span className="text-gray-300 text-sm">Water Treatment</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-6 h-6 bg-oleum-yellow rounded-full flex items-center justify-center text-xs text-oleum-black">
											🧪
										</div>
										<span className="text-gray-300 text-sm">Chemical Supply</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Bottom Footer */}
					<div className="border-t border-oleum-navy-light">
						<div className="container-custom py-6">
							<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
								<div className="text-gray-300 text-sm">
									© 2025 Oleum Company Limited. All rights reserved. Made with ❤️ for engineering excellence.
								</div>
								<div className="flex items-center space-x-6">
									<div className="flex items-center space-x-2">
										<div className="w-4 h-4 bg-oleum-yellow rounded-full flex items-center justify-center text-xs text-oleum-black">
											✓
										</div>
										<span className="text-gray-300 text-sm">ISO Certified</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-4 h-4 bg-oleum-yellow rounded-full flex items-center justify-center text-xs text-oleum-black">
											✓
										</div>
										<span className="text-gray-300 text-sm">Licensed</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
} 