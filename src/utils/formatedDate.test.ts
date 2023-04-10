import { formatDate } from '.';

describe('formatDate', () => {
  test('returns the formatted date string in Spanish', () => {
    const date = '2022-05-01T12:00:00.000Z';
    const expected = 'domingo,1 de mayo';
    const result = formatDate(date);
    expect(result).toBe(expected);
  });
});
