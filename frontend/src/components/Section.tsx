import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray' | 'cream' | 'navy';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

export function Section({
  children,
  title,
  subtitle,
  background = 'white',
  padding = 'lg',
  className,
  id,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    cream: 'bg-[#faf8f0]',
    navy: 'bg-[#1a2332] text-white',
  };

  const paddingStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
  };

  return (
    <section
      id={id}
      className={clsx(backgroundStyles[background], paddingStyles[padding], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
