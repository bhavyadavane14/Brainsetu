import React from 'react';
import { Link } from 'react-router-dom';

interface BrainSetuLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
  iconSize?: number;
  layout?: 'horizontal' | 'stacked';
}

export const BrainSetuLogo: React.FC<BrainSetuLogoProps> = ({
  variant = 'light',
  showTagline = false,
  className = '',
  iconSize = 58,
  layout = 'horizontal',
}) => {
  const isDark = variant === 'dark';
  const logoSrc = layout === 'stacked'
    ? '/images/brainsetu-logo-transparent.png'
    : '/images/brainsetu-logo-horizontal.png';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group select-none transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="BrainSetu Academy Home"
    >
      <div className="relative flex items-center">
        <img
          src={logoSrc}
          alt="BrainSetu Academy"
          className={`w-auto object-contain transition-all duration-200 group-hover:scale-[1.02] ${
            isDark ? 'brightness-110 drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)]' : 'drop-shadow-sm'
          }`}
          style={{ height: `${iconSize}px` }}
        />
      </div>

      {showTagline && (
        <span className={`text-[10px] tracking-widest font-bold uppercase border-l pl-2.5 ml-1 hidden sm:inline-block ${
          isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-brand-slate-muted'
        }`}>
          The Learning Bridge
        </span>
      )}
    </Link>
  );
};
