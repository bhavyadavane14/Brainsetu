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
