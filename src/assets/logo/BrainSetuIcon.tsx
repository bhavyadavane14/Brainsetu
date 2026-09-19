import React from 'react';

interface BrainSetuIconProps {
  className?: string;
  size?: number;
}

export const BrainSetuIcon: React.FC<BrainSetuIconProps> = ({ className = 'w-9 h-9', size }) => {
  return (
    <img
      src="/images/brainsetu-emblem.png"
      alt="BrainSetu Emblem"
      className={`object-contain inline-block ${className}`}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};
