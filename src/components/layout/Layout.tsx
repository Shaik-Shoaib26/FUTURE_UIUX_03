import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Moon, Sun, ArrowUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 font-sans flex flex-col">
      {/* Navigation */}
      <header
        className={twMerge(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-800 py-3' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <span className={twMerge(
              "font-serif italic bg-gradient-to-br from-purple-700 to-amber-500 bg-clip-text text-transparent transition-colors duration-300",
               isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
            )}>
              EventCraft
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={twMerge(
                      "text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-amber-500",
                      location.pathname === link.path 
                        ? "text-amber-500" 
                        : (isScrolled ? "text-slate-500 dark:text-slate-300" : "text-slate-600 dark:text-slate-300")
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className={twMerge(
                  "p-2 rounded-full transition-colors",
                  isScrolled ? "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" : "text-slate-800 hover:bg-black/5 dark:text-slate-200 dark:hover:bg-white/10"
                )}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link
                to="/book"
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border border-white/20 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book Consultation
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-slate-800 dark:text-slate-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={twMerge(
                "p-2 rounded-md transition-colors",
                isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-900 pt-24 px-6 flex flex-col md:hidden">
          <ul className="flex flex-col gap-6 text-xl font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={twMerge(
                    "block w-full border-b border-slate-100 dark:border-slate-800 pb-4",
                    location.pathname === link.path ? "text-purple-700 dark:text-amber-500" : "text-slate-800 dark:text-slate-200"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
               <Link
                  to="/design-rationale"
                  className="block w-full border-b border-slate-100 dark:border-slate-800 pb-4 text-slate-500 text-base"
                >
                  Design Rationale
                </Link>
            </li>
          </ul>
          <Link
            to="/book"
            className="mt-8 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[10px] uppercase tracking-widest text-center py-4 rounded-none font-bold transition-colors mb-8"
          >
            Book Consultation
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-serif italic text-2xl text-white bg-gradient-to-br from-amber-500 to-amber-200 bg-clip-text text-transparent">EventCraft</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Creating unforgettable experiences, one event at a time. Premium event management and planning for your most important moments.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-slate-400"><Instagram size={14} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-slate-400"><Facebook size={14} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-slate-400"><Twitter size={14} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-slate-400"><Linkedin size={14} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif italic text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'About Us', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest group">
                    <ChevronRight size={12} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif italic text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Wedding Planning', 'Corporate Events', 'Milestone Birthdays', 'Private Parties', 'Product Launches'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest group">
                    <ChevronRight size={12} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span className="text-slate-400">123 EventCraft Management, Hindupur, 515201</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a href="tel:+919030293102" className="text-slate-400 hover:text-white transition-colors">9030293102</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <a href="mailto:shaikshoaib436@gmail.com" className="text-slate-400 hover:text-white transition-colors">shaikshoaib436@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} EventCraft Event Management. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/design-rationale" className="text-slate-500 hover:text-white transition-colors">Design Rationale</Link>
          </div>
        </div>
      </footer>

      {/* Floating Action Button & Scroll To Top (Mobile & Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll To Top Button (Shows when scrolled) */}
        {isScrolled && (
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-all border border-slate-700 mx-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
        
        {/* Mobile Sticky CTA */}
        <Link to="/book" className="md:hidden w-14 h-14 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-lg shadow-purple-900/20 active:scale-95 transition-transform" aria-label="Book Consultation">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        </Link>
      </div>
    </div>
  );
}
