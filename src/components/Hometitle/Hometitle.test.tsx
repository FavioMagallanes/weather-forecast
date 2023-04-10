import { render, screen } from '@testing-library/react';

import HomeTitle from './HomeTitle';

describe('HomeTitle', () => {
  it('renders the component without errors', () => {
    render(<HomeTitle />);
    const title = screen.getByText(/Weather/i);
    const subtitle = screen.getByText(/Forecast/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the component with correct styles', () => {
    render(<HomeTitle />);
    const title = screen.getByText(/Weather/i);
    const subtitle = screen.getByText(/Forecast/i);
    expect(title).toHaveClass('gradient-text');
    expect(title).toHaveClass('text-white');
    expect(title).toHaveClass('title');
    expect(title).toHaveClass('text-8xl');
    expect(title).toHaveClass('font-extrabold');
    expect(title).toHaveClass('tracking-[-.06em]');
    expect(title).toHaveClass('text-center');
    expect(subtitle).toHaveClass('gradient-text');
    expect(subtitle).toHaveClass('text-white');
    expect(subtitle).toHaveClass('title');
    expect(subtitle).toHaveClass('text-8xl');
    expect(subtitle).toHaveClass('font-extrabold');
    expect(subtitle).toHaveClass('tracking-[-.06em]');
    expect(subtitle).toHaveClass('text-center');
  });
});
