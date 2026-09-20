import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Info, 
  GraduationCap, 
  Cpu, 
  Brain, 
  Users, 
  Phone, 
  MapPin,
  Shield, 
  FileText 
} from 'lucide-react';
import { BrainSetuLogo } from '../../assets/logo/BrainSetuLogo';
import { InstagramIcon } from '../common/SocialIcons';
import { siteConfig } from '../../data/siteConfig';
import { Button } from '../common/Button';
import { EnquiryModal } from '../common/EnquiryModal';
import { useAuth } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Primary visible desktop links
  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  // Drawer menu links
  const drawerLinks = [
    { name: 'About Us', path: '/about', icon: Info, desc: 'Our vision, philosophy and mission' },
    { name: 'Learning Approach', path: '/learning-approach', icon: GraduationCap, desc: 'The 6-step mastery methodology' },
    { name: 'Technology', path: '/technology', icon: Cpu, desc: 'Digital practice & Intellia360 tools' },
    { name: 'Student Development', path: '/student-development', icon: Brain, desc: 'Cognitive skills & growth beyond marks' },
    { name: 'For Parents', path: '/parents', icon: Users, desc: 'Parent guidance and learning gap diagnosis' },
    { name: 'Contact & Admissions', path: '/contact', icon: Phone, desc: 'Schedule a diagnostic consultation' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy', icon: Shield },
    { name: 'Terms & Conditions', path: '/terms', icon: FileText },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white ${
          isScrolled
            ? 'shadow-sm border-b border-slate-200 py-3'
            : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <BrainSetuLogo iconSize={64} />
            </div>

            {/* Desktop: ONLY Home, Programs, Contact */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {primaryLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-brand-primary-deep font-bold bg-slate-100'
                        : 'text-brand-navy-700 hover:text-brand-primary hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions: Auth + Enquire Now + ☰ Menu button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dynamic Auth CTA */}
              {user ? (
                <Link
                  to="/learning-lab"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-brand-primary border border-cyan-200 text-xs sm:text-sm font-bold transition-colors shadow-xs"
                  title="Open Neural Memory Lab"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  <span>Learning Lab</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-brand-navy-700 hover:text-brand-primary hover:bg-slate-100 transition-colors"
                >
                  <span>Sign In</span>
                </Link>
              )}

              {/* Enquire Now Button */}
              <Button
                variant="accent"
                size="sm"
                onClick={() => setEnquiryModalOpen(true)}
                className="text-xs sm:text-sm px-3 sm:px-4 py-2"
              >
                Enquire Now
              </Button>

              {/* Hamburger Menu Trigger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-brand-navy-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                aria-label="Open Navigation Menu"
                aria-expanded={menuOpen}
              >
                <Menu className="w-4 h-4 text-brand-primary-deep" />
                <span className="hidden sm:inline">Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Slide-in Side Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-navy-900/40 backdrop-blur-xs transition-opacity animate-fadeIn"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white shadow-2xl h-full flex flex-col justify-between z-10 animate-slideLeft overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <BrainSetuLogo iconSize={32} />
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/80 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Member / Portal Card in Drawer */}
              <div className="p-4 mx-4 mt-4 rounded-2xl bg-gradient-to-br from-slate-900 to-brand-navy-900 text-white shadow-md">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'S'}
                        </div>
                        <div className="text-xs leading-tight">
                          <span className="font-bold text-slate-100 block truncate max-w-[140px]">
                            {user.displayName}
                          </span>
                          <span className="text-[10px] text-cyan-300">
                            {user.xp} XP • {user.streak} Day Streak
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={logout}
                        className="text-[11px] text-slate-400 hover:text-rose-300 font-medium transition-colors"
                      >
                        Logout
                      </button>
                    </div>

                    <Link
                      to="/learning-lab"
                      onClick={() => setMenuOpen(false)}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-primary text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition-opacity"
                    >
                      <Brain className="w-3.5 h-3.5" />
                      <span>Launch Neural Memory Lab</span>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-2.5 text-center">
                    <div className="text-left">
                      <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                        Student Portal
                      </span>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Sign in to access the Neural Memory Lab (Module 3) & save progress.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <Link
                        to="/login"
                        onClick={() => setMenuOpen(false)}
                        className="py-1.5 px-3 rounded-xl bg-white text-brand-primary-deep text-xs font-bold text-center hover:bg-slate-100 transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() => setMenuOpen(false)}
                        className="py-1.5 px-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-bold text-center hover:bg-cyan-500/30 transition-colors"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Navigation Links */}
              <div className="p-5 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                  Navigation
                </div>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-brand-primary-deep font-bold'
                        : 'text-brand-navy-800 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>Home</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </NavLink>

                <NavLink
                  to="/programs"
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-brand-primary-deep font-bold'
                        : 'text-brand-navy-800 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>Programs & Masterclasses</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </NavLink>

                {/* Neural Memory Lab Link */}
                <NavLink
                  to="/learning-lab"
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-cyan-50 text-brand-primary font-bold'
                        : 'text-brand-navy-800 hover:bg-slate-50'
                    }`
                  }
                >
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-cyan-600" />
                    <span>Neural Memory Lab</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800">
                    Module 3
                  </span>
                </NavLink>

                <div className="pt-3 pb-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                    Explore BrainSetu
                  </div>
                </div>

                {drawerLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-start gap-3 p-3 rounded-xl text-sm transition-colors ${
                          isActive
                            ? 'bg-cyan-50/80 text-brand-secondary font-bold'
                            : 'text-brand-navy-800 hover:bg-slate-50'
                        }`
                      }
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-tight text-brand-primary-deep">
                          {item.name}
                        </p>
                        <p className="text-xs text-brand-slate-muted truncate mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer & Action */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-4">
              
              {/* Quick Contact & Center Box */}
              <div className="p-3.5 rounded-2xl bg-white border border-amber-300/80 shadow-xs space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-tight text-slate-700">
                    <span className="font-bold text-brand-primary-deep block">BrainSetu Academy</span>
                    <span>Feliz Flow Studio, Next to Hiranandani Trust School, Panvel – 410207</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                    <a href="tel:+918805333303" className="font-semibold text-brand-navy-900 hover:text-brand-secondary">
                      +91 8805333303
                    </a>
                  </div>

                  <a 
                    href={siteConfig.contact.socials.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1 text-pink-600 font-semibold hover:underline"
                  >
                    <InstagramIcon className="w-3 h-3" />
                    <span>{siteConfig.contact.socials.instagramHandle}</span>
                  </a>
                </div>
              </div>

              <Button
                variant="accent"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
              >
                Book Diagnostic Consultation
              </Button>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                {legalLinks.map((leg) => (
                  <NavLink
                    key={leg.path}
                    to={leg.path}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {leg.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Enquiry Modal */}
      <EnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </>
  );
};
