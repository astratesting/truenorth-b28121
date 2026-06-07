import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../frontend/src/components/Nav';

describe('Nav Component', () => {
  it('renders logo/brand name', () => {
    render(<Nav />);
    expect(screen.getByText('TrueNorth')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Nav />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders Get Started button', () => {
    render(<Nav />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('has transparent background when transparent prop is true', () => {
    render(<Nav transparent={true} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-transparent');
  });

  it('has white background when transparent prop is false', () => {
    render(<Nav transparent={false} />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-white');
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Nav />);
    const menuButton = screen.getByLabelText('Toggle mobile menu');

    fireEvent.click(menuButton);

    fireEvent.click(menuButton);
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Nav />);
    const menuButton = screen.getByLabelText('Toggle mobile menu');

    fireEvent.click(menuButton);
    const aboutLinks = screen.getAllByText('About');
    fireEvent.click(aboutLinks[0]);
  });
});
