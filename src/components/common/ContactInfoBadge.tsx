import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { InstagramIcon } from './SocialIcons';

interface ContactInfoBadgeProps {
  className?: string;
  variant?: 'light' | 'dark' | 'card';
}

export const ContactInfoBadge: React.FC<ContactInfoBadgeProps> = ({
  className = '',
  variant = 'card'
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-2xl border-2 transition-all ${
        isDark
          ? 'bg-slate-900/90 border-amber-500/60 text-white shadow-xl shadow-slate-950/40'
          : 'bg-white/95 border-amber-400/80 text-slate-800 shadow-md shadow-amber-500/5'
      } p-4 sm:p-5 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-3 items-center">
        
        {/* Column 1: Phone Numbers (approx 4 cols) */}
        <div className="md:col-span-4 flex flex-col justify-center space-y-2.5 md:pr-4 md:border-r md:border-amber-300/50">
          <a
            href="tel:+918805333303"
            className="flex items-center gap-3 group hover:opacity-85 transition-opacity"
            title="Call +91 8805333303"
          >
            <div className="w-8 h-8 rounded-full bg-brand-primary-deep text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 fill-white text-white" />
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-wide font-display text-brand-navy-900 dark:text-white">
              +91 8805333303
            </span>
          </a>

          <a
            href="tel:+919867063163"
            className="flex items-center gap-3 group hover:opacity-85 transition-opacity"
            title="Call +91 9867063163"
          >
            <div className="w-8 h-8 rounded-full bg-brand-primary-deep text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 fill-white text-white" />
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-wide font-display text-brand-navy-900 dark:text-white">
              +91 9867063163
            </span>
          </a>
        </div>

        {/* Column 2: Center Location (approx 5 cols) */}
        <div className="md:col-span-5 flex items-start gap-3 md:px-4 md:border-r md:border-amber-300/50">
          <div className="w-8 h-8 rounded-full bg-brand-primary-deep text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs sm:text-sm leading-relaxed">
            <h4 className="font-extrabold text-brand-primary-deep dark:text-cyan-300 text-sm sm:text-base">
              BrainSetu Academy
            </h4>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Feliz Flow Studio</p>
            <p className="text-slate-600 dark:text-slate-400">Next to Hiranandani Trust School,</p>
            <p className="text-slate-700 dark:text-slate-300 font-semibold">Panvel – 410207</p>
          </div>
        </div>

        {/* Column 3: Instagram (approx 3 cols) */}
        <div className="md:col-span-3 flex items-center gap-3.5 md:pl-3">
          <a
            href={siteConfig.contact.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
            title="Follow BrainSetu Academy on Instagram"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[14px] flex items-center justify-center text-white">
                <InstagramIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Instagram
              </span>
              <span className="text-xs font-semibold text-brand-secondary hover:underline break-all">
                {siteConfig.contact.socials.instagramHandle}
              </span>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
