import {
  render,
  fireEvent,
  screen,
  type RenderResult,
} from '@testing-library/react';

import Dropdown, { type Option, type Props } from './Dropdown';

describe('Dropdown', () => {
  const mockOptions: Option[] = [
    { value: 'Santa Fe', label: 'Santa Fe' },
    { value: 'Córdoba', label: 'Córdoba' },
    { value: 'Mendoza', label: 'Mendoza' },
    { value: 'Salta', label: 'Salta' },
    { value: 'Buenos Aires', label: 'Buenos Aires' },
  ];

  const mockHandleSelectCity = jest.fn();

  const setup = (props: Partial<Props> = {}): RenderResult => {
    const defaultProps: Props = {
      options: mockOptions,
      handleSelectCity: mockHandleSelectCity,
    };
    return render(<Dropdown {...defaultProps} {...props} />);
  };

  it('renders with options', () => {
    setup();
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.childNodes).toHaveLength(6);
  });

  it('calls handleSelectCity when an option is selected', () => {
    setup();
    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'Mendoza' } });
    expect(mockHandleSelectCity).toHaveBeenCalledWith('Mendoza');
  });
});
