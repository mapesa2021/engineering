import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import { getEvents, testSupabaseConnection } from '../lib/db';
import type { Event } from '../lib/supabase';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState<string>('Testing...');

  useEffect(() => {
    // Load events from database (only on client side)
    if (typeof window !== 'undefined') {
      const loadEvents = async () => {
        try {
          console.log('🚀 Starting events loading process...');
          
          // Test Supabase connection first
          const isConnected = await testSupabaseConnection();
          setConnectionStatus(isConnected ? 'Connected' : 'Using fallback data');
          
          console.log('📡 Connection status:', isConnected ? 'Connected to Supabase' : 'Using fallback data');
          
          const events = await getEvents();
          console.log('🎉 Events loaded:', events);
          console.log('📊 Total events:', events.length);
          
          setEvents(events);
        } catch (error) {
          console.error('❌ Error loading events:', error);
          setEvents([]);
          setConnectionStatus('Error loading data');
        } finally {
          setIsLoading(false);
        }
      };
      
      loadEvents();
    }
  }, []);

  

	return (
		<>
			<Head>
				<title>Events - Q Play</title>
				<meta name="description" content="See where Q Play is being used next. Bring Q Play to your club or event." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className="min-h-screen bg-dark-bg">
				<Navbar />

				{/* Hero */}
				<section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
					<div className="container-custom text-center">
						<h1 className="text-4xl md:text-6xl font-black text-white mb-4">Upcoming Events</h1>
						<p className="text-xl text-white/90 max-w-3xl mx-auto">Clubs and parties using Q Play. Join the movement.</p>
					</div>
				</section>

				{/* Events List */}
				<AnimatedSection delay={0.2}>
					<section className="section-padding">
						<div className="container-custom">
							{isLoading ? (
								<div className="text-center py-12">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-q-orange mx-auto mb-4"></div>
									<p className="text-gray-300">Loading events...</p>
								</div>
							) : events.length === 0 ? (
								<div className="text-center py-12">
									<p className="text-gray-400 text-lg mb-4">No upcoming events at the moment.</p>
									<p className="text-gray-500">Check back soon for new events!</p>
								</div>
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{events.map((event, index) => (
										<AnimatedCard key={event.id} delay={0.1 + index * 0.1}>
											<Link href={`/events/${event.id}`}>
												<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
													{/* Event Cover Image */}
													<div className="relative h-48 w-full">
														<Image
															src={event.image}
															alt={event.title}
															fill
															className="object-cover"
															sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
														/>
														{/* Gradient overlay for better text readability */}
														<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
														{/* Status badge */}
														<div className="absolute top-4 left-4">
															<span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
																event.status === 'upcoming' ? 'bg-blue-500' : 'bg-green-500'
															}`}>
																{event.status.charAt(0).toUpperCase() + event.status.slice(1)}
															</span>
														</div>
														{event.featured && (
															<div className="absolute top-4 right-4">
																<span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-yellow-500">
																	Featured
																</span>
															</div>
														)}
													</div>
													
													{/* Event Details */}
													<div className="p-6">
														<div className="text-white font-bold text-xl mb-2">{event.title}</div>
														<div className="text-white/80 mb-1">{event.time}</div>
														<div className="text-white/70 mb-2">{event.venue}, {event.city}</div>
														<div className="text-white/60 mb-4 text-sm">{event.dj_name} • {event.ticket_price}</div>
														<button className="btn-secondary w-full">View Details</button>
													</div>
												</div>
											</Link>
										</AnimatedCard>
									))}
								</div>
							)}
						</div>
					</section>
				</AnimatedSection>

				{/* CTA */}
				<section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
					<div className="container-custom text-center">
						<h2 className="text-3xl md:text-5xl font-black text-white mb-6">Bring Q Play to your event</h2>
						<p className="text-white/90 mb-8 max-w-2xl mx-auto">Transform your party with real-time song requests and tips.</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="btn-app-store">Download on App Store</button>
							<button className="btn-google-play">Get it on Google Play</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
} 