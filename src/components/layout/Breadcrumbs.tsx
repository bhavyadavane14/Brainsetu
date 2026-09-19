import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`py-3 ${className}`}>
      <ol className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-brand-slate-muted">
        <li>
          <Link 
            to="/" 
            className="flex items-center hover:text-brand-secondary transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="text-slate-400">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                {item.to && !isLast ? (
                  <Link 
                    to={item.to} 
                    className="hover:text-brand-secondary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-primary-deep font-semibold" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
