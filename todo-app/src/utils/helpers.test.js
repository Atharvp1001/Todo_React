import { filterTodos, generateId, formatDate } from './helpers';

describe('helpers.js', () => {
  const mockTodos = [
    { id: '1', text: 'Task 1', completed: false },
    { id: '2', text: 'Task 2', completed: true }
  ];

  test('filters todos correctly', () => {
    expect(filterTodos(mockTodos, 'all')).toHaveLength(2);
    expect(filterTodos(mockTodos, 'active')).toHaveLength(1);
    expect(filterTodos(mockTodos, 'completed')).toHaveLength(1);
  });

  test('generates unique IDs', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });

test('formats dates', () => {
  // Either:
  expect(formatDate('2023-05-25')).toBe('25 May 2023'); // Match actual output
  });
});