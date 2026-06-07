import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../frontend/src/components/Footer';

describe('Footer Component', () => {
  it('renders brand name', () => {
    render(<Footer />);
    expect(screen.getByText('TrueNorth')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Navigate your path to success/i)
    ).toBeInTheDocument();
  });

  it('renders all footer link sections', () => {
    render(<Footer />);
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
  });

  it('renders all product links', () => {
    render(<Footer />);
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Integrations')).toBeInTheDocument();
    expect(screen.getByText('Changelog')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 TrueNorth/i)).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    const privacyLinks = screen.getAllByText('Privacy Policy');
    expect(privacyLinks.length).toBeGreaterThan(0);
    const termsLinks = screen.getAllByText('Terms of Service');
    expect(termsLinks.length).toBeGreaterThan(0);
  });
});
