import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

const mockTodo = {
  id: 1,
  text: 'Test task',
  category: 'work',
  priority: 'high',
  completed: false,
  dueDate: '2023-12-31'
};

const mockCategories = [
  { id: 'work', name: 'Work', color: '#4285f4' },
  { id: 'other', name: 'Other', color: '#888' }
];

const mockPriorities = [
  { id: 'high', name: 'High', color: '#ff4444' },
  { id: 'medium', name: 'Medium', color: '#ffcc00' }
];

describe('TodoItem', () => {
  test('renders todo text and details', () => {
    render(
      <TodoItem 
        todo={mockTodo}
        categories={mockCategories}
        priorities={mockPriorities}
      />
    );
    
    expect(screen.getByText('Test task')).toBeInTheDocument();
    expect(screen.getByText('Category: Work')).toBeInTheDocument();
    expect(screen.getByText('Priority: High')).toBeInTheDocument();
    expect(screen.getByText('📅 Due Date: Dec 31, 2023')).toBeInTheDocument();
  });

  test('shows completed state', () => {
    render(
      <TodoItem 
        todo={{ ...mockTodo, completed: true }}
        categories={mockCategories}
        priorities={mockPriorities}
      />
    );
    
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByText('Test task')).toHaveStyle('text-decoration: line-through');
  });

  test('triggers delete callback', () => {
    const mockDelete = jest.fn();
    render(
      <TodoItem 
        todo={mockTodo}
        categories={mockCategories}
        priorities={mockPriorities}
        onDelete={mockDelete}
      />
    );
    
    fireEvent.click(screen.getByText('Delete'));
    expect(mockDelete).toHaveBeenCalledWith(1); // ID of mockTodo
  });
});