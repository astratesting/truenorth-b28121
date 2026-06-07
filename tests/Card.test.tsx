import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card, { CardHeader, CardBody, CardFooter } from '../frontend/src/components/Card';

describe('Card Components', () => {
  it('renders Card with default props', () => {
    render(<Card>Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('bg-white', 'rounded-xl', 'border', 'border-gray-200', 'p-6');
  });

  it('renders Card without hover effect when hover is false', () => {
    render(<Card hover={false}>No Hover</Card>);
    const card = screen.getByText('No Hover');
    expect(card).toHaveClass('shadow-md');
    expect(card).not.toHaveClass('hover:shadow-lg');
  });

  it('applies padding correctly', () => {
    const { rerender } = render(<Card padding="sm">Small Padding</Card>);
    let card = screen.getByText('Small Padding');
    expect(card).toHaveClass('p-4');

    rerender(<Card padding="lg">Large Padding</Card>);
    card = screen.getByText('Large Padding');
    expect(card).toHaveClass('p-8');

    rerender(<Card padding="none">No Padding</Card>);
    card = screen.getByText('No Padding');
    expect(card).not.toHaveClass('p-6', 'p-4', 'p-8');
  });

  it('renders CardHeader with correct styles', () => {
    render(<CardHeader>Header Content</CardHeader>);
    const header = screen.getByText('Header Content');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('border-b', 'border-gray-200', 'pb-4', 'mb-4');
  });

  it('renders CardBody with children', () => {
    render(<CardBody>Body Content</CardBody>);
    const body = screen.getByText('Body Content');
    expect(body).toBeInTheDocument();
  });

  it('renders CardFooter with correct styles', () => {
    render(<CardFooter>Footer Content</CardFooter>);
    const footer = screen.getByText('Footer Content');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('border-t', 'border-gray-200', 'pt-4', 'mt-4');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>);
    const card = screen.getByText('Custom');
    expect(card).toHaveClass('custom-class');
  });
});
