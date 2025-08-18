import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-dark-bg/80 backdrop-blur-md border-b border-q-orange/20 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
                           {/* Logo - Far Left */}
                 <Link href="/" className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer shadow-lg shadow-q-orange/30 overflow-hidden">
                     <img 
                       src="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" 
                       alt="Q Play Logo" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <span className="text-2xl font-black text-gradient font-display">Q Play</span>
                 </Link>

                           {/* Desktop Navigation - Center */}
                 <div className="hidden md:flex items-center space-x-8">
                   <Link
                     href="/"
                     className="text-white hover:text-q-orange transition-colors duration-200 font-semibold relative group"
                   >
                     Home
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-q-orange to-q-magenta transition-all duration-200 group-hover:w-full"></span>
                   </Link>
                   <Link
                     href="/blog"
                     className="text-white hover:text-q-magenta transition-colors duration-200 font-semibold relative group"
                   >
                     Blog
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-q-magenta to-q-purple transition-all duration-200 group-hover:w-full"></span>
                   </Link>
                   <Link
                     href="/events"
                     className="text-white hover:text-q-purple transition-colors duration-200 font-semibold relative group"
                   >
                     Events
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-q-purple to-q-orange transition-all duration-200 group-hover:w-full"></span>
                   </Link>
                   <Link
                     href="/contact"
                     className="text-white hover:text-q-orange transition-colors duration-200 font-semibold relative group"
                   >
                     Contact
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-q-orange to-q-magenta transition-all duration-200 group-hover:w-full"></span>
                   </Link>
                   <Link
                     href="/terms"
                     className="text-white hover:text-q-magenta transition-colors duration-200 font-semibold relative group"
                   >
                     Terms
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-q-magenta to-q-purple transition-all duration-200 group-hover:w-full"></span>
                   </Link>
                   <Link
                     href="/privacy"
                     className="text-white hover:text-q-purple transition-colors duration-200 font-semibold relative group"
                   >
                     Privacy
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-q-purple to-q-orange transition-all duration-200 group-hover:w-full"></span>
                   </Link>
                 </div>

          {/* CTA Button - Far Right */}
          <div className="hidden md:block">
            <button className="btn-primary flex items-center space-x-2">
              <span className="text-white">📱</span>
              <span className="text-white font-semibold">DOWNLOAD APP</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:text-q-orange hover:bg-dark-card transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

                       {/* Mobile Navigation */}
               {isMenuOpen && (
                 <div className="md:hidden border-t border-q-orange/20 py-4 bg-dark-card/50 backdrop-blur-sm">
                   <div className="flex flex-col space-y-4">
                     <Link
                       href="/"
                       className="text-white hover:text-q-orange transition-colors duration-200 font-semibold px-4 py-2 hover:bg-dark-surface rounded-md"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Home
                     </Link>
                     <Link
                       href="/blog"
                       className="text-white hover:text-q-magenta transition-colors duration-200 font-semibold px-4 py-2 hover:bg-dark-surface rounded-md"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Blog
                     </Link>
                     <Link
                       href="/events"
                       className="text-white hover:text-q-purple transition-colors duration-200 font-semibold px-4 py-2 hover:bg-dark-surface rounded-md"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Events
                     </Link>
                     <Link
                       href="/contact"
                       className="text-white hover:text-q-orange transition-colors duration-200 font-semibold px-4 py-2 hover:bg-dark-surface rounded-md"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Contact
                     </Link>
                     <Link
                       href="/terms"
                       className="text-white hover:text-q-magenta transition-colors duration-200 font-semibold px-4 py-2 hover:bg-dark-surface rounded-md"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Terms
                     </Link>
                     <Link
                       href="/privacy"
                       className="text-white hover:text-q-purple transition-colors duration-200 font-semibold px-4 py-2 hover:bg-dark-surface rounded-md"
                       onClick={() => setIsMenuOpen(false)}
                     >
                       Privacy
                     </Link>
                     <button className="btn-primary flex items-center justify-center space-x-2 mt-4">
                       <span className="text-white">📱</span>
                       <span className="text-white font-semibold">DOWNLOAD APP</span>
                     </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 