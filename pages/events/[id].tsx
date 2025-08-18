import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import AnimatedSection from '../../components/AnimatedSection';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  image: string;
  djName: string;
  djBio: string;
  ticketPrice: string;
  capacity: number;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;

  // This would normally come from an API or database
  // For now, we'll simulate getting the event data
  const getEvent = (): Event | null => {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem('caretheplanet_events');
    if (!stored) return null;
    
    const events = JSON.parse(stored);
    return events.find((event: Event) => event.id === Number(id)) || null;
  };

  const event = getEvent();

  if (!event) {
    return (
      <>
        <Head>
          <title>Event Not Found - Q Play</title>
          <meta name="description" content="Event not found" />
        </Head>
        <div className="min-h-screen bg-dark-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
            <p className="text-gray-300 mb-8">The event you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/events" className="bg-gradient-to-r from-q-orange to-q-magenta text-white px-6 py-3 rounded-lg hover:from-glow-orange hover:to-glow-magenta transition-all duration-200">
              Back to Events
            </Link>
          </div>
        </div>
      </>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500';
      case 'ongoing': return 'bg-green-500';
      case 'completed': return 'bg-gray-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <>
      <Head>
        <title>{event.title} - Q Play Events</title>
        <meta name="description" content={event.description} />
        <meta name="keywords" content={`${event.title}, ${event.category}, ${event.city}, Q Play event`} />
        <link rel="icon" href="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" />
      </Head>

      <main className="min-h-screen bg-dark-bg">
        <Navbar />
        
        {/* Hero Section */}
        <AnimatedSection delay={0.1}>
          <section className="relative h-96 lg:h-[500px] overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-end">
              <div className="container-custom pb-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getStatusColor(event.status)}`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                  {event.featured && (
                    <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-yellow-500">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{event.title}</h1>
                <p className="text-xl text-white/90 max-w-3xl">{event.description}</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Event Details */}
        <AnimatedSection delay={0.2}>
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="bg-dark-card border border-q-orange/20 rounded-2xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-white mb-6">Event Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">📅 Date & Time</h3>
                        <p className="text-gray-300">{formatDate(event.date)}</p>
                        <p className="text-gray-300">{event.time}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">📍 Location</h3>
                        <p className="text-gray-300">{event.venue}</p>
                        <p className="text-gray-300">{event.address}</p>
                        <p className="text-gray-300">{event.city}, {event.state} {event.zipCode}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">🎵 DJ</h3>
                        <p className="text-gray-300">{event.djName}</p>
                        {event.djBio && (
                          <p className="text-gray-400 text-sm mt-2">{event.djBio}</p>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">💰 Ticket Price</h3>
                        <p className="text-gray-300">{event.ticketPrice}</p>
                        <p className="text-gray-400 text-sm mt-2">Capacity: {event.capacity} people</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">About This Event</h3>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Q Play Integration */}
                  <div className="bg-gradient-to-br from-q-orange via-q-magenta to-q-purple rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Q Play Integration</h2>
                    <p className="text-white/90 mb-6">
                      This event features Q Play integration! Download the app to request songs and tip the DJ in real-time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="btn-app-store flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        Download on App Store
                      </button>
                      <button className="btn-google-play flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        Get it on Google Play
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-dark-card border border-q-orange/20 rounded-2xl p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-4">Event Info</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-400 text-sm">Category</span>
                        <p className="text-white font-semibold">{event.category}</p>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 text-sm">Date</span>
                        <p className="text-white font-semibold">{formatDate(event.date)}</p>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 text-sm">Time</span>
                        <p className="text-white font-semibold">{event.time}</p>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 text-sm">Venue</span>
                        <p className="text-white font-semibold">{event.venue}</p>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 text-sm">DJ</span>
                        <p className="text-white font-semibold">{event.djName}</p>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 text-sm">Price</span>
                        <p className="text-white font-semibold">{event.ticketPrice}</p>
                      </div>
                      
                      <div>
                        <span className="text-gray-400 text-sm">Capacity</span>
                        <p className="text-white font-semibold">{event.capacity} people</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-q-orange/20">
                      <button className="w-full bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 mb-3">
                        Get Tickets
                      </button>
                      <button className="w-full bg-transparent border-2 border-q-purple text-q-purple hover:bg-q-purple hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Back to Events */}
        <AnimatedSection delay={0.3}>
          <section className="section-padding bg-gradient-to-br from-q-purple via-q-magenta to-q-orange">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">More Events</h2>
              <p className="text-white/90 mb-8">Discover more amazing events with Q Play integration</p>
              <Link href="/events" className="bg-white text-q-orange font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                View All Events
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </>
  );
} 