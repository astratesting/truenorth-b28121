import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../frontend/src/pages/LandingPage';

describe('LandingPage', () => {
  it('renders the hero section with title', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Navigate Your Path to Success/i)).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('What We Do')).toBeInTheDocument();
    expect(screen.getByText('Brand Strategy')).toBeInTheDocument();
    expect(screen.getByText('Product Design')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Go-to-Market')).toBeInTheDocument();
  });

  it('renders the features section', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('What You Get')).toBeInTheDocument();
    expect(screen.getByText('Positioning & Messaging')).toBeInTheDocument();
    expect(screen.getByText('Visual Identity')).toBeInTheDocument();
  });

  it('renders the testimonials section', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('What Founders Say')).toBeInTheDocument();
    expect(screen.getByText(/TrueNorth transformed our vague idea/i)).toBeInTheDocument();
  });

  it('renders the contact section with form', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Ready to Launch?')).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByText('Start Your Journey')).toBeInTheDocument();
    expect(screen.getByText('See How It Works')).toBeInTheDocument();
  });
});
