import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyleGuide from '../frontend/src/pages/StyleGuide';

describe('StyleGuide Page', () => {
  it('renders the page title', () => {
    render(<StyleGuide />);
    expect(screen.getByText('TrueNorth Style Guide')).toBeInTheDocument();
  });

  it('renders brand positioning section', () => {
    render(<StyleGuide />);
    expect(screen.getByText('Brand Positioning')).toBeInTheDocument();
    expect(screen.getByText(/A founder can move from rough idea/i)).toBeInTheDocument();
  });

  it('renders color palette section', () => {
    render(<StyleGuide />);
    expect(screen.getByText('Color Palette')).toBeInTheDocument();
    expect(screen.getByText('Primary Blues')).toBeInTheDocument();
    expect(screen.getByText('Brand Colors')).toBeInTheDocument();
  });

  it('renders typography section', () => {
    render(<StyleGuide />);
    expect(screen.getByText('Typography')).toBeInTheDocument();
    expect(screen.getByText('Font Families')).toBeInTheDocument();
    expect(screen.getByText('Type Scale')).toBeInTheDocument();
  });

  it('renders buttons section', () => {
    render(<StyleGuide />);
    expect(screen.getByText('Buttons')).toBeInTheDocument();
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
    expect(screen.getByText('Brand Button')).toBeInTheDocument();
  });

  it('renders animation tokens section', () => {
    render(<StyleGuide />);
    expect(screen.getByText('Animations')).toBeInTheDocument();
    expect(screen.getByText('fade-in')).toBeInTheDocument();
    expect(screen.getByText('slide-up')).toBeInTheDocument();
  });

  it('renders accessibility notes section', () => {
    render(<StyleGuide />);
    expect(screen.getByText('Accessibility Notes')).toBeInTheDocument();
    expect(screen.getByText('WCAG 2.1 AA Compliant')).toBeInTheDocument();
  });
});
