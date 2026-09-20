import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  MessageSquare
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from '../common/SocialIcons';
import { BrainSetuLogo } from '../../assets/logo/BrainSetuLogo';
import { siteConfig } from '../../data/siteConfig';
import { programsData } from '../../data/programs';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-navy-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrainSetuLogo variant="dark" iconSize={42} />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-3">
              The Learning Bridge — Connecting Concepts, Thinking & Possibilities.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 max-w-sm">
              <p className="text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-1">
                Our Core Philosophy
              </p>
              <p className="text-xs text-slate-300 italic">
                "{siteConfig.philosophy}"
              </p>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={siteConfig.contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-secondary text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-secondary text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.contact.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-accent text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-cyan-300 transition-colors">{t('nav.programs')}</Link>
              </li>
              <li>
                <Link to="/learning-approach" className="hover:text-cyan-300 transition-colors">Learning Approach</Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-cyan-300 transition-colors">Technology & AI</Link>
              </li>
              <li>
                <Link to="/student-development" className="hover:text-cyan-300 transition-colors">{t('footer.studentDev')}</Link>
              </li>
              <li>
                <Link to="/parents" className="hover:text-cyan-300 transition-colors">{t('footer.forParents')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition-colors">{t('footer.contactEnquire')}</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-cyan-300 transition-colors">{t('footer.portal')}</Link>
              </li>
            </ul>
          </div>

          {/* Programs Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              {t('footer.programs')}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {programsData.map((prog) => (
                <li key={prog.slug}>
                  <Link 
                    to={`/programs/${prog.slug}`} 
                    className="hover:text-cyan-300 transition-colors flex items-center group"
                  >
                    <span>{prog.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Contact Info Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Academy Information
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <span className="font-semibold text-white block">BrainSetu Academy</span>
                  <span>{siteConfig.contact.address.studio}</span>
                  <span className="block text-slate-400">{siteConfig.contact.address.landmark}</span>
                  <span className="font-medium text-cyan-300">{siteConfig.contact.address.city}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+918805333303" className="hover:text-cyan-300 transition-colors">
                    +91 8805333303
                  </a>
                  <a href="tel:+919867063163" className="hover:text-cyan-300 transition-colors">
                    +91 9867063163
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={`https://wa.me/918805333303?text=${encodeURIComponent('Hello BrainSetu Academy, I would like to enquire about your programs.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 8805333303
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={siteConfig.contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 hover:border-pink-500/50 text-xs text-slate-300 hover:text-white transition-all group"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>Follow {siteConfig.contact.socials.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {siteConfig.copyrightYear} BrainSetu Academy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-cyan-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cyan-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Building Smarter Minds</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
