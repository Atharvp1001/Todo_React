import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

const mockCategories = [
  { id: 'work', name: 'Work' },
  { id: 'other', name: 'Other' }
];

const mockPriorities = [
  { id: 'high', name: 'High' }
];

test('renders todo item correctly', () => {
  const { getByText } = render(
    <TodoItem 
      todo={{ 
        id: '1',
        text: 'Buy groceries',
        category: 'work',
        priority: 'high'
      }}
      categories={mockCategories}
      priorities={mockPriorities}
      onDelete={() => {}}
      onToggle={() => {}}
    />
  );
  expect(getByText('Buy groceries')).toBeInTheDocument();
});