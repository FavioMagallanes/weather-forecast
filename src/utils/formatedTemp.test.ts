import { formatedTemp } from '../utils';

describe('formatedTemp', () => {
  it('should round the temperature and return a string', () => {
    expect(formatedTemp(20.5)).toBe('21');
    expect(formatedTemp(18.1)).toBe('18');
    expect(formatedTemp(23)).toBe('23');
  });
});
