import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  background?: 'navy' | 'cream' | 'white' | 'gradient';
  className?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  background = 'navy',
  className,
}: HeroProps) {
  const backgroundStyles = {
    navy: 'bg-[#1a2332] text-white',
    cream: 'bg-[#faf8f0] text-[#1a2332]',
    white: 'bg-white text-[#1a2332]',
    gradient: 'bg-gradient-to-br from-[#1a2332] to-[#2d3748] text-white',
  };

  return (
    <section className={`${backgroundStyles[background]} pt-32 pb-20 px-4 sm:px-6 lg:px-8 ${className || ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {ctaText && (
              <Button
                variant={background === 'cream' || background === 'white' ? 'brand' : 'primary'}
                size="lg"
                href={ctaHref || '#'}
              >
                {ctaText}
              </Button>
            )}
            {secondaryCtaText && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryCtaHref || '#'}
                className={background === 'navy' || background === 'gradient' ? 'border-white text-white hover:bg-white hover:text-[#1a2332]' : ''}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
