// src/pages/Todos.test.js
test('adds a new todo', () => {
  render(<Todos />);
  
  // Use the actual placeholder text from your component
  fireEvent.change(
    screen.getByPlaceholderText('Enter task description'), 
    { target: { value: 'New Task' } }
  );
  
  fireEvent.click(screen.getByText('Add Task'));
  expect(screen.getByText('New Task')).toBeInTheDocument();
});

function TodoItem({ todo, categories = [], priorities = [] }) {
  const categoryData = categories.find(cat => cat.id === todo.category) || 
                      { id: 'other', name: 'Other' };
  // ... rest of component
}