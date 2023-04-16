import { formatDate } from '.';

describe('formatDate', () => {
  test('should format date string correctly', () => {
    const date = '2022-05-01T12:00:00.000Z';
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual('domingo,1');
  });

  test('should format another date string correctly', () => {
    const date = '2022-12-25T10:00:00.000Z';
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual('domingo,25');
  });
});
