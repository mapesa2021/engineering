import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
	return (
		<>
			<Head>
				<title>About - Q Play</title>
				<meta name="description" content="Q Play connects fans and DJs with paid song requests that power unforgettable nights." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className="min-h-screen bg-dark-bg">
				<Navbar />

				{/* Hero */}
				<section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
					<div className="container-custom text-center">
						<h1 className="text-4xl md:text-6xl font-black text-white mb-4">About Q Play</h1>
						<p className="text-xl text-white/90 max-w-3xl mx-auto">We help fans influence the music and help DJs earn more—everyone wins.</p>
					</div>
				</section>

				{/* Mission & Vision */}
				<section className="section-padding">
					<div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
							<h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
							<p className="text-white/80">Empower nightlife with transparent, fair, and fun interactions between fans and DJs. Requests that matter, tips that reward.</p>
						</div>
						<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
							<h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
							<p className="text-white/80">A world where every party is interactive, every DJ is rewarded, and every fan helps shape the soundtrack of the night.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
} 