import Head from 'next/head';
import Navbar from '../components/Navbar';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import Link from 'next/link';
import ProjectsSection from '../components/ProjectsSection';
import ProjectCategories from '../components/ProjectCategories';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Our Projects - Oleum Company Limited | Engineering Solutions in Tanzania</title>
        <meta name="description" content="Explore our engineering projects and technical solutions across Tanzania, including electrical systems, industrial automation, and environmental consulting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-oleum-white">
        <Navbar />
        
        {/* Hero Section */}
        <AnimatedSection delay={0.1}>
          <section className="section-padding bg-gradient-to-br from-oleum-navy via-oleum-navy-dark to-oleum-navy">
          <div className="container-custom text-center">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display">
              Our Projects
            </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-body">
                Discover how we're delivering innovative engineering solutions across Tanzania.
            </p>
          </div>
        </section>
        </AnimatedSection>

        {/* Featured Projects */}
        <ProjectsSection 
          title="Featured Projects"
          subtitle="Discover how we're delivering innovative engineering solutions across Tanzania."
          maxProjects={6}
          showFeatured={true}
          showCategories={true}
        />

        {/* Project Categories */}
        <ProjectCategories 
          title="Project Categories"
          subtitle="Explore our diverse portfolio of engineering solutions across different sectors."
        />

        {/* Get Involved */}
        <AnimatedSection delay={0.4}>
          <section className="section-padding bg-oleum-yellow">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-black text-oleum-black mb-6 font-display">
                Start Your Project
            </h2>
              <p className="text-xl text-oleum-black/80 mb-8 max-w-2xl mx-auto">
                Ready to bring your engineering vision to life? Let's discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-oleum-navy text-white hover:bg-oleum-navy-dark font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                  Get a Quote
                </Link>
                <Link href="/contact" className="border-2 border-oleum-navy text-oleum-navy hover:bg-oleum-navy hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                  Schedule Consultation
                </Link>
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