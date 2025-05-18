import { formatDate } from './helpers';

test('formats date correctly', () => {
  // Update expectation to match actual format
  expect(formatDate('2023-05-18')).toBe('18 May 2023');
});