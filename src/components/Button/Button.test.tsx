import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
  test('renders button with text', () => {
    render(<Button text="Fetch Forecast" />);
    const buttonElement = screen.getByText('Fetch Forecast');
    expect(buttonElement).toBeInTheDocument();
  });
});
