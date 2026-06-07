import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../frontend/src/components/Hero';

describe('Hero Component', () => {
  it('renders title and subtitle', () => {
    render(<Hero title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders CTA button when ctaText is provided', () => {
    render(<Hero title="Test" subtitle="Test" ctaText="Get Started" ctaHref="/start" />);
    const ctaButton = screen.getByRole('link', { name: /get started/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/start');
  });

  it('renders secondary CTA button when provided', () => {
    render(
      <Hero
        title="Test"
        subtitle="Test"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/learn"
      />
    );
    const secondaryCta = screen.getByRole('link', { name: /learn more/i });
    expect(secondaryCta).toBeInTheDocument();
    expect(secondaryCta).toHaveAttribute('href', '/learn');
  });

  it('applies correct background class', () => {
    const { rerender } = render(<Hero title="Test Title" subtitle="Test Subtitle" background="navy" />);
    let section = screen.getByText('Test Title').closest('section');
    expect(section).toHaveClass('bg-[#1a2332]');

    rerender(<Hero title="Test Title" subtitle="Test Subtitle" background="cream" />);
    section = screen.getByText('Test Title').closest('section');
    expect(section).toHaveClass('bg-[#faf8f0]');

    rerender(<Hero title="Test Title" subtitle="Test Subtitle" background="gradient" />);
    section = screen.getByText('Test Title').closest('section');
    expect(section).toHaveClass('bg-gradient-to-br');
  });

  it('does not render buttons when ctaText and secondaryCtaText are not provided', () => {
    render(<Hero title="Test" subtitle="Test" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
