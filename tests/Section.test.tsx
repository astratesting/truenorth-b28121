import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Section from '../frontend/src/components/Section';

describe('Section Component', () => {
  it('renders children correctly', () => {
    render(
      <Section>
        <p>Test Content</p>
      </Section>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders title and subtitle when provided', () => {
    render(
      <Section title="Test Title" subtitle="Test Subtitle">
        <p>Content</p>
      </Section>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('does not render title/subtitle when not provided', () => {
    render(
      <Section>
        <p>Content</p>
      </Section>
    );
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  it('applies correct background class', () => {
    const { rerender } = render(
      <Section background="white">
        <p>Content</p>
      </Section>
    );
    let section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-white');

    rerender(
      <Section background="gray">
        <p>Content</p>
      </Section>
    );
    section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-gray-50');

    rerender(
      <Section background="navy">
        <p>Content</p>
      </Section>
    );
    section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-[#1a2332]');
  });

  it('applies correct padding class', () => {
    const { rerender } = render(
      <Section padding="sm">
        <p>Content</p>
      </Section>
    );
    let section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-8');

    rerender(
      <Section padding="lg">
        <p>Content</p>
      </Section>
    );
    section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-16');
  });

  it('applies custom className', () => {
    render(
      <Section className="custom-class">
        <p>Content</p>
      </Section>
    );
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('custom-class');
  });

  it('applies id when provided', () => {
    render(
      <Section id="test-section">
        <p>Content</p>
      </Section>
    );
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });
});
