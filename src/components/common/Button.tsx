import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary: 'bg-brand-primary-deep text-white hover:bg-brand-primary focus:ring-brand-primary shadow-md hover:shadow-lg',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary-teal focus:ring-brand-secondary shadow-md hover:shadow-glow',
    accent: 'bg-brand-accent text-white hover:bg-brand-accent-warm focus:ring-brand-accent shadow-md hover:shadow-glow-accent',
    outline: 'border-2 border-brand-primary-deep text-brand-primary-deep hover:bg-brand-primary-subtle focus:ring-brand-primary',
    ghost: 'text-brand-primary-deep hover:bg-slate-100 focus:ring-slate-300',
    glass: 'bg-white/80 hover:bg-white text-brand-primary-deep border border-slate-200/80 shadow-sm backdrop-blur-md hover:shadow-md',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
