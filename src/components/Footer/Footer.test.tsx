import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer text with correct styles', () => {
    render(<Footer />);
    const text1 = screen.getByText('Personal Pay frontend challenge');
    const text2 = screen.getByText('Made with ❤️ by');
    const link = screen.getByRole('link');
    expect(text1).toBeInTheDocument();
    expect(text1).toHaveClass('text-slate-400');
    expect(text1).toHaveClass('text-xs');
    expect(text1).toHaveClass('font-bold');
    expect(text2).toBeInTheDocument();
    expect(link).toHaveClass('gradient-text');
  });
});
