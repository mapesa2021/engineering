import Head from 'next/head';
import Navbar from '../components/Navbar';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact - Q Play</title>
				<meta name="description" content="Get in touch with Q Play about partnerships, support, or events." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className="min-h-screen bg-dark-bg">
				<Navbar />
				
				{/* Hero */}
				<section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
					<div className="container-custom text-center">
						<h1 className="text-4xl md:text-6xl font-black text-white mb-6">Get In Touch</h1>
						<p className="text-xl text-white/90 max-w-3xl mx-auto">Partnerships, support, or bringing Q Play to your event — we&apos;re here for you.</p>
					</div>
				</section>

				{/* Contact */}
				<section className="section-padding">
					<div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
							<ContactForm />
						</div>
						<div>
							<h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
							<div className="space-y-6 text-white/80">
								<div>
									<div className="font-semibold text-white">Email</div>
									<div>support@qplay.app</div>
								</div>
								<div>
									<div className="font-semibold text-white">Partnerships</div>
									<div>partners@qplay.app</div>
								</div>
								<div>
									<div className="font-semibold text-white">Social</div>
									<div className="flex gap-4"><a href="#" className="hover:underline">Instagram</a><a href="#" className="hover:underline">X</a><a href="#" className="hover:underline">TikTok</a></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter */}
				<section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
					<div className="container-custom text-center">
						<h2 className="text-3xl font-bold text-white mb-6">Stay Connected</h2>
						<p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Subscribe for updates about new features and events.</p>
						<div className="max-w-md mx-auto">
							<NewsletterForm />
						</div>
					</div>
				</section>
			</main>
		</>
	);
} 