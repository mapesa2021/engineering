import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Q Play - Request Songs. Tip DJs. Own the Night.</title>
        <meta name="description" content="Q Play lets fans at events and clubs pay to request their favorite songs while DJs earn more by playing them." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
                       <link rel="icon" href="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" />
      </Head>

      <main className="min-h-screen bg-dark-bg">
        <Navbar />
        <Hero />
        
        {/* How It Works Section */}
        <AnimatedSection delay={0.1}>
          <section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
                  <span className="text-white">How It Works</span>
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Get your favorite songs played and help DJs earn more. It's that simple.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center group hover:scale-105">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                      🎵
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">1. Fans Request Songs</h3>
                    <p className="text-white/90 leading-relaxed">
                      Browse the song catalog and pay to request your favorite tracks. Set your price and get your song in the queue.
                    </p>
                  </div>
                </AnimatedCard>

                {/* Step 2 */}
                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center group hover:scale-105">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl" style={{ animationDelay: '1.5s' }}>
                      🎧
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">2. DJs Play Them</h3>
                    <p className="text-white/90 leading-relaxed">
                      DJs see the requests in real-time and play the highest-paying songs first. The crowd gets what they want.
                    </p>
                </div>
                </AnimatedCard>

                {/* Step 3 */}
                <AnimatedCard delay={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center group hover:scale-105">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl" style={{ animationDelay: '3s' }}>
                      💰
                </div>
                    <h3 className="text-2xl font-bold text-white mb-4">3. DJs Earn Tips</h3>
                    <p className="text-white/90 leading-relaxed">
                      DJs earn extra income from song requests while keeping the party going. Everyone wins.
                    </p>
                </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        {/* Benefits Section */}
        <AnimatedSection delay={0.4}>
          <section className="section-padding bg-dark-bg">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
                  <span className="text-gradient">Why Choose Q Play?</span>
                  </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body">
                  The ultimate platform connecting fans and DJs for unforgettable nights.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* For Fans */}
                <div className="neon-card">
                  <div className="text-center lg:text-left">
                    <div className="w-16 h-16 bg-gradient-to-r from-q-orange to-q-magenta rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6 text-2xl">
                      🎉
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">For Fans</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-q-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Control the Vibe</h4>
                          <p className="text-gray-300 text-sm">Request your favorite songs and shape the night's energy.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-q-magenta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Hear Your Songs</h4>
                          <p className="text-gray-300 text-sm">Get your requests played by paying what you think they're worth.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-q-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Connect with DJs</h4>
                          <p className="text-gray-300 text-sm">Build relationships with your favorite DJs and support their craft.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* For DJs */}
                <div className="neon-card">
                  <div className="text-center lg:text-left">
                    <div className="w-16 h-16 bg-gradient-to-r from-q-magenta to-q-purple rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6 text-2xl">
                      🎛️
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">For DJs</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-q-magenta rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Earn Extra Income</h4>
                          <p className="text-gray-300 text-sm">Make more money doing what you love with song request tips.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-q-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Engage Fans</h4>
                          <p className="text-gray-300 text-sm">Build a loyal following and connect with your audience like never before.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-q-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">Grow Your Following</h4>
                          <p className="text-gray-300 text-sm">Expand your reach and get discovered by new fans at every event.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        {/* Testimonials Section */}
        <AnimatedSection delay={0.6}>
          <section className="section-padding bg-gradient-to-br from-q-purple via-q-magenta to-q-orange">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
                  <span className="text-white">What People Say</span>
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Join thousands of happy fans and DJs who are already using Q Play.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Fan Testimonial */}
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center group hover:scale-105">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                      🎉
                    </div>
                    <p className="text-white/90 mb-6 italic text-lg">
                      "Q Play made the party unforgettable! I got my favorite song played and the whole crowd went wild. Worth every penny!"
                    </p>
                    <div>
                      <div className="text-white font-semibold">Sarah M.</div>
                      <div className="text-white/80 text-sm">Party Goer</div>
                    </div>
                  </div>
                </AnimatedCard>

                {/* DJ Testimonial */}
                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-center group hover:scale-105">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                      🎛️
                    </div>
                    <p className="text-white/90 mb-6 italic text-lg">
                      "Finally a way to earn extra while doing what I love. The fans are happy, I'm making more money, and the energy is incredible!"
                    </p>
                    <div>
                      <div className="text-white font-semibold">DJ Mike</div>
                      <div className="text-white/80 text-sm">Professional DJ</div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        {/* DJ Stats Section */}
        <AnimatedSection delay={0.8}>
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
                  Built for DJs
                  </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Monetize song requests, keep crowds hyped, and own the night with Q Play.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-white">+$250</div>
                  <div className="text-white/70">Avg. extra per night</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-white">2.5x</div>
                  <div className="text-white/70">More fan engagement</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-white">10K+</div>
                  <div className="text-white/70">Fans already on Q Play</div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* DJ Features Section */}
        <AnimatedSection delay={0.9}>
          <section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">
                  Why DJs Love Q Play
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Everything you need to boost your earnings and connect with fans.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">💰</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Earn Extra Income</h3>
                    <p className="text-white/80">Get paid for playing the songs your crowd wants—right when they want it. Tips range from $5 to $50+ per request.</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🎧</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Live Request Queue</h3>
                    <p className="text-white/80">See requests in real-time with song titles, artist names, and tip amounts. Play the highest-paying songs first.</p>
                  </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">👥</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Build Your Following</h3>
                    <p className="text-white/80">Fans can follow you, see your upcoming gigs, and get notified when you're playing nearby.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.4}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📊</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
                    <p className="text-white/80">Track your earnings, most requested songs, and fan engagement metrics to optimize your sets.</p>
                    </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.5}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🎵</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Song Library</h3>
                    <p className="text-white/80">Access a vast library of songs. Fans can request anything from current hits to classic tracks.</p>
                    </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.6}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">💬</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Fan Interaction</h3>
                    <p className="text-white/80">Fans can send messages with their requests and you can respond directly through the app.</p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* DJ How It Works Section */}
        <AnimatedSection delay={1.0}>
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">
                  How It Works for DJs
              </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Get started in minutes and start earning from your first gig.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">📱</div>
                    <h3 className="text-2xl font-bold text-white mb-4">1. Download & Setup</h3>
                    <p className="text-white/80">Download Q Play, create your DJ profile, and connect your payment method. Setup takes less than 5 minutes.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-4">2. Go Live</h3>
                    <p className="text-white/80">Start your set and go live on Q Play. Fans at your venue can start requesting songs immediately.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">💸</div>
                    <h3 className="text-2xl font-bold text-white mb-4">3. Earn Money</h3>
                    <p className="text-white/80">Play requested songs and earn tips instantly. Money is transferred to your account within 24 hours.</p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* DJ Earnings Examples Section */}
        <AnimatedSection delay={1.1}>
          <section className="section-padding bg-gradient-to-br from-q-purple via-q-magenta to-q-orange">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">
                  Real Earnings Examples
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  See how much DJs are actually making with Q Play.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Club DJ - 4 Hour Set</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-white/80">
                        <span>Song Requests:</span>
                        <span>24 requests</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Average Tip:</span>
                        <span>$12.50</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Q Play Fee (15%):</span>
                        <span>-$45</span>
                      </div>
                      <div className="border-t border-white/20 pt-2 flex justify-between text-white font-bold text-lg">
                        <span>Total Earnings:</span>
                        <span>$255</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">*Based on actual DJ earnings data</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Wedding DJ - 6 Hour Event</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-white/80">
                        <span>Song Requests:</span>
                        <span>18 requests</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Average Tip:</span>
                        <span>$15.00</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Q Play Fee (15%):</span>
                        <span>-$40.50</span>
                      </div>
                      <div className="border-t border-white/20 pt-2 flex justify-between text-white font-bold text-lg">
                        <span>Total Earnings:</span>
                        <span>$229.50</span>
                  </div>
                </div>
                    <p className="text-white/70 text-sm">*Based on actual DJ earnings data</p>
                  </div>
                </AnimatedCard>
                  </div>
                </div>
          </section>
        </AnimatedSection>

        {/* DJ Testimonials Section */}
        <AnimatedSection delay={1.2}>
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">
                  What DJs Are Saying
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Join thousands of DJs who've transformed their careers with Q Play.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mr-4">🎛️</div>
                      <div>
                        <div className="text-white font-bold text-lg">DJ Mike</div>
                        <div className="text-white/70">Professional Club DJ</div>
                  </div>
                </div>
                    <p className="text-white/80 italic mb-4">
                      "Q Play has completely changed my income. I'm making an extra $300-500 per night just from song requests. The crowd loves it because they get to hear their favorite songs, and I love it because I'm getting paid more to do what I already love."
                    </p>
                    <div className="text-white/60 text-sm">Los Angeles, CA</div>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl mr-4">🎧</div>
                      <div>
                        <div className="text-white font-bold text-lg">Sarah Chen</div>
                        <div className="text-white/70">Wedding & Event DJ</div>
                  </div>
                </div>
                    <p className="text-white/80 italic mb-4">
                      "The engagement level at my events has skyrocketed since using Q Play. Guests are more involved, the energy is incredible, and I'm earning significantly more. It's a win-win for everyone."
                    </p>
                    <div className="text-white/60 text-sm">Miami, FL</div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* DJ FAQ Section */}
        <AnimatedSection delay={1.3}>
          <section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-display">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
                  Everything you need to know about getting started with Q Play.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <AnimatedCard delay={0.1}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">How much does it cost to join Q Play?</h3>
                    <p className="text-white/80">Q Play is completely free to download and use. We only take a 15% fee from song request tips, so you keep 85% of all earnings.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Do I need special equipment?</h3>
                    <p className="text-white/80">No special equipment needed! Just download the Q Play app on your phone or tablet. You can use it alongside your existing DJ setup.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">How do I get paid?</h3>
                    <p className="text-white/80">Earnings are automatically transferred to your connected bank account or PayPal within 24 hours of each gig. You can also track all earnings in real-time through the app.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.4}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Can I decline song requests?</h3>
                    <p className="text-white/80">Absolutely! You have full control over which songs to play. You can decline requests that don't fit your set or venue requirements.</p>
                  </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.5}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">What if I don't have the requested song?</h3>
                    <p className="text-white/80">You can decline requests for songs you don't have. Fans will be notified and can request a different song instead.</p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Final CTA Section */}
        <AnimatedSection delay={1.4}>
          <section className="section-padding bg-gradient-to-br from-q-orange via-q-magenta to-q-purple">
            <div className="container-custom text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
                Ready to Start Earning More?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
                Join thousands of DJs who are already making extra income with Q Play. Download now and start earning from your next gig.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              
              <div className="text-white/70 text-sm">
                Free to download • No monthly fees • Start earning immediately
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <AnimatedSection delay={1.0}>
        <footer className="bg-dark-bg border-t border-q-orange/20 py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                                     <div className="flex items-center space-x-3 mb-4">
                       <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                         <img 
                           src="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" 
                           alt="Q Play Logo" 
                           className="w-full h-full object-cover"
                         />
                  </div>
                       <span className="text-2xl font-black text-gradient font-display">Q Play</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  The ultimate platform connecting fans and DJs for unforgettable nights. Request songs, tip DJs, and own the night.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/" className="hover:text-q-orange transition-colors duration-200">Home</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-q-magenta transition-colors duration-200">How It Works</Link></li>
                  <li><Link href="/for-djs" className="hover:text-q-purple transition-colors duration-200">For DJs</Link></li>
                  <li><Link href="/events" className="hover:text-q-orange transition-colors duration-200">Events</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Get Started</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-q-orange transition-colors duration-200">Download App</a></li>
                  <li><a href="#" className="hover:text-q-magenta transition-colors duration-200">For DJs</a></li>
                  <li><a href="#" className="hover:text-q-purple transition-colors duration-200">Support</a></li>
                  <li><a href="#" className="hover:text-q-orange transition-colors duration-200">Contact</a></li>
                </ul>
              </div>
            </div>
            
                               <div className="border-t border-q-orange/20 mt-8 pt-8 text-center text-gray-400">
                     <p>&copy; 2024 Q Play. All rights reserved. Own the night with Q Play.</p>
                     <div className="flex justify-center space-x-6 mt-4 text-sm">
                       <Link href="/terms" className="hover:text-q-orange transition-colors duration-200">Terms of Service</Link>
                       <Link href="/privacy" className="hover:text-q-magenta transition-colors duration-200">Privacy Policy</Link>
                     </div>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </>
  );
} 