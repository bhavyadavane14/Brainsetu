import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3.5 ${
          dark 
            ? 'bg-cyan-500/10 border border-cyan-400/30 text-cyan-300' 
            : 'bg-brand-primary-subtle border border-blue-200/60 text-brand-primary'
        }`}>
          <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight leading-[1.2] ${
        dark ? 'text-white' : 'text-brand-primary-deep'
      }`}>
        {title}{' '}
        {highlightText && (
          <span className={dark ? 'text-cyan-400' : 'text-brand-secondary'}>
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-brand-slate-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
