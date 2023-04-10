import { render, screen } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  it('renders the spinner', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('progressbar');
    expect(spinner).toBeInTheDocument();
  });
});
